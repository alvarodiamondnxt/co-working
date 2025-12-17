# Environment Variables Setup

Create a `.env` file in the root of the project with the following variables:

```env
# Supabase Database
# Get the connection string from Supabase Dashboard > Settings > Database > Connection string
# Format: postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
SUPABASE_URL="postgresql://postgres.bmnhvvnsdfpkgaumhmtp:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres"

# Supabase Project (optional, for future Supabase client usage)
SUPABASE_PROJECT_URL="https://bmnhvvnsdfpkgaumhmtp.supabase.co"
SUPABASE_API_KEY="your-supabase-api-key"

# NextAuth
NEXTAUTH_URL="http://localhost:5000"
NEXTAUTH_SECRET="your-nextauth-secret-key-here"

# Gmail Configuration
GMAIL_USER="your-email@gmail.com"
GMAIL_APP_PASSWORD="your-gmail-app-password"
# Note: App password must be 16 characters without spaces
# See GMAIL_PASSWORD_FORMAT.md for more details
```

## Instructions:

1. **SUPABASE_URL**: PostgreSQL connection string from Supabase
   - Go to Supabase Dashboard > Settings > Database
   - Copy the "Connection string" under "Connection pooling"
   - Replace `[YOUR-PASSWORD]` with your database password
   - Replace `[REGION]` with your Supabase region (e.g., `us-east-1`)
2. **SUPABASE_PROJECT_URL**: Your Supabase project URL (e.g., `https://bmnhvvnsdfpkgaumhmtp.supabase.co`)
3. **SUPABASE_API_KEY**: Your Supabase API key (anon/public key from Settings > API)
4. **NEXTAUTH_SECRET**: Generate a secret key with: `openssl rand -base64 32`
5. **GMAIL_USER**: Your Gmail email address
6. **GMAIL_APP_PASSWORD**: Gmail app password (16 characters without spaces)
   - See `GMAIL_PASSWORD_FORMAT.md` for detailed instructions
