/**
 * Content type contract for the whole site.
 *
 * All page copy lives in the other files in this folder (site.ts, research.ts,
 * publications.ts, about.ts) and is typed against these interfaces. Edit the data,
 * never the components. TypeScript will tell you if a field is missing.
 */

/** A known social/academic profile. `icon` selects a lucide icon in <SocialLinks>. */
export type SocialIcon =
  | "github"
  | "scholar"
  | "orcid"
  | "linkedin"
  | "twitter"
  | "email";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

/** A small institution/organization logo mark. */
export interface Logo {
  src: string;
  alt: string;
  /**
   * Keep original colors in dark mode. Set on filled, multi-color marks (e.g. the
   * UC Berkeley seal) that read on any background; by default marks are inverted
   * light so line-art stays legible on the dark surface.
   */
  keepColor?: boolean;
}

export interface SiteConfig {
  /** Full name, used in the hero and metadata. */
  name: string;
  /**
   * Canonical production URL, no trailing slash (e.g. "https://you.com"). Used for
   * absolute Open Graph / canonical metadata. Override at deploy time without editing
   * code by setting the NEXT_PUBLIC_SITE_URL environment variable.
   */
  url: string;
  /** Short name/wordmark shown in the nav bar. */
  shortName: string;
  /** One-line professional title. */
  title: string;
  /** Contact email (no mailto: prefix). */
  email: string;
  /** First-person one-liner shown in the hero (and used as the meta description). */
  tagline: string;
  /** Portrait shown in the hero, at its natural aspect (intrinsic pixel size required). */
  portrait: { src: string; alt: string; width: number; height: number };
  /** Profile links rendered as an icon row in the hero and footer. */
  socials: SocialLink[];
  /** Primary nav destinations (left to right). */
  nav: NavItem[];
  /** Path to the CV PDF in /public. */
  cvHref: string;
}

export interface ResearchLink {
  /** e.g. "Preprint", "Code", "Poster". */
  label: string;
  href: string;
  /**
   * One-line plain-language description, shown after the label on detail pages
   * (e.g. "MUSC Brain Stimulation Lab · 6 mA tDCS for depression").
   * Cards ignore it.
   */
  note?: string;
}

export interface ResearchEntry {
  /** Stable slug (also used as the React key). */
  id: string;
  title: string;
  /** Lab / institution, e.g. "UC Berkeley · Waller Lab". */
  affiliation?: string;
  /** Time span, e.g. "2024 – Present". */
  period?: string;
  /** One-paragraph description. */
  description: string;
  /** Methods / tools, rendered as chips. */
  tags: string[];
  /** Optional small institution logo, shown above the title. */
  logo?: Logo;
  /**
   * Optional abstract, shown at the top of the detail page. Verbatim from the
   * paper; one string per paragraph.
   */
  abstract?: string[];
  /** Optional figures, shown on the detail page each with its caption. */
  figures?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  }[];
  /**
   * Optional standalone visual for the card: a transparent render that reads on
   * its own, without a caption or surrounding figure. Sits directly on the card
   * surface, like the institution logos.
   */
  visual?: { src: string; alt: string; width: number; height: number };
  /**
   * Optional photograph for the card, shown as a rounded portrait thumbnail in the
   * same right-column slot `visual` uses for transparent renders. Set one or the other.
   */
  photo?: { src: string; alt: string };
  /**
   * Set when the entry has enough material to warrant its own page. Only then does
   * the title link to /research/<id>; otherwise the card stands on its own.
   */
  detailPage?: boolean;
  /** Optional outbound links (paper, code, poster). */
  links?: ResearchLink[];
  /** Optional inline presentation video (lazy, click-to-play), shown on the detail page. */
  video?: { youtubeId: string; title: string };
  /**
   * Optional extra paragraphs shown only on the entry's detail page, after the
   * description. Supports the same inline `[label](href)` and `*emphasis*` markup.
   */
  body?: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  period?: string;
  affiliation?: string;
  description: string;
  tags: string[];
  /** Optional cover figure, shown 16:9 (object-contain). */
  image?: { src: string; alt: string };
  links?: ResearchLink[];
}

export interface Author {
  name: string;
  /** Bold this author (you). */
  isMe?: boolean;
}

export type PublicationType =
  | "journal"
  | "conference"
  | "preprint"
  | "in-preparation"
  | "poster"
  | "talk"
  | "thesis";

export interface Publication {
  id: string;
  authors: Author[];
  title: string;
  /** Journal / conference / repository. */
  venue: string;
  year: number;
  type?: PublicationType;
  /** DOI without the https://doi.org/ prefix, e.g. "10.1101/2025.01.01.123456". */
  doi?: string;
  /** Direct link (arXiv, bioRxiv, PDF) if there is no DOI yet. */
  url?: string;
}

export interface TimelineItem {
  /** e.g. "Expected May 2026" or "2023 – 2024". */
  period: string;
  /** Degree or role. */
  role: string;
  /** School or organization. */
  org: string;
  /** Optional supporting detail (honors, focus, advisor). */
  detail?: string;
  /** Optional small institution logo (e.g. on the education entry). */
  logo?: Logo;
  /** Optional advisors/professors for this role, shown as profile-link chips. */
  professors?: { name: string; href: string }[];
}

export interface AboutContent {
  /** Text after "Currently I am …". */
  currently: string;
  /** Text after "Previously, I was …". */
  previously: string;
  /** Optional photo shown beside the intro (e.g. graduation). */
  photo?: { src: string; alt: string };
  /** The degree; the Education card is built around exactly one entry. */
  education: TimelineItem;
  /** Brief trajectory: positions / labs over time. */
  experience: TimelineItem[];
  /** Research interests, rendered as chips. */
  interests: string[];
  /** Awards / honors. Title renders bold (a link when `href` is set), detail muted. */
  honors: { title: string; detail?: string; href?: string }[];
  /** Society memberships, shown with small logos under Education. */
  affiliations?: { name: string; role?: string; logo: Logo }[];
  /** Optional personal closing: one line + a photo, shown at the foot of /about. */
  personal?: {
    quote: string;
    photo: { src: string; alt: string; caption?: string };
  };
}
