# Phase 1 Setup Guide - Authentication Foundation

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/answerable

# Better Auth Configuration
BETTER_AUTH_SECRET=your-secret-key-here
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create OAuth 2.0 Client IDs
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - Your production domain callback URL when deployed

## MongoDB Setup

1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named `answerable`
3. Better Auth will automatically create the required collections

## Generate Better Auth Secret

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

## Phase 1 Completion Status

✅ **Completed Tasks:**
- [x] Set up Better Auth with MongoDB adapter
- [x] Configure Google OAuth provider
- [x] Create authentication middleware
- [x] Build basic login page with Google sign-in
- [x] Implement session management
- [x] Create API route handler
- [x] Set up custom theme configuration
- [x] Create placeholder pages for config and app routes

## Testing the Authentication Flow

1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000/login`
3. Click "Continue with Google"
4. Complete Google OAuth flow
5. You should be redirected to `/config` (placeholder page)

## Next Steps

Phase 2 will focus on:
- Setting up database models
- Creating Mongoose schemas
- Implementing server actions
- Adding proper TypeScript types

## File Structure Created

```
src/
├── lib/
│   ├── auth.ts              # Better Auth configuration
│   ├── auth-client.ts       # Client-side auth utilities
│   ├── db.ts               # MongoDB connection
│   └── theme.ts            # Mantine theme configuration
├── app/
│   ├── api/auth/[...all]/
│   │   └── route.ts        # Auth API handler
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx    # Login page
│   │   └── config/
│   │       └── page.tsx    # Config placeholder
│   └── (app)/
│       └── page.tsx        # Main app placeholder
└── middleware.ts           # Route protection middleware
``` 