import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true
      }
    },
    deps: {
      inline: ['@exodus/bytes', 'html-encoding-sniffer']
    }
  }
})