<template>
  <AppContainer>
    <template #header>
      <UTooltip text="This cannot be undone, proceed with caution." :delay-duration="100">
        <UButton variant="soft" color="error" icon="i-lucide-trash" size="sm">
          Delete Account
        </UButton>
      </UTooltip>
    </template>
    <div class="h-full w-full flex flex-col items-center justify-center">
      <div class="flex-1 flex flex-col gap-4 w-full items-center justify-center">
        <h1 class="text-2xl font-bold">
          Settings
        </h1>
        <p class="text-sm text-muted-foreground">
          Manage your account settings here.
        </p>
        <div class="flex gap-2 w-full items-center justify-center">
          <UButton to="/settings/profile" variant="soft" color="neutral" icon="i-lucide-user">
            Profile
          </UButton>
          <UButton to="/settings/billing" variant="soft" color="neutral" icon="i-lucide-credit-card">
            Billing
          </UButton>
        </div>
      </div>
    </div>
  </AppContainer>
</template>
