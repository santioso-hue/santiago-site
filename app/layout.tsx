import type { Metadata, Viewport } from "next";
import "./globals.css";
import { hanken, jetbrainsMono, newsreader } from "./fonts";
import { site } from "@/content/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SkipLink } from "@/components/skip-link";

// Absolute base for OG/canonical URLs. Set NEXT_PUBLIC_SITE_URL in the deploy
// environment (Vercel) to override the value in content/site.ts without editing code.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name}, ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name}, ${site.title}`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}, ${site.title}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
  verification: {
    google: "SH_b0kxM8dLaI6uQsAGJ56Om-djYzYoz-8BKHxRj2Q0",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1916" },
  ],
};

// Structured data: who this site is about, for search engines.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Research Engineer",
  worksFor: {
    "@type": "Organization",
    name: "CCNY Neural Engineering Group",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "The City College of New York, CUNY",
  },
  knowsAbout: [
    "Neural engineering",
    "Neuromodulation",
    "Transcranial electrical stimulation",
    "Computational imaging",
    "Medical imaging",
  ],
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hanken.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SkipLink />
          <Nav />
          <main
            id="main-content"
            className="mx-auto w-full max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8"
          >
            {children}
          </main>
          <Footer />
          <div aria-hidden className="grain-overlay" />
        </ThemeProvider>
      </body>
    </html>
  );
}
