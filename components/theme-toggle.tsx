"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

// Three-state cycle (matching the reference): system -> light -> dark -> system.
const ORDER = ["system", "light", "dark"] as const;
type ThemeChoice = (typeof ORDER)[number];

const ICONS = { system: Monitor, light: Sun, dark: Moon } as const;

const emptySubscribe = () => () => {};

// false during SSR, true after hydration, without an effect or a cascading re-render,
// so theme-dependent UI is only rendered client-side (avoids a hydration mismatch).
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    // Reserve the exact footprint so the nav doesn't shift when the button appears.
    return <span className="block h-9 w-9 shrink-0" aria-hidden />;
  }

  const current = (theme as ThemeChoice) ?? "system";
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
  const Icon = ICONS[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Theme: ${current}. Switch to ${next}.`}
      title={`Theme: ${current} (click for ${next})`}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface hover:text-fg"
    >
      <Icon className="h-[18px] w-[18px]" aria-hidden />
    </button>
  );
}
