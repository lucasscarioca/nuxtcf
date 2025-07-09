<script setup lang="ts">
const { isDark, forced } = useTheme()
</script>

<template>
  <ClientOnly v-if="!forced">
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="ghost"
      size="sm"
      @click="isDark = !isDark"
    >
      <span className="sr-only">Toggle theme</span>
    </UButton>

    <template #fallback>
      <USkeleton class="size-9" />
    </template>
  </ClientOnly>
</template>
