import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Determine which schema to use based on environment variables
// VERCEL_ENV is automatically set by Vercel: 'production', 'preview', or 'development'
// We'll use 'prod' for production (main branch) and 'dev' for others
const tablePrefix = process.env.VERCEL_ENV === 'production' ? 'prod_' : 'dev_';

console.log(`Using table prefix: ${tablePrefix}`);

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

// This is a simple serverless function to handle email subscriptions
export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get email from request body
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }

    // Insert email into Supabase table with the correct table name including prefix
    const { data, error } = await supabase
      .from(`${tablePrefix}email_subscribers`)
      .insert([
        { 
          email,
          source: 'coming_soon_page',
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') { // PostgreSQL unique violation code
        return res.status(409).json({ message: 'You are already subscribed!' });
      }
      throw error;
    }

    // Return success response
    return res.status(200).json({ 
      message: 'Thanks for subscribing! We\'ll keep you updated on our launch.',
      data
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ message: 'Server error, please try again' });
  }
} 