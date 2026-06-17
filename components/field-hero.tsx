"use client";

import { useEffect, useRef } from "react";

/**
 * A faint, slowly-drifting field of electric-field streamlines behind the hero — a quiet
 * nod to the tDCS / electric-field modeling work. Streamlines are traced from a handful
 * of point charges whose positions gently oscillate over time. Canvas-based and cheap;
 * paused under prefers-reduced-motion and whenever it scrolls out of view.
 */
export function FieldHero() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    // Accent color, re-read on theme toggle so light/dark stay in sync.
    let accent = "#3a5a78";
    const readAccent = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      if (v) accent = v;
    };
    readAccent();
    const themeObs = new MutationObserver(readAccent);
    themeObs.observe(document.documentElement, { attributes: true });

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Charges in relative (0..1) coordinates; +/- alternate to make dipole-like lines.
    const charges = [
      { x: 0.26, y: 0.34, q: 1 },
      { x: 0.55, y: 0.62, q: -1 },
      { x: 0.82, y: 0.3, q: 1 },
      { x: 0.46, y: 0.82, q: -1 },
      { x: 0.12, y: 0.7, q: 1 },
    ];

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      if (w < 2 || h < 2) return;

      const live = charges.map((c, i) => ({
        x: (c.x + Math.sin(time * 0.00018 + i * 1.3) * 0.04) * w,
        y: (c.y + Math.cos(time * 0.00022 + i * 0.7) * 0.04) * h,
        q: c.q,
      }));

      const fieldAt = (px: number, py: number) => {
        let ex = 0;
        let ey = 0;
        for (const c of live) {
          const dx = px - c.x;
          const dy = py - c.y;
          const r2 = dx * dx + dy * dy + 600;
          const inv = c.q / (r2 * Math.sqrt(r2));
          ex += inv * dx;
          ey += inv * dy;
        }
        return [ex, ey];
      };

      ctx.lineWidth = 1;
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.12;
      const STEPS = 64;
      const STEP = 7;
      const PER = 16;
      for (const c of live) {
        if (c.q <= 0) continue;
        for (let k = 0; k < PER; k++) {
          const a = (k / PER) * Math.PI * 2;
          let x = c.x + Math.cos(a) * 16;
          let y = c.y + Math.sin(a) * 16;
          ctx.beginPath();
          ctx.moveTo(x, y);
          for (let s = 0; s < STEPS; s++) {
            const [ex, ey] = fieldAt(x, y);
            const m = Math.hypot(ex, ey) || 1;
            x += (ex / m) * STEP;
            y += (ey / m) * STEP;
            if (x < -60 || x > w + 60 || y < -60 || y > h + 60) break;
            ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    let raf = 0;
    const tick = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(([e]) => {
      if (reduce) return;
      if (e.isIntersecting) start();
      else stop();
    });
    io.observe(canvas);

    if (reduce) draw(0);
    else start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      themeObs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(125%_120%_at_28%_42%,black,transparent_72%)]"
    />
  );
}
