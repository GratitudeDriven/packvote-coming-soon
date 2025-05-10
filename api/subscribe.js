import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Determine which schema to use based on environment variables
// VERCEL_ENV is automatically set by Vercel: 'production', 'preview', or 'development'
// We'll use 'prod' for production (main branch) and 'dev' for others
const schema = process.env.VERCEL_ENV === 'production' ? 'prod' : 'dev';
console.log(`Using schema: ${schema}`);

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

// This is a simple serverless function to handle email subscriptions
export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Check if Supabase credentials are properly set
  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase credentials missing');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    // Get email from request body
    const { email, source = 'coming_soon_page' } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }

    console.log(`Attempting to insert email: ${email} into table: email_subscribers in schema: ${schema}`);

    // Use direct fetch approach with Supabase for full header control
    const response = await fetch(`${supabaseUrl}/rest/v1/email_subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'return=minimal',
        'x-schema': schema
      },
      body: JSON.stringify({ 
        email, 
        source,
        created_at: new Date().toISOString()
      })
    });

    // Parse the response
    const result = await response.json().catch(() => null);
    
    if (!response.ok) {
      const error = result || { message: 'Unknown error occurred' };
      console.error('Supabase insert error:', error);
      
      // Check if it's a duplicate email error (status 409 or error code 23505)
      if (response.status === 409 || (error.code === '23505') || 
          (error.message && error.message.includes('already exists'))) {
        return res.status(409).json({ message: 'You are already subscribed!' });
      }
      
      throw new Error(error.message || 'Server error');
    }

    // Return success response
    return res.status(200).json({ 
      message: 'Thanks for subscribing! We\'ll keep you updated on our launch.',
      data: result
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ message: 'Server error, please try again' });
  }
} 