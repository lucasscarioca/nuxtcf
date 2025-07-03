<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

import * as z from 'zod'

const schema = z
  .object({
    email: z.string().email({ message: 'Enter a valid email address.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
    confirmPassword: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords don\'t match.',
    path: ['confirmPassword'],
  })

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <div class="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
    <div class="flex w-full max-w-sm flex-col gap-6">
      <ULink
        to="/"
        class="flex items-center gap-2 self-center text-default"
      >
        <Logo />
      </ULink>
      <div class="flex flex-col gap-6">
        <UCard>
          <template #header>
            <h2 class="text-center font-semibold text-muted">
              Create an account
            </h2>
          </template>
          <UForm :schema="schema" :state="state" class="grid gap-6" @submit="onSubmit">
            <div class="flex flex-col gap-4">
              <UButton icon="i-flowbite-google-solid" variant="outline" color="neutral" class="w-full justify-center">
                Sign up with Google
              </UButton>
            </div>
            <USeparator label="Or continue with" :ui="{ label: 'text-muted' }" />
            <div class="grid gap-6">
              <UFormField
                label="Email"
                name="email"
              >
                <UInput
                  v-model="state.email"
                  class="w-full"
                  type="email"
                  placeholder="m@example.com"
                  variant="subtle"
                />
              </UFormField>
              <UFormField
                label="Password"
                name="password"
              >
                <UInput
                  v-model="state.password"
                  type="password"
                  class="w-full"
                  variant="subtle"
                />
              </UFormField>
              <UFormField
                label="Confirm Password"
                name="confirmPassword"
              >
                <UInput
                  v-model="state.confirmPassword"
                  type="password"
                  class="w-full"
                  variant="subtle"
                />
              </UFormField>
              <UButton type="submit" class="w-full justify-center">
                Create account
              </UButton>
            </div>
            <div class="text-center text-sm">
              Already have an account?
              <ULink
                to="/login"
                class="underline underline-offset-4"
              >
                Sign in
              </ULink>
            </div>
          </UForm>
        </UCard>
        <div class="text-toned *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
          By clicking continue, you agree to our
          <a href="#">Terms of Service</a> and
          <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  </div>
</template>
