import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'

import { useDb } from './db'

export const auth = betterAuth({
  database: drizzleAdapter(useDb(), {
    provider: 'sqlite',
  }),
})
