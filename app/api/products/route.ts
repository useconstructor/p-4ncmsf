import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        origin TEXT,
        notes TEXT,
        price REAL,
        description TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      )
    `)

    const { rows } = await db.execute('SELECT * FROM products ORDER BY created_at DESC')
    return Response.json(rows)
  } catch (error) {
    console.error('Database error:', error)
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    await db.execute(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        origin TEXT,
        notes TEXT,
        price REAL,
        description TEXT,
        created_at TEXT DEFAULT (datetime('now'))
      )
    `)

    await db.execute({
      sql: 'INSERT INTO products (name, origin, notes, price, description) VALUES (?, ?, ?, ?, ?)',
      args: [
        body.name,
        body.origin ?? null,
        body.notes ?? null,
        body.price ?? null,
        body.description ?? null
      ]
    })

    return Response.json({ ok: true })
  } catch (error) {
    console.error('Database error:', error)
    return Response.json({ error: 'Failed to create product' }, { status: 500 })
  }
}
