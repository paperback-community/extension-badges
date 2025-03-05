import console from "node:console";
import fs from "node:fs/promises";
import path from "node:path";
import { URL } from "node:url";
import {
    ContentFormatBadge,
    ContentImageQualityBadge,
    ContentReleaseSpeedBadge,
    ContentSourceBadge,
    ContentTranslationBadge,
} from "../../dist/badges.js";

/**
 * Generates a preview HTML file with all badge variations
 * @returns {Promise<void>}
 */
async function generatePreviewHtml() {
    const __dirname = new URL(".", import.meta.url).pathname;
    const templatePath = path.join(__dirname, "index.template.html");
    const outputPath = path.join(__dirname, "../../dist/index.html");

    // Read the template
    const template = await fs.readFile(templatePath, "utf-8");

    // Generate the badge definitions
    const badgeDefinitions = `
        const ContentSourceBadge = ${JSON.stringify(ContentSourceBadge, null, 4)};
        const ContentFormatBadge = ${JSON.stringify(ContentFormatBadge, null, 4)};
        const ContentReleaseSpeedBadge = ${JSON.stringify(ContentReleaseSpeedBadge, null, 4)};
        const ContentImageQualityBadge = ${JSON.stringify(ContentImageQualityBadge, null, 4)};
        const ContentTranslationBadge = ${JSON.stringify(ContentTranslationBadge, null, 4)};

        function createBadge(badge) {
            const span = document.createElement('span');
            span.className = 'px-2 py-1 rounded text-sm font-medium whitespace-nowrap';
            span.style.backgroundColor = badge.backgroundColor;
            span.style.color = badge.textColor;
            span.textContent = badge.label;
            return span;
        }

        function renderBadges(badges, containerId) {
            const container = document.getElementById(containerId);
            Object.values(badges).forEach(badge => {
                container.appendChild(createBadge(badge));
            });
        }

        // Render all badges
        renderBadges(ContentSourceBadge, 'source-badges');
        renderBadges(ContentFormatBadge, 'format-badges');
        renderBadges(ContentReleaseSpeedBadge, 'speed-badges');
        renderBadges(ContentImageQualityBadge, 'quality-badges');
        renderBadges(ContentTranslationBadge, 'translation-badges');
    `;

    // Replace the placeholder with the actual badge definitions
    const finalHtml = template.replace(
        "// BADGES_PLACEHOLDER",
        badgeDefinitions,
    );

    // Ensure dist directory exists
    await fs.mkdir(path.join(__dirname, "../../dist"), { recursive: true });

    // Write the final HTML
    await fs.writeFile(outputPath, finalHtml, "utf-8");
}

generatePreviewHtml().catch(console.error);
