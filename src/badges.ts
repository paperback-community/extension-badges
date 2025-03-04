import { SourceBadge } from "@paperback/types";

type ContentSource = {
  /** Licensed, authorized content directly from publishers. */
  Official: SourceBadge;
  /** Content translated by fan groups or unofficial teams, often without permission. */
  Scanlator: SourceBadge;
  /** Sites that collect content from other sources, typically without official translations or permissions. */
  Aggregator: SourceBadge;
};

/**
 * Badge definitions for content sources, indicating whether they are official, scanlated, or aggregated.
 */
export const ContentSourceBadge: ContentSource = {
  Official: {
    label: "Official",
    textColor: "#FFFFFF",
    backgroundColor: "#172554", // blue-950
  },
  Scanlator: {
    label: "Scanlator",
    textColor: "#FFFFFF",
    backgroundColor: "#1e3a8a", // blue-900
  },
  Aggregator: {
    label: "Aggregator",
    textColor: "#FFFFFF",
    backgroundColor: "#1d4ed8", // blue-700
  },
};

type ContentFormat = {
  /** Japanese comic-style works. */
  Manga: SourceBadge;
  /** Vertical-scrolling comics, typically from Korea. */
  Webtoon: SourceBadge;
  /** Western-style comics, typically from the U.S. and Europe. */
  Comics: SourceBadge;
  /** Japanese novels, often illustrated with manga-style art. */
  LightNovel: SourceBadge;
  /** Prose-based works, not illustrated. */
  Novel: SourceBadge;
  /** Novels published online, often in serialized format. */
  WebNovel: SourceBadge;
  /** Fan-made manga/comics, typically based on existing series or original works, can be adult or general. */
  Doujinshi: SourceBadge;
  /** Fan-created stories, typically not illustrated, can be adult or general. */
  FanFiction: SourceBadge;
  /** Other content format. */
  Other: SourceBadge;
};

/**
 * Badge definitions for content formats, including manga, webtoons, comics, novels, and fan works.
 */
export const ContentFormatBadge: ContentFormat = {
  Manga: {
    label: "Manga",
    textColor: "#FFFFFF",
    backgroundColor: "#4c1d95", // purple-900
  },
  Webtoon: {
    label: "Webtoon",
    textColor: "#FFFFFF",
    backgroundColor: "#5b21b6", // purple-800
  },
  Comics: {
    label: "Comics",
    textColor: "#FFFFFF",
    backgroundColor: "#6d28d9", // purple-700
  },
  LightNovel: {
    label: "Light Novel",
    textColor: "#FFFFFF",
    backgroundColor: "#7c3aed", // purple-600
  },
  Novel: {
    label: "Novel",
    textColor: "#FFFFFF",
    backgroundColor: "#8b5cf6", // purple-500
  },
  WebNovel: {
    label: "Web Novel",
    textColor: "#FFFFFF",
    backgroundColor: "#9333ea", // purple-600
  },
  Doujinshi: {
    label: "Doujinshi",
    textColor: "#000000",
    backgroundColor: "#a855f7", // purple-500
  },
  FanFiction: {
    label: "Fanfiction",
    textColor: "#000000",
    backgroundColor: "#c084fc", // purple-400
  },
  Other: {
    label: "Fanfiction",
    textColor: "#000000",
    backgroundColor: "#dab2ff", // purple-300
  },
};

type ContentReleaseSpeed = {
  /** The official release or a release simultaneous with it, typically from authorized sources. */
  Simul: SourceBadge;
  /** Content released within a few hours of the original source. */
  Fast: SourceBadge;
  /** Content released within 12 hours of the original source. */
  Regular: SourceBadge;
  /** Content released 24+ hours after the original source. */
  Slow: SourceBadge;
};

/**
 * Badge definitions for content release speeds, including fast, regular, and slow releases.
 */
export const ContentReleaseSpeedBadge: ContentReleaseSpeed = {
  Simul: {
    label: "Official Simul",
    textColor: "#FFFFFF",
    backgroundColor: "#334155", // slate-700
  },
  Fast: {
    label: "Fast Release",
    textColor: "#FFFFFF",
    backgroundColor: "#15803d", // green-700
  },
  Regular: {
    label: "Regular Release",
    textColor: "#000000",
    backgroundColor: "#fbbf24", // amber-400
  },
  Slow: {
    label: "Slow Release",
    textColor: "#FFFFFF",
    backgroundColor: "#dc2626", // red-600
  },
};

type ContentImageQuality = {
  /** High resolution with minimal compression, clear and crisp images. */
  Best: SourceBadge;
  /** Standard resolution with moderate compression, decent quality but not sharp. */
  Good: SourceBadge;
  /** Low resolution with high compression, pixelated or blurry images. */
  Bad: SourceBadge;
};

/**
 * Badge definitions for content image quality, including best, good, and bad quality images.
 */
export const ContentImageQualityBadge: ContentImageQuality = {
  Best: {
    label: "Best Images",
    textColor: "#FFFFFF",
    backgroundColor: "#15803d", // green-700
  },
  Good: {
    label: "Good Images",
    textColor: "#000000",
    backgroundColor: "#fbbf24", // amber-400
  },
  Bad: {
    label: "Bad Images",
    textColor: "#FFFFFF",
    backgroundColor: "#dc2626", // red-600
  },
};

type ContentTranslation = {
  /** Professionally translated and typeset, minimal errors, and proper formatting. */
  Best: SourceBadge;
  /** Some minor errors or awkward phrasing but generally understandable. */
  Average: SourceBadge;
  /** Noticeable translation issues or poorly done typesetting, making it hard to read. */
  Bad: SourceBadge;
  /** Content translated automatically using machine translation tools, often with significant errors or awkward phrasing and no typesetting. */
  Machine: SourceBadge;
  /** No translation or typesetting done, raw scans with original text. */
  Raw: SourceBadge;
};

/**
 * Badge definitions for content translations, including best, good, bad, machine translations, and raw scans.
 */
export const ContentTranslationBadge: ContentTranslation = {
  Best: {
    label: "Good Translations",
    textColor: "#FFFFFF",
    backgroundColor: "#15803d", // green-700
  },
  Average: {
    label: "Average Translations",
    textColor: "#000000",
    backgroundColor: "#fbbf24", // amber-400
  },
  Bad: {
    label: "Bad Translations",
    textColor: "#000000",
    backgroundColor: "#ea580c", // orange-600
  },
  Machine: {
    label: "Machine Translations",
    textColor: "#FFFFFF",
    backgroundColor: "#dc2626", // red-600
  },
  Raw: {
    label: "Raw Content",
    textColor: "#FFFFFF",
    backgroundColor: "#334155", // slate-700
  },
};
