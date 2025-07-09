import type { H3Event } from 'h3'

import { drizzle } from 'drizzle-orm/d1'

import * as schema from '../db/schema'

export { and, eq, or, sql } from 'drizzle-orm'

export const tables = schema

export function useDb(event: H3Event) {
  return drizzle(event.context.cloudflare.env.DB, { schema })
}

export type User = typeof schema.users.$inferSelect
