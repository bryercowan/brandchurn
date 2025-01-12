/*
  # Authentication and Subscription Schema

  1. New Tables
    - `users`
      - Core user data and subscription information
    - `social_connections`
      - OAuth connections for each user
    - `subscription_tiers`
      - Available subscription plans and their features

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create users table with subscription info
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text UNIQUE NOT NULL,
  full_name text,
  avatar_url text,
  subscription_tier text DEFAULT 'free',
  subscription_status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create social connections table
CREATE TABLE IF NOT EXISTS social_connections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  provider text NOT NULL,
  provider_user_id text,
  access_token text,
  refresh_token text,
  expires_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, provider)
);

-- Create subscription tiers table
CREATE TABLE IF NOT EXISTS subscription_tiers (
  name text PRIMARY KEY,
  price integer NOT NULL,
  features jsonb NOT NULL,
  social_accounts integer DEFAULT 1,
  video_minutes integer DEFAULT 10,
  analytics_retention_days integer DEFAULT 30,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_tiers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can read own social connections"
  ON social_connections
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own social connections"
  ON social_connections
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Everyone can read subscription tiers"
  ON subscription_tiers
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert default subscription tiers
INSERT INTO subscription_tiers (name, price, features, social_accounts, video_minutes, analytics_retention_days)
VALUES
  ('free', 0, '["Basic analytics", "Limited social posts", "Standard support"]', 2, 10, 30),
  ('pro', 2999, '["Advanced analytics", "Unlimited social posts", "Priority support", "Custom branding"]', 5, 60, 90),
  ('enterprise', 9999, '["Enterprise analytics", "Unlimited everything", "24/7 support", "Custom features"]', -1, -1, 365)
ON CONFLICT (name) DO NOTHING;