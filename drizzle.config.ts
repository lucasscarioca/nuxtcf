import { defineConfig } from 'drizzle-kit'

import env from './lib/env'

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  driver: 'd1-http',
  casing: 'snake_case',
  dbCredentials: {
    accountId: env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: env.CLOUDFLARE_DATABASE_ID!,
    token: env.CLOUDFLARE_D1_TOKEN!,
  },
})
