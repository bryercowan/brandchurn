# BrandChurn

BrandChurn is a modern web application for rapid content creation and distribution across multiple social media platforms. Built with React, TypeScript, and Supabase, it offers a streamlined workflow for businesses to manage their social media presence efficiently.

## Features

- 🚀 **Quick Content Creation**: Generate and distribute content rapidly across multiple platforms
- 🔄 **Social Media Integration**: Connect with LinkedIn, Twitter, and Google
- 📊 **Analytics Dashboard**: Track performance metrics across all connected platforms
- 🏢 **Multi-Business Support**: Manage multiple business profiles from a single dashboard
- 🎥 **Video Content Generation**: Create professional video content with AI assistance
- 📱 **Responsive Design**: Full mobile and desktop support

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Build Tool**: Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment variables:
   ```bash
   cp .env.example .env
   ```
4. Update the `.env` file with your Supabase and OAuth credentials
5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# OAuth Providers
VITE_LINKEDIN_CLIENT_ID=your_linkedin_client_id
VITE_TWITTER_CLIENT_ID=your_twitter_client_id
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── lib/           # Library configurations
├── pages/         # Application pages/routes
├── services/      # API and external service integrations
├── store/         # State management
├── types/         # TypeScript type definitions
└── main.tsx       # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Subscription Tiers

### Free Tier
- Connect 2 social accounts
- 10 minutes of video content
- 30 days analytics retention
- Basic analytics
- Limited social posts
- Standard support

### Pro Tier ($29.99/month)
- Connect 5 social accounts
- 60 minutes of video content
- 90 days analytics retention
- Advanced analytics
- Unlimited social posts
- Priority support
- Custom branding

### Enterprise Tier ($99.99/month)
- Unlimited social accounts
- Unlimited video content
- 365 days analytics retention
- Enterprise analytics
- 24/7 support
- Custom features

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
