# Email System Configuration

## ✅ Improved Email System

The email system has been improved with:

1. **Environment variable validation** - Verifies that GMAIL_USER and GMAIL_APP_PASSWORD are configured
2. **Connection verification** - Checks Gmail server connection on startup
3. **Better error handling** - Detailed logs for debugging
4. **Improved emails** - More professional and responsive design

## 📧 Features

### 1. Verification Code Email
- Sent when user registers
- Sent when user attempts to login (2FA)
- 6-digit code
- Expires in 10 minutes
- Professional gradient design

### 2. Welcome Email
- Automatically sent after verifying registration code
- Includes information about available services
- Attractive and professional design

### 3. Booking Confirmation Email
- Sent to user when they submit a booking
- Includes all booking details (space, date, time, phone)

### 4. Booking Notification Email
- Sent to owner (alvarodct23@gmail.com) when a booking is submitted
- Includes all customer and booking information

## 🔧 Required Configuration

Make sure you have in your `.env` file:

```env
GMAIL_USER="your-email@gmail.com"
GMAIL_APP_PASSWORD="your-app-password"
```

### How to get GMAIL_APP_PASSWORD:

1. Go to your Google account: https://myaccount.google.com/
2. Security → 2-Step Verification (must be enabled)
3. App passwords
4. Select "Mail" and "Other (custom name)"
5. Enter "CoWorking App" as the name
6. Copy the generated password (16 characters without spaces)
7. Paste it in `GMAIL_APP_PASSWORD` in your `.env`

## 🧪 Testing

To verify that email works:

1. **Registration:**
   - Go to `/register`
   - Complete the form
   - You should receive an email with the verification code

2. **Login:**
   - Go to `/login`
   - Enter your credentials
   - You should receive an email with the 2FA code

3. **Booking:**
   - Submit a booking from the home page
   - You should receive a confirmation email
   - Owner should receive a notification email

4. **Verification:**
   - Check the server console
   - You should see: `✅ Email server ready to send messages`
   - When sending emails: `✅ Verification email sent: [messageId]`

## ⚠️ Troubleshooting

### Error: "GMAIL_USER or GMAIL_APP_PASSWORD not configured"
- Verify that the `.env` file exists
- Verify that the variables are written correctly
- Restart the server after adding the variables

### Error: "Invalid login"
- Verify that the app password is correct
- Make sure 2-step verification is enabled
- Generate a new app password

### Error: "Connection timeout"
- Verify your internet connection
- Verify that the firewall is not blocking the connection

## 📝 Logs

The system logs:
- ✅ Successfully sent emails
- ❌ Errors sending emails
- ⚠️ Configuration warnings

Check the server console to see logs in real-time.
