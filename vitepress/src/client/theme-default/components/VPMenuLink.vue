<script lang="ts" setup>
import { useRoute } from 'vitepress'
import VPLink from './VPLink.vue'

defineProps<{
  item: any
}>()

const route = useRoute()

const after = () => {
  let str = route.path
  if (str.includes('/docs/hooks/')) {
    str = str.replace('/docs/hooks/', '')
    const path = str?.replace('en/', '')
    return path
  }
  const path = str?.replace('/', '')?.replace('en/', '')
  return path
}

const isActiveLink = (path: string, link: string) => {
  if (link === '/en/') return path.includes('/en/')
  if (link === '/') return !path.includes('/en/')
  return true
}
</script>

<template>
  <div class="VPMenuLink">
    <VPLink
      :class="{
        active: isActiveLink(route.path, item.link)
      }"
      :href="`${item.link}${after()}`"
    >
      {{ item.text }}
    </VPLink>
  </div>
</template>

<style scoped>
.VPMenuGroup + .VPMenuLink {
  margin: 12px -12px 0;
  border-top: 1px solid var(--vp-c-divider-light);
  padding: 12px 12px 0;
}

.link {
  display: block;
  border-radius: 6px;
  padding: 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  transition: background-color 0.25s, color 0.25s;
}

.link:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-mute);
}

.dark .link:hover {
  background-color: var(--vp-c-bg-soft);
}

.link.active {
  color: var(--vp-c-brand);
}
</style>
