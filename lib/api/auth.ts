import { api } from './client';
import type { AuthVerifyResponse } from '../../types/api.types';

export const authApi = {
  requestMagicLink: (email: string) =>
    api.post<{ message: string }>('/auth/request-link', { email }),

  verifyToken: (token: string) =>
    api.post<AuthVerifyResponse>('/auth/verify', { token }),
};

export function saveToken(token: string) {
  localStorage.setItem('ledgit_token', token);
}

export function clearToken() {
  localStorage.removeItem('ledgit_token');
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('ledgit_token');
}

export function isAuthenticated(): boolean {
  const token = getToken();
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}
