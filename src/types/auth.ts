export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  subscription_tier: 'free' | 'pro' | 'enterprise';
  subscription_status: 'active' | 'cancelled' | 'expired';
  social_connections: {
    linkedin?: {
      connected: boolean;
      profile_id?: string;
      access_token?: string;
    };
    twitter?: {
      connected: boolean;
      profile_id?: string;
      access_token?: string;
    };
    google?: {
      connected: boolean;
      profile_id?: string;
      access_token?: string;
    };
  };
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface SubscriptionTier {
  name: 'free' | 'pro' | 'enterprise';
  price: number;
  features: string[];
  social_accounts: number;
  video_minutes: number;
  analytics_retention_days: number;
}