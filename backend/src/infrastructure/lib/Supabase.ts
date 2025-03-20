import { createClient } from '@supabase/supabase-js';
import { Config } from '../../config';

export const supabase = createClient(Config.SUPABASE_URL, Config.SUPABASE_API_KEY);
