'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { experiencesApi } from '../lib/api/experiences';
import { aiApi } from '../lib/api/ai';
import type { Experience, ExperienceSummary, CreateExperienceDto, OcrResult } from '../types/api.types';
import { toast } from 'sonner';

export function useExperiences() {
  const [experiences, setExperiences] = useState<ExperienceSummary[]>([]);
  const [current, setCurrent] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const fetchList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await experiencesApi.getMe();
      setExperiences(res.data.experiences);
      return res.data;
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Failed to load experiences.';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchOne = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const res = await experiencesApi.get(id);
      setCurrent(res.data);
      return res.data;
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Experience not found.';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const create = useCallback(async (dto: CreateExperienceDto) => {
    setSubmitting(true);
    try {
      const res = await experiencesApi.create(dto);
      toast.success('Experience submitted for verification!');
      router.push(`/status/${res.data.experienceId}`);
      return res.data;
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Failed to submit experience.';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
      return null;
    } finally {
      setSubmitting(false);
    }
  }, [router]);

  const runOcr = useCallback(async (documentUrl: string): Promise<OcrResult | null> => {
    try {
      const res = await aiApi.ocr(documentUrl);
      return res.data;
    } catch {
      toast.error('OCR processing failed. Please fill in details manually.');
      return null;
    }
  }, []);

  return {
    experiences,
    current,
    loading,
    submitting,
    fetchList,
    fetchOne,
    create,
    runOcr,
  };
}
