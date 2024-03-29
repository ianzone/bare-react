import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	// https://cn.vitest.dev/guide/features.html#%E5%AF%B9%E8%B1%A1%E6%A8%A1%E6%8B%9F-mocking
	// server: {
	//   port: 30000,
	// },
	plugins: [react()],
	resolve: {
		alias: {
			src: resolve(__dirname, "src"),
		},
	},
});
