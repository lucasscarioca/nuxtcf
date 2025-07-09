<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

defineProps<{
  logo?: boolean
}>()

const { setDark, setLight } = useTheme()

const menuOptions = [
  { icon: 'i-lucide-chart-column-increasing', label: 'Dashboard', to: '/dashboard' },
  { icon: 'i-lucide-settings', label: 'Settings', to: '/settings' },
] as const

const items = ref<DropdownMenuItem[][]>([
  [{ label: 'Lucas Carioca', type: 'label', avatar: { src: 'https://github.com/lucasscarioca.png', size: 'lg' } }],
  [{ label: 'Upgrade to Pro', icon: 'i-lucide-crown', color: 'primary', to: '/settings/billing' }],
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user',
      to: '/settings/profile',
    },
    {
      label: 'Billing',
      icon: 'i-lucide-credit-card',
      to: '/settings/billing',
    },
    {
      label: 'Notifications',
      icon: 'i-lucide-bell',
    },
  ],
  [
    {
      label: 'Theme',
      icon: 'i-lucide-swatch-book',
      children: [
        { label: 'Light', icon: 'i-lucide-sun', onSelect: setLight },
        { label: 'Dark', icon: 'i-lucide-moon', onSelect: setDark },
      ],
    },
    {
      label: 'Language',
      icon: 'i-lucide-languages',
      children: [
        { label: 'English' },
        { label: 'Portuguese' },
      ],
    },
  ],
  [
    { label: 'Logout', icon: 'i-lucide-log-out', to: '/login' },
  ],
])
</script>

<template>
  <div class="flex flex-col h-full">
    <div v-if="logo" class="flex items-center justify-center mb-8">
      <UIcon name="i-lucide-zap" class="h-6 w-6 text-primary" />
      <span class="opacity-0 overflow-hidden group-data-[state=expanded]:opacity-100 hidden group-data-[state=expanded]:block transition-all duration-200 ease-linear font-bold">
        NuxtCf
      </span>
    </div>
    <div class="flex flex-col gap-2 flex-1">
      <UTooltip v-for="option in menuOptions" :key="option.label" arrow :content="{ side: 'right', sideOffset: 10 }" :delay-duration="100" :text="option.label">
        <UButton
          :to="option.to"
          variant="soft" color="neutral" active-color="primary"
          :icon="option.icon"
          class="font-semibold justify-start md:justify-center md:group-data-[state=expanded]:justify-start"
        >
          <span class="md:hidden md:group-data-[state=expanded]:block  overflow-hidden text-nowrap">
            {{ option.label }}
          </span>
        </UButton>
      </UTooltip>
    </div>
    <div class="flex items-center justify-center group-data-[state=expanded]:justify-start">
      <UDropdownMenu arrow :items="items">
        <UButton :avatar="{ src: 'https://github.com/lucasscarioca.png', icon: 'i-lucide-user', size: 'md' }" variant="soft" color="neutral" class="w-full">
          <span class="md:hidden md:group-data-[state=expanded]:block overflow-hidden text-nowrap">
            Lucas Carioca
          </span>
        </UButton>
      </UDropdownMenu>
    </div>
  </div>
</template>
