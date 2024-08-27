import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌱Littleroot",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "http://nottaro.github.io/littleroot/",
    ignorePatterns: ["private", "templates", ".obsidian", "Templates"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Nunito",
        body: "Kalam",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f0e5",
          lightgray: "#eadbc8",
          gray: "#adc4ce",
          darkgray: "#102c57",
          dark: "#4477ce",
          secondary: "#96b6c5",
          tertiary: "#adc4ce",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#102c57",
          lightgray: "#96b6c5",
          gray: "#eadbc8",
          darkgray: "#f8f0e5",
          dark: "#ebebec",
          secondary: "#eee0c9",
          tertiary: "#fff6dc",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
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
