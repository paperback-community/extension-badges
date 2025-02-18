export const ExtensionType = {
  Provider: {
    label: "Content Providing",
    description:
      "Provides actual content (official, scanlated, or aggregated).",
    textColor: "#FFFFFF",
    backgroundColor: "#FF0000",
  },
  Tracker: {
    label: "Tracker",
    description:
      "Used to track and manage content, helping users organize and monitor their reading progress.",
    textColor: "#FFFFFF",
    backgroundColor: "#FF0000",
  },
  ContentManager: {
    label: "Collection Manager",
    description:
      "Tools that allow users to save, organize, and manage a personal library of content.",
    textColor: "#FFFFFF",
    backgroundColor: "#FF0000",
  },
};

export const ContentSource = {
  Official: {
    label: "Official",
    description: "Licensed, authorized content directly from publishers.",
    textColor: "#FFFFFF",
    backgroundColor: "#006400",
  },
  Scanlator: {
    label: "Scanlator",
    description:
      "Content translated by fan groups or unofficial teams, often without permission.",
    textColor: "#FFFFFF",
    backgroundColor: "#006400",
  },
  Aggregator: {
    label: "Aggregator",
    description:
      "Sites that collect content from other sources, typically without official translations or permissions.",
    textColor: "#FFFFFF",
    backgroundColor: "#006400",
  },
};

export const ContentType = {
  Safe: {
    label: "Safe",
    description: "General content, safe for all audiences.",
    textColor: "#000000",
    backgroundColor: "#FFD700",
  },
  Mature: {
    label: "Mature",
    description:
      "Content suitable for older audiences, may include mild suggestive themes, partial nudity, or some violence, but not explicit.",
    textColor: "#000000",
    backgroundColor: "#FFD700",
  },
  Adult: {
    label: "Adult",
    description:
      "Explicit content, including pornographic material, adult fanfiction, and explicit themes.",
    textColor: "#000000",
    backgroundColor: "#FFD700",
  },
};

export const ContentFormat = {
  Manga: {
    label: "Manga",
    description: "Japanese comic-style works.",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  Webtoon: {
    label: "Webtoon",
    description: "Vertical-scrolling comics, typically from Korea.",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  Comics: {
    label: "Comics",
    description: "Western-style comics, typically from the U.S. and Europe.",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  LightNovel: {
    label: "Light Novel",
    description: "Japanese novels, often illustrated with manga-style art.",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  Novel: {
    label: "Novel",
    description: "Prose-based works, not illustrated.",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  WebNovel: {
    label: "Web Novel",
    description: "Novels published online, often in serialized format.",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  Doujinshi: {
    label: "Doujinshi",
    description:
      "Fan-made manga/comics, typically based on existing series or original works, can be adult or general.",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
  FanFiction: {
    label: "Fanfiction",
    description:
      "Fan-created stories, typically not illustrated, can be adult or general.",
    textColor: "#FFFFFF",
    backgroundColor: "#C71585",
  },
};

export const ContentLanguage = {
  Japanese: {
    label: "Japanese",
    description: "Content in the Japanese language.",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  Korean: {
    label: "Korean",
    description: "Content in the Korean language.",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  Chinese: {
    label: "Chinese",
    description: "Content in the Chinese language.",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  English: {
    label: "English",
    description: "Content in the English language.",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  French: {
    label: "French",
    description: "Content in the French language.",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  Spanish: {
    label: "Spanish",
    description: "Content in the Spanish language.",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
  MultiLanguage: {
    label: "Multi Language",
    description: "Offers content in multiple languages.",
    textColor: "#000000",
    backgroundColor: "#00ffff",
  },
};

export const ContentReleaseSpeed = {
  Simul: {
    label: "Official Simul",
    description:
      "The official release or a release simultaneous with it, typically from authorized sources.",
    textColor: "#000000",
    backgroundColor: "#00FF00",
  },
  Fast: {
    label: "Fast Release",
    description: "Content released within a few hours of the original source.",
    textColor: "#000000",
    backgroundColor: "#00FF00",
  },
  Regular: {
    label: "Regular Release",
    description: "Content released within 12 hours of the original source.",
    textColor: "#000000",
    backgroundColor: "#00FF00",
  },
  Slow: {
    label: "Slow Release",
    description: "Content released 24+ hours after the original source.",
    textColor: "#000000",
    backgroundColor: "#00FF00",
  },
};

export const ContentImageQuality = {
  Best: {
    label: "Best Images",
    description:
      "High resolution with minimal compression, clear and crisp images.",
    textColor: "#FFFFFF",
    backgroundColor: "#0000FF",
  },
  Good: {
    label: "Good Images",
    description:
      "Standard resolution with moderate compression, decent quality but not sharp.",
    textColor: "#FFFFFF",
    backgroundColor: "#0000FF",
  },
  Bad: {
    label: "Bad Images",
    description:
      "Low resolution with high compression, pixelated or blurry images.",
    textColor: "#FFFFFF",
    backgroundColor: "#0000FF",
  },
};

export const ContentTranslationTypeSetting = {
  Best: {
    label: "Best Translations",
    description:
      "Professionally translated and typeset, minimal errors, and proper formatting.",
    textColor: "#FFFFFF",
    backgroundColor: "#1E90FF",
  },
  Good: {
    label: "Good Translations",
    description:
      "Some minor errors or awkward phrasing but generally understandable.",
    textColor: "#FFFFFF",
    backgroundColor: "#1E90FF",
  },
  Bad: {
    label: "Bad Translations",
    description:
      "Noticeable translation issues or poorly done typesetting, making it hard to read.",
    textColor: "#FFFFFF",
    backgroundColor: "#1E90FF",
  },
  Machine: {
    label: "Machine Translations",
    description:
      "Content translated automatically using machine translation tools, often with significant errors or awkward phrasing and no typesetting.",
    textColor: "#FFFFFF",
    backgroundColor: "#1E90FF",
  },
  Raw: {
    label: "Raw Content",
    description:
      "No translation or typesetting done, raw scans with original text.",
    textColor: "#FFFFFF",
    backgroundColor: "#1E90FF",
  },
};
