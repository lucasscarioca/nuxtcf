<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

import * as z from 'zod'

const schema = z
  .object({
    email: z.string().email({ message: 'Enter a valid email address.' }),
  })

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
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
              Forgot your password?
            </h2>
          </template>
          <UForm :schema="schema" :state="state" class="grid gap-6" @submit="onSubmit">
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
              <UButton type="submit" class="w-full justify-center">
                Send reset link
              </UButton>
            </div>
            <div class="text-center text-sm">
              <ULink
                to="/login"
                class="underline underline-offset-4"
              >
                Back to login
              </ULink>
            </div>
          </UForm>
        </UCard>
      </div>
    </div>
  </div>
</template>
