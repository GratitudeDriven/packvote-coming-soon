-- Email subscribers table for the coming soon page
-- Add this to your existing Supabase schema

-- Create subscribers table in both dev and prod schemas
CREATE TABLE IF NOT EXISTS dev.email_subscribers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    source TEXT DEFAULT 'coming_soon_page',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS prod.email_subscribers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    source TEXT DEFAULT 'coming_soon_page',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
); 