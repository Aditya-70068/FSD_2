export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    threads: false   // ✅ FIX for CI crashes
  }
})
