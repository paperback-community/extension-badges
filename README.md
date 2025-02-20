# Paperback Extensions Badges

A collection of standardized badges for Paperback extensions.

## Installation

```bash
npm install @paperback-community/extensions-badges
```

## Usage

```typescript
import {
  ContentFormatBadge,
  ContentImageQualityBadge,
  ContentLanguageBadge,
  ContentReleaseSpeedBadge,
  ContentSourceBadge,
  ContentTranslationTypeSettingBadge,
  ContentTypeBadge,
  ExtensionTypeBadge,
} from "@paperback-community/extensions-badges";

// Example usage
const badge = ExtensionTypeBadge.Provider;
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
