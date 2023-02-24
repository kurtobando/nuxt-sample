export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    modules: ['@nuxtjs/tailwindcss', ['@nuxtjs/robots', { UserAgent: '*', Disallow: '/' }]],
});
