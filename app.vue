<script setup lang="ts">
useHead({
  title: 'NuxtCf',
  meta: [
    { name: 'description', content: 'Nuxt + Cloudflare Starter' },
  ],
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
