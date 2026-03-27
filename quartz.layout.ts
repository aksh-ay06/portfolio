import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// ── Shared across every page ──────────────────────────────────────────────────
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/aksh-ay06",        // TODO
      "RSS Feed": "/index.xml",
    },
  }),
}

// ── Left sidebar — consistent nav ────────────────────────────────────────────
const leftSidebar = [
  Component.PageTitle(),
  Component.MobileOnly(Component.Spacer()),
  Component.Search(),
  Component.Darkmode(),
  Component.DesktopOnly(Component.Spacer()),
  Component.DesktopOnly(
    Component.Explorer({
      title: "Navigator",
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedState: true,
      sortFn: (a, b) => {
        // Folders before files, then alphabetical
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        if (a.file && !b.file) return 1
        return -1
      },
      filterFn: (node) => node.name !== "templates",
      mapFn: (node) => {
        // Emoji labels for top-level sections
        const labels: Record<string, string> = {
          projects: "⬡ Projects",
          learning: "◎ Learning",
          blogs: "◈ Blogs",
          "off-grid": "◉ Off-Grid",
        }
        if (node.depth === 1 && !node.file && labels[node.name]) {
          node.displayName = labels[node.name]
        }
      },
    }),
  ),
]

// ── Right sidebar — graph first, then contextual links ───────────────────────
const rightSidebar = [
  Component.Graph({
    localGraph: {
      drag: true,
      zoom: true,
      depth: 2,
      scale: 1.1,
      repelForce: 0.5,
      centerForce: 0.3,
      linkDistance: 30,
      fontSize: 0.6,
      opacityScale: 1,
      showTags: false,
      removeSelfLoops: true,
    },
    globalGraph: {
      drag: true,
      zoom: true,
      depth: -1,
      scale: 0.9,
      repelForce: 0.5,
      centerForce: 0.3,
      linkDistance: 30,
      fontSize: 0.6,
      opacityScale: 1,
      showTags: false,
      removeSelfLoops: true,
    },
  }),
  Component.DesktopOnly(Component.TableOfContents()),
  Component.Backlinks(),
  Component.RecentNotes({
    title: "Recent Updates",
    limit: 5,
    showTags: false,
  }),
]

// ── Content pages (notes, posts, projects) ────────────────────────────────────
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ spacerSymbol: "›", rootName: "Home" }),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: true }),
    Component.TagList(),
  ],
  left: leftSidebar,
  right: rightSidebar,
}

// ── List / folder index pages ─────────────────────────────────────────────────
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ spacerSymbol: "›", rootName: "Home" }),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: false }),
  ],
  left: leftSidebar,
  right: [
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 1,
        scale: 1.0,
        repelForce: 0.4,
        centerForce: 0.3,
        linkDistance: 35,
        fontSize: 0.6,
        opacityScale: 1,
        showTags: false,
        removeSelfLoops: true,
      },
    }),
    Component.RecentNotes({ title: "Recent in Section", limit: 5 }),
  ],
}
