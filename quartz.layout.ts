import { title } from "node:process"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'kagekaz/metacogs',
        // from data-repo-id
        repoId: 'R_kgDONlQ-eA',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDONlQ-eM4Cl7KA',

        mapping: "url",
        inputPosition: "top",
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      "email alerts": "https://follow.it/metacogs?leanpub",
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
        showTags: false,
      }
    )),
  ],
  right: [
    /*
    Component.DesktopOnly(Component.Explorer(
      {
        title: "tags",
      }
    )),
    */
    Component.DesktopOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.RecentNotes(
      {
        title: "recent",
        linkToMore: "cogs/" as SimpleSlug,
        showTags: false,
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
        showTags: false,

      }
    )),
  ],
  right: [
    Component.MobileOnly(Component.RecentNotes(
      {
        title: "recent",
        linkToMore: "cogs/" as SimpleSlug,
        showTags: false,
      }
    )),
  ],
}
