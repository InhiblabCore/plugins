declare const __VP_HASH_MAP__: Record<string, string>
declare const __ALGOLIA__: boolean
declare const __CARBON__: boolean
declare const __VUE_PROD_DEVTOOLS__: boolean

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const comp: ComponentOptions
  export default comp
}

declare module '@siteData' {
  import type { SiteData } from './shared'
  const data: SiteData
  export default data
}

// this module's typing is broken.
declare module '@docsearch/js' {
  function docsearch<T = any>(props: T): void
  export default docsearch
}
