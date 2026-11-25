"use client";

import { useEffect, useRef } from "react";
import BoardingPassForm from "./BoardingPassForm";
import { useConsultation } from "./ConsultationContext";
import { CloseIcon } from "./Icons";

/** Popup with the same boarding-pass form, opened by every “consultation” button. */
export default function ConsultationModal() {
  const { isOpen, close } = useConsultation();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Book a free expert consultation" onClick={close}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="modal-close" aria-label="Close" onClick={close}>
          <CloseIcon />
        </button>
        <BoardingPassForm idPrefix="popup" />
      </div>
    </div>
  );
}
