'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { authApi, saveToken, clearToken, isAuthenticated, getToken } from '../lib/api/auth';
import { toast } from 'sonner';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const requestLink = useCallback(async (email: string) => {
    setLoading(true);
    try {
      await authApi.requestMagicLink(email);
      return true;
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Failed to send magic link.';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const verifyLink = useCallback(async (token: string) => {
    setLoading(true);
    try {
      const res = await authApi.verifyToken(token);
      saveToken(res.data.accessToken);
      toast.success('Signed in successfully!');
      router.push('/apply');
      return true;
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Invalid or expired link.';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
      return false;
    } finally {
      setLoading(false);
    }
  }, [router]);

  const logout = useCallback(() => {
    clearToken();
    router.push('/apply');
    toast.info('Signed out.');
  }, [router]);

  return {
    loading,
    requestLink,
    verifyLink,
    logout,
    isAuthenticated,
    getToken,
  };
}
