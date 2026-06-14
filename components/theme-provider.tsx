"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Thin wrapper around next-themes so the provider can live in the (server) root layout
 * while keeping the "use client" boundary in one place. Configuration (attribute,
 * defaultTheme, enableSystem) is passed from the layout.
 */
export function ThemeProvider(
  props: ComponentProps<typeof NextThemesProvider>,
) {
  return <NextThemesProvider {...props} />;
}
