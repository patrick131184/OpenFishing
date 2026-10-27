import adapter from '@sveltejs/adapter-node';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			// Hier werden die CSRF- und Origin-Einstellungen für SvelteKit v3 übergeben:
			csrf: {
				trustedOrigins: ['http://fish.server.internal']
			},
			paths: {
				origin: 'http://fish.server.internal'
			},
			adapter: adapter()
		})
	]
});
