import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const DATA_DIR = '/tmp';
const DATA_FILE = join(DATA_DIR, 'cosmo-support-data.json');

function readData() {
  try {
    if (existsSync(DATA_FILE)) {
      return JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch {}
  return null;
}

function writeData(data) {
  try {
    if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
    writeFileSync(DATA_FILE, JSON.stringify(data), 'utf-8');
    return true;
  } catch { return false; }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-key');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    const data = readData();
    if (data) return res.status(200).json({ ok: true, data });
    return res.status(200).json({ ok: true, data: null });
  }

  if (req.method === 'POST') {
    const adminKey = req.headers['x-admin-key'];
    const expected = process.env.ADMIN_SYNC_KEY || 'cosmo-admin';
    if (adminKey !== expected) return res.status(401).json({ ok: false, error: 'Unauthorized' });

    const body = req.body;
    if (!body || !body.products) return res.status(400).json({ ok: false, error: 'Invalid payload' });

    const saved = writeData({ products: body.products, generalPages: body.generalPages || {}, updatedAt: new Date().toISOString() });
    if (saved) return res.status(200).json({ ok: true });

    return res.status(500).json({ ok: false, error: 'Failed to save' });
  }

  return res.status(405).end();
}
