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
  /** 2-3 sentence research statement, one string per paragraph. */
  statement: string[];
  /** Portrait shown in the hero. */
  portrait: { src: string; alt: string };
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
}

export interface ResearchEntry {
  /** Stable slug (also used as the React key). */
  id: string;
  title: string;
  /** Lab / institution, e.g. "UC Berkeley · Waller Lab". */
  affiliation?: string;
  /** Time span, e.g. "2024 – present". */
  period?: string;
  /** One-paragraph description. */
  description: string;
  /** Methods / tools, rendered as chips. */
  tags: string[];
  /** Optional small institution logo, shown above the title. */
  logo?: { src: string; alt: string };
  /** Optional outbound links (paper, code, poster). */
  links?: ResearchLink[];
  /** Optional inline presentation video (lazy, click-to-play). */
  video?: { youtubeId: string; title: string };
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
  | "poster"
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
  logo?: { src: string; alt: string };
}

export interface AboutContent {
  /** Text after "Currently I am …". */
  currently: string;
  /** Text after "Previously, I was …". */
  previously: string;
  /** Optional photo shown beside the intro (e.g. graduation). */
  photo?: { src: string; alt: string };
  education: TimelineItem[];
  /** Brief trajectory: positions / labs over time. */
  experience: TimelineItem[];
  /** Research interests, rendered as chips. */
  interests: string[];
  /** Awards / honors. Title renders bold, detail muted. */
  honors: { title: string; detail?: string }[];
  /** Society memberships, shown with small logos under Education. */
  affiliations?: { name: string; role?: string; logo: { src: string; alt: string } }[];
  /** Optional personal closing: one line + a photo, shown at the foot of /about. */
  personal?: {
    quote: string;
    photo: { src: string; alt: string; caption?: string };
  };
}
