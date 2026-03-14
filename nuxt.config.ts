export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@pinia/nuxt'],
    css: ['@/assets/scss/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/_variables.scss";'
                }
            }
        }
    },
    app: {
        head: {
            title: 'Математический тренажёр | MathRush',
            meta: [
                { name: 'description', content: 'Продвинутый математический тренажёр с интерактивными задачами' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'robots', content: 'index, follow' }
            ],
            link: [
                
            ]
        }
    }
});
