import 'dotenv/config';

export const Config = {
  PORT: process.env.PORT ?? 3000,
  SUPABASE_URL: process.env.SUPABASE_URL || 'https://<project>.supabase.co',
  SUPABASE_API_KEY: process.env.SUPABASE_API_KEY || '<your-anon-key>',
} as const;
