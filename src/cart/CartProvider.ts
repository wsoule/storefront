import { query } from '../db/client.js';

export interface CartLine {
  sku: string;
  qty: number;
}

// Cart state lives in the session store, so it follows a signed-in user
// between devices — task t-2e91aa.
export async function loadCart(sessionId: string): Promise<CartLine[]> {
  const rows = await query('SELECT lines FROM sessions WHERE id = ?', [sessionId]);
  const raw = rows[0]?.lines;
  if (typeof raw !== 'string') return [];
  try {
    return JSON.parse(raw) as CartLine[];
  } catch {
    return [];
  }
}

export async function saveCart(sessionId: string, lines: CartLine[]): Promise<void> {
  await query('UPDATE sessions SET lines = ? WHERE id = ?', [JSON.stringify(lines), sessionId]);
}
