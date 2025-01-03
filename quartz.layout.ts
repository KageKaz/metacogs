import { title } from "node:process"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "RSS": "https://metacogs.pages.dev/index.xml",
      github:"https://github.com/KageKaz/metacogs"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.RecentNotes(
      {
        title: "recent",
        linkToMore: "cogs/" as SimpleSlug,
      }
    )),
  ],
  right: [
    /*
    Component.DesktopOnly(Component.Explorer(
      {
        title: "tags",
        filterFn: (node) => {
          // set containing names of everything you want to filter out
          const omit = new Set(["cogs"])
          return !omit.has(node.name.toLowerCase())
        },
      }
    )),
    */
    Component.DesktopOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.RecentNotes(
      {
        title: "recent",
        linkToMore: "cogs/" as SimpleSlug,
      }
    )),
    Component.DesktopOnly(Component.Backlinks()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.RecentNotes(
      {
        title: "recent",
        linkToMore: "cogs/" as SimpleSlug,

      }
    )),
  ],
  right: [
    Component.MobileOnly(Component.RecentNotes(
      {
        title: "recent",
        linkToMore: "cogs/" as SimpleSlug,
      }
    )),
  ],
}
