"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type ConsultationState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ConsultationContext = createContext<ConsultationState | null>(null);

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);
  return <ConsultationContext.Provider value={value}>{children}</ConsultationContext.Provider>;
}

export function useConsultation() {
  const ctx = useContext(ConsultationContext);
  if (!ctx) throw new Error("useConsultation must be used inside <ConsultationProvider>");
  return ctx;
}
