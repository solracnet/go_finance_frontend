import { createContext } from 'react';
import { LoginCredentials } from './types/auth';

export type AuthContextData = {
    login(credentials: LoginCredentials): Promise<void>;
    logout(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)
