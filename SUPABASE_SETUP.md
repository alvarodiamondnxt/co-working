# Supabase Setup Guide

This guide will help you configure Supabase as your database for the CoWorking application.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- A Supabase project created

## Step 1: Get Your Connection String

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project (or create a new one)
3. Navigate to **Settings** > **Database**
4. Scroll down to **Connection string**
5. Select **Connection pooling** mode (recommended for serverless/Next.js)
6. Copy the connection string

The connection string will look like:
```
postgresql://postgres.bmnhvvnsdfpkgaumhmtp:[YOUR-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres
```

**Important:**
- Replace `[YOUR-PASSWORD]` with your actual database password
- The password is the one you set when creating the Supabase project
- If you forgot it, you can reset it in Settings > Database > Database password

## Step 2: Get Your API Key

1. In Supabase Dashboard, go to **Settings** > **API**
2. Find the **Project API keys** section
3. Copy the **anon** or **public** key (this is safe to use in client-side code)
4. For server-side operations, you can also use the **service_role** key (keep this secret!)

## Step 3: Configure Environment Variables

Add these to your `.env` file:

```env
# Supabase Database Connection String
# Format: postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
SUPABASE_URL="postgresql://postgres.bmnhvvnsdfpkgaumhmtp:your-password@aws-0-us-east-1.pooler.supabase.com:6543/postgres"

# Supabase Project URL
SUPABASE_PROJECT_URL="https://bmnhvvnsdfpkgaumhmtp.supabase.co"

# Supabase API Key (anon/public key)
SUPABASE_API_KEY="your-supabase-api-key"
```

## Step 4: Initialize Database Schema

Run Prisma commands to create the database tables:

```bash
# Generate Prisma Client
npm run db:generate

# Push schema to Supabase (creates all tables)
npm run db:push
```

Or create a migration:

```bash
npm run db:migrate
```

## Step 5: Verify Connection

After running `npm run db:push`, you should see:
- Tables created in your Supabase database
- No errors in the console

You can verify by:
1. Going to Supabase Dashboard > Table Editor
2. You should see tables: `User`, `Session`, `VerificationCode`, `Booking`

## Connection String Formats

### Connection Pooling (Recommended for Next.js)
```
postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
```
- Port: `6543`
- Use this for production and serverless environments

### Direct Connection (Alternative)
```
postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres
```
- Port: `5432`
- Use this for local development if pooling doesn't work

## Troubleshooting

### Error: "Connection refused"
- Verify your connection string is correct
- Check that your IP is allowed in Supabase Dashboard > Settings > Database > Connection pooling
- Try using the direct connection format (port 5432)

### Error: "Password authentication failed"
- Verify your database password is correct
- You can reset it in Settings > Database > Database password

### Error: "Relation does not exist"
- Run `npm run db:push` to create the tables
- Or run `npm run db:migrate` to create a migration

### Tables not appearing in Supabase
- Make sure you're looking in the correct schema (usually `public`)
- Refresh the Table Editor in Supabase Dashboard
- Check the Supabase logs for any errors

## Security Notes

- **Never commit your `.env` file** to version control
- The `SUPABASE_URL` contains your database password - keep it secret
- Use the `anon` key for client-side operations
- Use the `service_role` key only for server-side admin operations
- Enable Row Level Security (RLS) in Supabase for additional security

## Next Steps

After setting up Supabase:
1. Test the connection by running the app: `npm run dev`
2. Try registering a new user
3. Check Supabase Dashboard > Table Editor to see the data
4. Monitor your database usage in Supabase Dashboard

