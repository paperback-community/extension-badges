# Extension Badges

A collection of standardized badges for Paperback extensions.

## Installation

```bash
npm install @paperback-community/extensions-badges
```

## Usage

```typescript
// pbconfig.ts
import {
  ContentFormatBadge,
  ContentImageQualityBadge,
  ContentReleaseSpeedBadge,
  ContentSourceBadge,
  ContentTranslationTypeSettingBadge,
} from "@paperback-community/extensions-badges";
import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types";

export default {
  name: "ExtensionA",
  description: "A paperback extension.",
  // Example Usage
  badges: [
    ContentSourceBadge.Aggregator,
    ContentFormat.Manga,
    ContentTranslationBadge.Good,
  ],
  // ... Rest of config
} satisfies SourceInfo;
```

## Available Badge Categories

- ExtensionType
- ContentSource
- ContentType
- ContentFormat
- ContentLanguage
- ContentReleaseSpeed
- ContentImageQuality
- ContentTranslationTypeSetting
