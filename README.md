
---

# 🎵 VIBEPLATE

`
The ultimate boilerplate for vibecoding with AI and building amazing apps fast!
`

A production-ready Next.js 15 boilerplate with authentication, database, UI components, and background jobs - perfect for quickly building apps and MVPs with AI assistance.

## ✨ Features

- **🔐 Authentication** - Better-auth with Google OAuth
- **🗄️ Database** - MongoDB with native driver
- **🎨 UI** - Mantine components with custom wrappers
- **⚡ Background Jobs** - Trigger.dev for reliable async tasks
- **🤖 AI Ready** - OpenAI integration for AI-powered features
- **📱 Responsive** - Mobile-first design with smooth animations
- **🔒 Type Safe** - Full TypeScript with Zod validation
- **⚙️ Zero Config** - Pre-configured for rapid development

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | Next.js 15 | React framework with App Router |
| **Authentication** | Better-auth | Modern auth library with OAuth |
| **Database** | MongoDB | NoSQL database with native driver |
| **UI Library** | Mantine | Professional component library |
| **Background Jobs** | Trigger.dev | Reliable async task processing |
| **AI Integration** | OpenAI | AI-powered features |
| **Validation** | Zod | Runtime type validation |
| **Styling** | CSS Modules + PostCSS | Modern styling approach |
| **Deployment** | Vercel | Serverless deployment |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- MongoDB database
- Google OAuth credentials
- OpenAI API key (optional)
- Trigger.dev account (optional)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd your-app-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# VERCEL
VERCEL_ACCESS_TOKEN=
VERCEL_OIDC_TOKEN=
VERCEL_PROJECT_ID=
VERCEL_TEAM_ID=
BLOB_READ_WRITE_TOKEN=

# AUTH
BETTER_AUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# DB
MONGODB_DB_NAME=your-database-name
MONGODB_URI=mongodb://localhost:27017/your-database-name
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"

# AI
OPENAI_API_KEY=your-openai-api-key

# TRIGGER
TRIGGER_SECRET_KEY=your-trigger-secret-key
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 🔧 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `BETTER_AUTH_SECRET` | Secret key for better-auth | `your-secret-key-here` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | `123456789.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | `your-google-client-secret` |
| `MONGODB_DB_NAME` | MongoDB database name | `my-app-database` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/my-app` |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Public auth URL | `http://localhost:3000` |

### Optional Variables

| Variable | Description | When to Use |
|----------|-------------|-------------|
| `OPENAI_API_KEY` | OpenAI API key | For AI-powered features |
| `TRIGGER_SECRET_KEY` | Trigger.dev secret key | For background jobs |
| `VERCEL_*` | Vercel deployment tokens | For production deployment |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob storage token | For file uploads |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (public)/          # Public landing pages
│   ├── app/               # Protected app pages
│   └── api/               # API routes
├── components/             # Reusable components
│   ├── ui/                # UI component wrappers
│   └── auth/              # Auth-specific components
├── lib/                   # Utilities and configurations
│   ├── auth.ts            # Better-auth setup
│   ├── db.ts              # MongoDB connection
│   ├── server-actions.ts  # Database operations
│   └── ai.ts              # AI integration
├── trigger/               # Background jobs
├── types/                 # TypeScript types and schemas
└── hooks/                 # Custom React hooks
```

## 🎯 Key Features Explained

### Authentication Flow
- **Better-auth** handles OAuth with Google
- **Middleware** protects routes and manages onboarding
- **Session management** with automatic token refresh

### Database Design
- **Native MongoDB driver** for direct database access
- **Zod validation** for type-safe data operations
- **User isolation** with proper security patterns

### UI Architecture
- **Mantine components** wrapped for vendor independence
- **Custom theme** with professional color palette
- **Responsive design** with smooth animations

### Background Jobs
- **Trigger.dev** for reliable async processing
- **No timeouts** for long-running tasks
- **Automatic retries** with configurable strategies

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on push to main branch

### Manual Deployment

```bash
npm run build
npm start
```

## 🤖 AI Integration

The boilerplate includes AI-ready patterns:

- **OpenAI integration** for AI-powered features
- **Background job processing** for long-running AI tasks
- **Type-safe AI operations** with proper error handling

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Code Quality

- **ESLint** for code linting
- **TypeScript** for type safety

## 📚 Documentation

- **[Project Guidelines](.cursor/rules/project-guidelines.mdc)** - Development patterns and conventions
- **[Database Patterns](.cursor/rules/database-design-patterns.mdc)** - Database design and best practices
- **[Trigger.dev Docs](https://trigger.dev/docs)** - Background job documentation
- **[Mantine Docs](https://mantine.dev/)** - UI component library
- **[Better-auth Docs](https://better-auth.com/)** - Authentication library

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

> 🚫 No license required — just vibe and build!  
> Use, remix, and create amazing things. No strings attached.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Mantine](https://mantine.dev/) - UI component library
- [Better-auth](https://better-auth.com/) - Authentication
- [Trigger.dev](https://trigger.dev/) - Background jobs
- [MongoDB](https://mongodb.com/) - Database

---

**Built for rapid MVP development and AI-powered applications**
