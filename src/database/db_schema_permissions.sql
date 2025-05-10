-- Permissions for email_subscribers table
-- Run this in the Supabase SQL Editor after creating the email_subscribers table

-- Enable RLS on the email_subscribers table
ALTER TABLE dev.email_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE prod.email_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Service role can manage email subscribers" ON dev.email_subscribers;
DROP POLICY IF EXISTS "Service role can manage email subscribers" ON prod.email_subscribers;
DROP POLICY IF EXISTS "Authenticated users can add email subscribers" ON dev.email_subscribers;
DROP POLICY IF EXISTS "Authenticated users can add email subscribers" ON prod.email_subscribers;

-- Create policy for service role to have full access (for your API)
CREATE POLICY "Service role can manage email subscribers" ON dev.email_subscribers
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Service role can manage email subscribers" ON prod.email_subscribers
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Allow authenticated users to insert email subscribers but not read/update/delete
CREATE POLICY "Authenticated users can add email subscribers" ON dev.email_subscribers
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Authenticated users can add email subscribers" ON prod.email_subscribers
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Also grant the object privileges on the table
GRANT ALL ON dev.email_subscribers TO postgres, service_role;
GRANT INSERT ON dev.email_subscribers TO anon, authenticated;

GRANT ALL ON prod.email_subscribers TO postgres, service_role;
GRANT INSERT ON prod.email_subscribers TO anon, authenticated; 