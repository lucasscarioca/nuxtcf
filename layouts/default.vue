<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex items-center justify-between px-4 bg-background/90">
      <div class="flex items-center">
        <ULink to="/" class="flex items-center gap-0.5">
          <UIcon name="i-lucide-home" class="size-5" />
          <span class="font-bold">Home</span>
        </ULink>
      </div>
      <div class="flex-1">
        <Navbar />
      </div>
      <div class="flex items-center gap-2">
        <UButton variant="subtle" size="sm" icon="i-lucide-user">
          Login
        </UButton>
        <LazyThemeButton />
      </div>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
  </div>
</template>
