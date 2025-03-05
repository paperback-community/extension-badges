# Extension Badges

A collection of standardized badges for Paperback extensions.

## Installation

```bash
npm install --save-dev @paperback-community/extensions-badges
```

## Usage

```ts
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
    name: "ExtensionName",
    description: "A Paperback extension.",
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
