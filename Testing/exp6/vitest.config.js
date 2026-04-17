import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: true, // Use single thread to avoid worker pool issues
      }
    },
    deps: {
      inline: ['@exodus/bytes', 'html-encoding-sniffer'] // Inline these modules
    }
  }
})
