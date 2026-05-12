# Lesson 04: Authentication & Database

Add real user authentication with NextAuth and MongoDB.

## What you'll learn (Days 7-9)

- Setting up MongoDB database
- User signup and login
- Password hashing with bcrypt
- NextAuth.js for session management
- Protecting routes (private dashboard)
- JWT tokens and cookies

## Setup Required

### 1. MongoDB Atlas (Free Database)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster (free tier)
4. Click "Connect" → "Connect your application"
5. Copy your connection string
6. Create `.env.local` and paste it as `MONGODB_URI`

### 2. Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Fill in your values:
- `MONGODB_URI` - from MongoDB Atlas
- `NEXTAUTH_SECRET` - generate with: `openssl rand -base64 32`
- `NEXTAUTH_URL` - keep as `http://localhost:3000` for development

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## How It Works

### Signup Flow

1. User fills signup form (`/signup`)
2. Form calls `/api/auth/signup`
3. API hashes password with bcrypt
4. User saved to MongoDB
5. Redirect to login

### Login Flow

1. User fills login form (`/login`)
2. NextAuth checks credentials
3. Compares hashed password
4. Creates session with JWT
5. Stores session in cookie
6. Redirect to dashboard

### Protected Routes

```javascript
// Get session on server
const session = await getServerSession()

if (!session) {
  redirect('/login') // Kick them out!
}
```

## File Structure

```
app/
├── api/
│   └── auth/
│       ├── signup/route.js       ← Signup API
│       └── [...nextauth]/route.js ← NextAuth config
├── dashboard/page.js              ← Protected page
├── login/page.js                  ← Login form
└── signup/page.js                 ← Signup form

lib/
└── mongodb.js                     ← Database connection

models/
└── User.js                        ← User schema
```

## Security Notes

- ✅ Passwords are hashed (never stored as plain text)
- ✅ JWT tokens are signed with secret
- ✅ Sessions expire automatically
- ✅ HTTPS required in production
- ✅ Email validation on signup

## Try this

1. Sign up with a new account
2. Try logging in with wrong password
3. Access `/dashboard` without logging in (should redirect)
4. Log out and log back in
5. View your user in MongoDB Atlas

## Common Issues

**"Failed to connect to MongoDB"**
- Check your `MONGODB_URI` in `.env.local`
- Make sure MongoDB Atlas allows connections from your IP

**"Invalid session"**
- Make sure `NEXTAUTH_SECRET` is set
- Try deleting cookies and logging in again

**"User not found"**
- Make sure you signed up first
- Check MongoDB Atlas to see if user was created

## Next Steps

Move to `05-stripe-payments` to add subscription billing! That's where you make money 💰