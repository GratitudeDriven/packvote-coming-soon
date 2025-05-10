# PackVote Coming Soon Page

This is a temporary landing page for PackVote, an AI-powered travel planning app that helps groups decide on their next destination.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your Supabase credentials:
```bash
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

3. Start the development server:
```bash
npm start
```

## Setting Up Email Collection

1. Run the SQL script in the Supabase SQL Editor to create the necessary tables:

```sql
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

-- Set up permissions
-- Enable RLS on the email_subscribers table
ALTER TABLE dev.email_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE prod.email_subscribers ENABLE ROW LEVEL SECURITY;

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

-- Grant the object privileges on the table
GRANT ALL ON dev.email_subscribers TO postgres, service_role;
GRANT INSERT ON dev.email_subscribers TO anon, authenticated;

GRANT ALL ON prod.email_subscribers TO postgres, service_role;
GRANT INSERT ON prod.email_subscribers TO anon, authenticated;
```

2. When deploying to Vercel, add the environment variables in your Vercel project settings:
   - SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY

## Environment-based Schema Selection

The application automatically uses different Supabase schemas based on the deployment environment:

1. **Production (main branch)**: Uses the `prod` schema
2. **Preview/Development (other branches)**: Uses the `dev` schema

This is controlled by the Vercel environment variable `VERCEL_ENV` which is automatically set based on the deployment type:
- `production` for the main branch
- `preview` for PR or branch deployments
- `development` for local development

No additional configuration is needed as this is handled automatically by the API code.

## Deployment to Vercel

1. Push this repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add the environment variables mentioned above
6. Deploy!

## Features
- Coming soon landing page
- Email signup form that saves to Supabase
- Information about PackVote's features
- Mobile responsive design

## Tech Stack
- React
- Material-UI
- Vercel for hosting
- Supabase for database 