<script setup lang="ts">
defineProps<{
  state?: boolean
}>()
</script>

<template>
  <nav :data-state="state ? 'expanded' : 'collapsed'" class="flex-col group py-2 transition-[left,right,width] duration-200 ease-linear w-0 md:w-12 hidden md:flex md:data-[state=expanded]:w-40">
    <SideMenuList logo />
  </nav>
</template>
