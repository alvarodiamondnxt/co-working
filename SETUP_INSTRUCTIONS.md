# Setup Instructions - CoWorking Application

## ✅ Implemented Features

1. **2FA Authentication with Gmail**
   - Registration with email verification code
   - Login with 2FA code
   - Welcome email on registration

2. **PostgreSQL Database**
   - Everything is saved in PostgreSQL (nothing in localStorage)
   - Models: User, Session, VerificationCode, PaymentMethod, Booking

3. **Stripe Payment Methods**
   - Add credit cards
   - Manage saved payment methods
   - Complete Stripe integration

4. **Booking System**
   - Users can book workspaces
   - Automatic email confirmations
   - Owner notifications

5. **Navigation**
   - Header with Login/Register options
   - User menu when authenticated
   - Profile and payment method pages

## 🚀 Setup Steps

### 1. Configure Environment Variables

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/coworking?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:5000"
NEXTAUTH_SECRET="generate-a-secret-key-here"

# Gmail Configuration
GMAIL_USER="your-email@gmail.com"
GMAIL_APP_PASSWORD="your-app-password"

# Stripe
STRIPE_SECRET_KEY="sk_test_your_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your_public_key"
```

**To generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

**To get GMAIL_APP_PASSWORD:**
1. Go to your Google account
2. Security → 2-Step Verification
3. App passwords
4. Generate a new one for "Mail"

### 2. Configure PostgreSQL Database

1. Create a PostgreSQL database:
```sql
CREATE DATABASE coworking;
```

2. Update the `DATABASE_URL` in `.env`

3. Run migrations:
```bash
npm run db:push
```

Or create a migration:
```bash
npm run db:migrate
```

### 3. Generate Prisma Client

```bash
npm run db:generate
```

### 4. Start the Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
app/
├── api/
│   ├── auth/
│   │   ├── [...nextauth]/route.ts  # NextAuth config
│   │   ├── login/route.ts          # Login endpoint
│   │   ├── register/route.ts       # Register endpoint
│   │   └── verify/route.ts         # Verify code endpoint
│   ├── booking/
│   │   └── route.ts                # Booking endpoint
│   └── payment/
│       ├── create-customer/route.ts
│       ├── setup-intent/route.ts
│       └── methods/route.ts
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Spaces.tsx
│   ├── Booking.tsx
│   └── Footer.tsx
├── login/page.tsx
├── register/page.tsx
├── payment/page.tsx
├── profile/page.tsx
└── page.tsx

lib/
├── prisma.ts      # Prisma client
├── auth.ts        # Auth helpers
├── email.ts       # Email sending
└── stripe.ts      # Stripe client

prisma/
└── schema.prisma  # Database schema
```

## 🔐 Authentication Flow

1. **Registration:**
   - User completes form
   - User is created in DB (hashed password)
   - Verification code is sent via email
   - User enters code
   - Email is verified and welcome email is sent

2. **Login:**
   - User enters email and password
   - Credentials are validated
   - 2FA code is sent via email
   - User enters code
   - Session is created with NextAuth

## 💳 Payment Flow

1. User goes to `/payment`
2. Click "Add Payment Method"
3. Setup Intent is created in Stripe
4. User completes card form
5. Payment method is saved in Stripe and DB

## 📝 Important Notes

- **Everything is saved in PostgreSQL** - No localStorage is used
- Verification codes expire in 10 minutes
- Codes can only be used once
- Passwords are hashed with bcrypt
- Sessions are managed with NextAuth (JWT)

## 🛠️ Useful Commands

```bash
# Development
npm run dev

# Generate Prisma Client
npm run db:generate

# Sync schema with DB
npm run db:push

# Create migration
npm run db:migrate

# Open Prisma Studio (DB GUI)
npm run db:studio
```
