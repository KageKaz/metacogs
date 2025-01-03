import { title } from "node:process"
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

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
    Component.DesktopOnly(Component.Explorer(
      {title: "pages",
       folderClickBehavior: "link",
       folderDefaultState: "open",
      }
    )),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.Explorer(
      {title: "pages",
       folderClickBehavior: "link",
       folderDefaultState: "open",
      }
    )),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer(
      {title: "pages",
       folderClickBehavior: "link",
       folderDefaultState: "open",
      }
    )),
  ],
  right: [
    Component.MobileOnly(Component.Explorer(
      {title: "pages",
       folderClickBehavior: "link",
       folderDefaultState: "open",
      }
    )),
  ],
}
