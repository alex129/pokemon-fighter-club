import { AuthService } from '@/domain/user/contracts/AuthService';
import { Nullable } from '@/domain/shared/Nullable';
import { supabase } from '../lib/Supabase';

export class SupabaseAuthService implements AuthService {
  async login(email: string, password: string): Promise<Nullable<string>> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data?.session.access_token ?? null;
  }
}
