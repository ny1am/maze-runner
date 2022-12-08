import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: { port: 3000 },
  plugins: [tsconfigPaths(), solidPlugin()],
});
