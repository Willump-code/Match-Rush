export default defineNuxtConfig({
    ssr: false,
    devtools: { enabled: true },
    modules: ['@pinia/nuxt'],
    css: ['@/assets/scss/main.scss'],
    vite: {
        base:'/Match-Rush/',
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/_variables.scss";'
                }
            }
        }
    },
    app: {
        baseURL: '/Match-Rush/',
        head: {
            title: 'Математический тренажёр | MathRush',
            meta: [
                { name: 'description', content: 'Продвинутый математический тренажёр с интерактивными задачами' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'robots', content: 'index, follow' }
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap' },
            ]
        }
    },
});
