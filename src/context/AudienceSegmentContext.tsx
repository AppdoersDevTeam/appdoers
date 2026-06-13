import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import {
  audienceSegments,
  type AudienceId,
} from '../content/audienceContent';

const STORAGE_KEY = 'appdoers-audience';

type AudienceSegmentContextValue = {
  audienceId: AudienceId;
  setAudienceId: (id: AudienceId) => void;
};

const AudienceSegmentContext = createContext<AudienceSegmentContextValue | null>(null);

function readStoredAudience(): AudienceId {
  if (typeof window === 'undefined') return 'churches';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && audienceSegments.some((s) => s.id === stored)) {
    return stored as AudienceId;
  }
  return 'churches';
}

export const AudienceSegmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [audienceId, setAudienceIdState] = useState<AudienceId>(readStoredAudience);

  const setAudienceId = useCallback((id: AudienceId) => {
    setAudienceIdState(id);
    localStorage.setItem(STORAGE_KEY, id);
  }, []);

  const value = useMemo(
    () => ({ audienceId, setAudienceId }),
    [audienceId, setAudienceId]
  );

  return (
    <AudienceSegmentContext.Provider value={value}>{children}</AudienceSegmentContext.Provider>
  );
};

export function useAudienceSegment() {
  const ctx = useContext(AudienceSegmentContext);
  if (!ctx) {
    throw new Error('useAudienceSegment must be used within AudienceSegmentProvider');
  }
  return ctx;
}
