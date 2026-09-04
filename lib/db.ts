import { createClient } from '@libsql/client'

function createDbClient() {
  const url = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN

  if (!url) {
    throw new Error('TURSO_DATABASE_URL is not set')
  }

  return createClient({
    url,
    authToken
  })
}

let _db: ReturnType<typeof createClient> | null = null

export const db = {
  execute: async (sql: string | { sql: string; args: unknown[] }) => {
    if (!_db) {
      _db = createDbClient()
    }
    return _db.execute(sql)
  }
}
