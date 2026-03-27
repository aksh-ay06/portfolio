import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz v4 — "Digital Brain" Portfolio
 * Theme: Monochrome + Emerald Green (#10b981)
 * Font:  Inter (body) + JetBrains Mono (headers/code)
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Digital Brain",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "aksh-ay06.github.io/portfolio",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "JetBrains Mono",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        // ── Light Mode ───────────────────────────────────────────────────────
        lightMode: {
          light: "#fafafa",       // page background
          lightgray: "#e5e5e5",   // borders, dividers
          gray: "#737373",        // meta text, graph edges
          darkgray: "#171717",    // body text
          dark: "#0a0a0a",        // headers, icons
          secondary: "#10b981",   // links, active nodes
          tertiary: "#059669",    // hover states
          highlight: "rgba(16, 185, 129, 0.08)",
          textHighlight: "#10b98166",
        },
        // ── Dark Mode (default) ──────────────────────────────────────────────
        darkMode: {
          light: "#0a0a0a",       // page background  ← deep charcoal
          lightgray: "#1c1c1c",   // borders, dividers
          gray: "#525252",        // meta text, graph edges
          darkgray: "#d1d1d1",    // body text        ← soft gray
          dark: "#f5f5f5",        // headers, icons
          secondary: "#10b981",   // links, active nodes  ← emerald
          tertiary: "#34d399",    // hover states
          highlight: "rgba(16, 185, 129, 0.10)",
          textHighlight: "#10b98155",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({ collapseByDefault: true }),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
