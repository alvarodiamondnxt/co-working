# Gmail App Password Format

## 📧 App Password Format

Gmail app password has the following format:

### Format:
```
xxxxxxxx xxxx xxxx
```

Or without spaces:
```
xxxxxxxxxxxxxxxx
```

### Characteristics:
- **Length:** 16 characters
- **Format:** Uppercase letters and numbers
- **Example:** `ABCD EFGH IJKL MNOP` or `ABCDEFGHIJKLMNOP`
- **Without spaces:** When using it in `.env`, remove all spaces

### Example in .env:

```env
GMAIL_USER="your-email@gmail.com"
GMAIL_APP_PASSWORD="ABCDEFGHIJKLMNOP"
```

**⚠️ IMPORTANT:** 
- DO NOT include spaces in the password when putting it in `.env`
- If Google gives you: `ABCD EFGH IJKL MNOP`, use: `ABCDEFGHIJKLMNOP`
- It is case-sensitive

## 🔐 How to Get App Password

### Step 1: Enable 2-Step Verification
1. Go to https://myaccount.google.com/
2. Click on **Security**
3. Under "Signing in to Google", find **2-Step Verification**
4. Enable it if not already enabled

### Step 2: Generate App Password
1. On the same Security page, find **App passwords**
2. Or go directly to: https://myaccount.google.com/apppasswords
3. Select:
   - **App:** Mail
   - **Device:** Other (custom name)
   - **Name:** `CoWorking App` (or any name you prefer)
4. Click **Generate**
5. **Copy the 16-character password** that appears

### Step 3: Use in your .env
```env
GMAIL_USER="your-email@gmail.com"
GMAIL_APP_PASSWORD="ABCDEFGHIJKLMNOP"
```

**Real example:**
```env
GMAIL_USER="mycompany@gmail.com"
GMAIL_APP_PASSWORD="abcd efgh ijkl mnop"
```

But in `.env` remove the spaces:
```env
GMAIL_APP_PASSWORD="abcdefghijklmnop"
```

## ✅ Verification

Once configured, when you start the server with `npm run dev`, you should see in the console:

```
✅ Email server ready to send messages
```

If you see an error, verify:
- That the password has no spaces
- That 2-step verification is enabled
- That you copied all 16 characters

## 🔄 If You Need to Generate a New One

1. Go to https://myaccount.google.com/apppasswords
2. Generate a new password
3. Update your `.env` with the new password
4. Restart the server
