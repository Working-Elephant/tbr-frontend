import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "_") };
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  return defineConfig({
    // vite config
    // server: {
    //   fs: {
    //     allow: [".."],
    //   },
    // },
    plugins: [
      react({
        jsxRuntime: "automatic",
      }),

      // envCompatible({
      //   prefix: "_",
      // }),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
    server: {
      watch: {
        usePolling: true,
      },
      host: true, // needed for the Docker Container port mapping to work
      strictPort: true,
      port: 5173, // you can replace this port with any port
    },
  });
};
