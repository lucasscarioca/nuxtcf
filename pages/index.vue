<script setup lang="ts">
const open = ref(false)
const features = [
  {
    title: 'Nuxt + Cloudflare',
    description: 'Modern, fast, and powerful frontend development with Nuxt and Cloudflare tooling.',
    icon: 'i-lucide-zap',
  },
  {
    title: 'Cloudflare Workers',
    description: 'Build your backend on the edge. Blazing fast, lightweight, and secure APIs with Cloudflare Workers.',
    icon: 'i-lucide-cloud',
  },
  {
    title: 'Drizzle ORM',
    description: 'A lightweight and powerful TypeScript ORM for your database, ensuring type-safe SQL.',
    icon: 'i-lucide-database',
  },
  {
    title: 'Authentication Included',
    description: 'Secure and easy-to-implement authentication system using "Better Auth".',
    icon: 'i-lucide-lock',
  },
  {
    title: 'Stripe Payments',
    description: 'Pre-configured Stripe integration for seamless and secure payment processing.',
    icon: 'i-lucide-credit-card',
  },
  {
    title: 'Nuxt UI + Tailwind',
    description: 'Beautiful, accessible, and customizable UI components powered by Nuxt UI and Tailwind CSS.',
    icon: 'i-lucide-palette',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small teams getting started.',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Email support',
      '10GB storage',
      'Core features',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '99',
    description: 'Ideal for growing businesses.',
    features: [
      'Up to 25 team members',
      'Advanced analytics',
      'Priority support',
      '100GB storage',
      'All features',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '299',
    description: 'For large organizations with complex needs.',
    features: [
      'Unlimited team members',
      'Custom analytics',
      'Dedicated support',
      'Unlimited storage',
      'All features',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
    ],
    popular: false,
  },
]

const faqs = [
  {
    label: 'What is included in the free trial?',
    content: 'The free trial includes access to all features for 14 days. No credit card required to start.',
  },
  {
    label: 'Can I cancel my subscription anytime?',
    content: 'Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.',
  },
  {
    label: 'Do you offer refunds?',
    content: 'We offer a 30-day money-back guarantee for all paid plans. Contact our support team for assistance.',
  },
  {
    label: 'Is my data secure?',
    content: 'Absolutely. We use enterprise-grade security with end-to-end encryption and comply with industry standards.',
  },
  {
    label: 'Do you provide customer support?',
    content: 'Yes, we offer 24/7 customer support via email, chat, and phone for all paid plans.',
  },
  {
    label: 'Can I upgrade or downgrade my plan?',
    content: 'Yes, you can change your plan at any time. Changes take effect immediately and are prorated.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-background flex flex-col">
    <!-- Navigation -->
    <nav class="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div class="container px-2 md:mx-auto flex h-16 items-center justify-between">
        <Logo />
        <div class="hidden md:flex items-center space-x-4">
          <UButton
            variant="link"
            to="#pricing"
            class="text-sm font-medium text-muted-foreground hover:text-muted"
          >
            Pricing
          </UButton>
          <UButton
            variant="link"
            to="#faq"
            class="text-sm font-medium text-muted-foreground hover:text-muted"
          >
            FAQ
          </UButton>
          <UButton variant="outline" to="/login">
            Sign In
          </UButton>
          <UButton to="/register">
            Sign Up
          </UButton>
        </div>
        <div class="md:hidden">
          <USlideover v-model:open="open">
            <UButton variant="ghost" size="md">
              <UIcon name="i-lucide-menu" class="h-6 w-6" />
            </UButton>
            <template #title>
              <Logo />
            </template>
            <template #description>
              <span class="sr-only">
                Menu bar
              </span>
            </template>
            <template #body>
              <div class="h-full flex flex-col gap-8 p-4">
                <div class="flex-1 flex flex-col gap-2">
                  <UButton
                    variant="ghost"
                    class="justify-start text-md"
                    to="#pricing"
                    @click="open = false"
                  >
                    Pricing
                  </UButton>
                  <UButton
                    variant="ghost"
                    class="justify-start text-md"
                    to="#faq"
                    @click="open = false"
                  >
                    FAQ
                  </UButton>
                </div>
                <div class="flex shrink w-full items-center gap-4">
                  <div class="flex-1 flex gap-4">
                    <UButton variant="outline" class="w-1/3 justify-center items-center" to="/login">
                      Sign In
                    </UButton>
                    <UButton class="w-1/3 justify-center items-center" to="/register">
                      Sign Up
                    </UButton>
                  </div>
                  <LazyThemeButton />
                </div>
              </div>
            </template>
          </USlideover>
        </div>
      </div>
      <USeparator />
    </nav>

    <!-- Hero Section -->
    <section class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto py-16 sm:py-24 flex flex-col items-center justify-center text-center">
        <div class="mx-auto max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            A Modern SaaS Template with
            <span class="text-primary block">
              Nuxt & Cloudflare
            </span>
          </h1>
          <p class="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground">
            A production-ready, open-source SaaS template using
            the best of the modern web. Built for developers who
            want to ship fast.
          </p>
          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <UButton size="lg" class="w-full sm:w-auto max-w-3/5" icon="i-lucide-arrow-right" trailing to="/register">
              Get Started
            </UButton>
            <UButton
              variant="outline"
              size="lg"
              class="w-full sm:w-auto max-w-3/5"
              icon="i-lucide-github"
              to="https://github.com/lucasscarioca/nuxtcf"
              target="_blank"
            >
              Star on GitHub
            </UButton>
          </div>
          <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <div class="flex items-center space-x-2">
              <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
              <span>Powered by Nuxt & Cloudflare</span>
            </div>
            <div class="flex items-center space-x-2">
              <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
              <span>Serverless on Cloudflare Workers</span>
            </div>
            <div class="flex items-center space-x-2">
              <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Everything you need to build and launch
        </h2>
        <p class="mt-4 text-base sm:text-lg text-muted-foreground">
          This template comes with a powerful, type-safe, and
          modern stack out of the box.
        </p>
      </div>
      <div class="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <UCard v-for="feature in features" :key="feature.title">
          <div
            class="flex flex-col items-center text-center"
          >
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <UIcon :name="feature.icon" class="h-6 w-6 text-primary" />
            </div>
            <h3 class="mb-2 text-lg font-semibold">
              {{ feature.title }}
            </h3>
            <p class="text-muted-foreground">
              {{ feature.description }}
            </p>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Pricing Section -->
    <section
      id="pricing"
      class="container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Mock pricing
        </h2>
        <p class="mt-4 text-base sm:text-lg text-muted-foreground">
          Choose the plan that&apos;s right for your business. All
          plans include our core features.
        </p>
      </div>
      <div class="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3">
        <UCard
          v-for="plan in pricingPlans" :key="plan.name" class="relative" :class="{
            'shadow-lg shadow-primary/30 ring-primary/10': plan.popular,
          }"
        >
          <div v-if="plan.popular" class="mb-4 absolute left-1 top-1 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-sm font-medium text-primary">
            <UIcon name="i-lucide-star" class="mr-1 h-4 w-4" />
            Most Popular
          </div>
          <div class="flex flex-col items-center text-center w-full h-full">
            <h3 class="text-2xl font-bold">
              {{ plan.name }}
            </h3>
            <div class="mt-4 flex items-baseline justify-center">
              <span class="text-4xl font-bold">
                {{ plan.price }}
              </span>
              <span class="ml-1 text-muted-foreground">
                /month
              </span>
            </div>
            <p class="mt-2 text-sm text-muted-foreground">
              {{ plan.description }}
            </p>
            <ul class="mt-6 space-y-3 flex-1">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-center justify-start"
              >
                <UIcon name="i-lucide-check" class="mr-2 h-4 w-4 text-green-500" />
                <span class="text-sm">
                  {{ feature }}
                </span>
              </li>
            </ul>
            <UButton
              class="mt-8 w-full justify-center"
              :variant="plan.popular ? 'solid' : 'soft'"
              to="/register"
            >
              Get Started
            </UButton>
          </div>
        </UCard>
      </div>
    </section>

    <!-- FAQ Section -->
    <section
      id="faq"
      class="container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <p class="mt-4 text-base sm:text-lg text-muted-foreground">
            Everything you need to know about our platform and
            pricing.
          </p>
        </div>
        <div class="mt-12 sm:mt-16">
          <UAccordion :items="faqs" />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <UCard class="mx-auto max-w-4xl text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Ready to get started?
        </h2>
        <p class="mt-4 text-base sm:text-lg text-muted-foreground">
          Join thousands of businesses that trust our platform to
          grow their operations.
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <UButton size="lg" class="w-full sm:w-auto max-w-3/5" icon="i-lucide-arrow-right" trailing to="/register">
            Get Started
          </UButton>
          <UButton
            variant="outline"
            size="lg"
            class="w-full sm:w-auto max-w-3/5"
            icon="i-lucide-github"
            to="https://github.com/lucasscarioca/nuxtcf"
            target="_blank"
          >
            Star on GitHub
          </UButton>
        </div>
      </UCard>
    </section>

    <!-- Footer -->
    <footer class="mt-auto">
      <USeparator />
      <div class="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div class="space-y-4">
            <Logo />
            <p class="text-sm text-muted">
              Empowering developers with modern SaaS solutions
              for the digital age.
            </p>
          </div>
          <div>
            <h4 class="font-semibold">
              Product
            </h4>
            <ul class="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold">
              Company
            </h4>
            <ul class="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold">
              Support
            </h4>
            <ul class="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <USeparator class="my-8" />
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-muted text-center sm:text-left">
            © 2025 Nuxtcf Starter. All rights reserved.
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div class="flex space-x-6 text-sm text-muted">
              <a href="#" class="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" class="hover:text-primary">
                Terms of Service
              </a>
              <a href="#" class="hover:text-primary">
                Cookie Policy
              </a>
            </div>
            <LazyThemeButton />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
