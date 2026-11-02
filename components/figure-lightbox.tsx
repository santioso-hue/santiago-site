"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

/**
 * Click-to-enlarge wrapper for detail-page figures. The trigger renders its children
 * (the inline figure image); clicking opens the same image full-screen on a dimmed
 * backdrop. Esc, the corner button, or a click anywhere closes it. While open, body
 * scroll is locked, the rest of the page is inert, and focus sits on the close button;
 * on close, focus returns to the trigger.
 */
export function FigureLightbox({
  src,
  alt,
  width,
  height,
  children,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = document.querySelectorAll<HTMLElement>(
      "body > header, body > main, body > footer",
    );
    background.forEach((el) => {
      el.inert = true;
    });
    closeRef.current?.focus();
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      background.forEach((el) => {
        el.inert = false;
      });
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge figure: ${alt}`}
        className="block w-full cursor-zoom-in rounded-lg"
      >
        {children}
      </button>

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 sm:p-10"
              onClick={() => setOpen(false)}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="90vw"
                className="max-h-[90vh] w-auto max-w-full rounded-lg bg-white object-contain"
              />
              <button
                ref={closeRef}
                type="button"
                aria-label="Close enlarged figure"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
