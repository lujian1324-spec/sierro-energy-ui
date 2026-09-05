import sharp from 'sharp'
import { mkdirSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svgPath = join(root, 'public', 'favicon.svg')
const outDir = join(root, 'public')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const sizes = [
  { file: 'pwa-192x192.png', size: 192 },
  { file: 'pwa-512x512.png', size: 512 },
  { file: 'apple-touch-icon.png', size: 180 },
]

for (const { file, size } of sizes) {
  await sharp(svgPath).resize(size, size).png().toFile(join(outDir, file))
  console.log(`wrote public/${file}`)
}
