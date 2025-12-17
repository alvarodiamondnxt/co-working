# Environment Variables Setup

Create a `.env` file in the root of the project with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/coworking?schema=public"

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

1. **DATABASE_URL**: PostgreSQL database connection URL
2. **NEXTAUTH_SECRET**: Generate a secret key with: `openssl rand -base64 32`
3. **GMAIL_USER**: Your Gmail email address
4. **GMAIL_APP_PASSWORD**: Gmail app password (16 characters without spaces)
   - See `GMAIL_PASSWORD_FORMAT.md` for detailed instructions
