// Vite + TanStack Start config. Additional plugins (React, Tailwind, path
// aliases, Nitro) are provided by the shared defineConfig helper — do not
// re-add them manually or the build will duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts.
    server: { entry: "server" },
  },
});
