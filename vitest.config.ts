import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import viteConfig from './vite.config'

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/*'],
            server: {
                deps: {
                    inline: ['vuetify'],
                },
            },
            root: fileURLToPath(new URL('./', import.meta.url)),
            globals: true,
            setupFiles: ["./src/plugins/firebase/test-setup.ts"]
        }
    })
)
