<script setup lang="ts">
const mobileMenuState = defineModel<boolean>('mobileMenuState')
</script>

<template>
  <USlideover v-model:open="mobileMenuState" side="left">
    <UButton variant="soft" color="neutral" size="sm" icon="i-lucide-sidebar" />
    <template #title>
      <Logo />
    </template>
    <template #description>
      <span class="sr-only">
        Menu bar
      </span>
    </template>
    <template #body>
      <div class="h-full flex flex-col gap-8 p-4 group" :data-state="mobileMenuState ? 'expanded' : 'collapsed'">
        <SideMenuList />
      </div>
    </template>
  </USlideover>
</template>
