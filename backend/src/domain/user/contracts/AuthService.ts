import { Nullable } from '@/domain/shared/Nullable';

export interface AuthService {
  login(email: string, password: string): Promise<Nullable<string>>;
}
