<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const { menuState, toggleMenu } = useSideMenu()

const route = useRoute()

const breadcrumbs = ref<BreadcrumbItem[]>(route.path.split('/').filter(Boolean).map((path, index, array) => {
  return { label: capitalize(path), to: `/${array.slice(0, index + 1).join('/')}` }
}))
</script>

<template>
  <div class="flex min-h-screen p-2 bg-muted">
    <SideMenu :state="menuState" />
    <div class="flex flex-col flex-1 bg-default rounded-lg md:ml-2 p-2 gap-1">
      <div class="flex items-center gap-2">
        <div class="hidden md:block">
          <UButton variant="soft" color="neutral" size="sm" icon="i-lucide-sidebar" @click="toggleMenu" />
        </div>
        <div class="md:hidden">
          <SideMenuDrawer v-model="menuState" />
        </div>
        <UBreadcrumb :items="breadcrumbs" />
        <div class="flex-1 flex items-center justify-end text-sm">
          <slot name="header">
            Customizable actions via #header slot
          </slot>
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <slot />
      </div>
    </div>
  </div>
</template>
