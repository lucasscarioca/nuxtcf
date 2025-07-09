import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  CLOUDFLARE_ACCOUNT_ID: z.string().optional(),
  CLOUDFLARE_DATABASE_ID: z.string().optional(),
  CLOUDFLARE_D1_TOKEN: z.string().optional(),
})

// eslint-disable-next-line node/no-process-env
export default envSchema.parse(process.env)
