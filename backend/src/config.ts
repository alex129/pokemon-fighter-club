import 'dotenv/config';

export const Config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT ?? 3000,
  SUPABASE_URL: process.env.SUPABASE_URL || 'https://<project>.supabase.co',
  SUPABASE_API_KEY: process.env.SUPABASE_API_KEY || '<your-anon-key>',
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN || 'localhost',
} as const;
