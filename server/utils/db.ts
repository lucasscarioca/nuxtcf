import { drizzle } from 'drizzle-orm/d1'

import * as schema from '../db/schema'

export { and, eq, or, sql } from 'drizzle-orm'

export const tables = schema

export function useDb() {
  return drizzle(getDatabaseBinding(), { schema })
}

export type User = typeof schema.user.$inferSelect

let _db: D1Database
function getDatabaseBinding(): D1Database {
  if (_db)
    return _db

  // @ts-expect-error globalThis.__env__ is not defined
  // eslint-disable-next-line node/no-process-env
  const binding = process.env.DB || globalThis.__env__?.DB || globalThis.DB

  if (binding) {
    _db = binding as D1Database
    return _db
  }

  throw new Error('Missing database binding')
}
