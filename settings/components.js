//https://nuxtjs.org/tutorials/improve-your-developer-experience-with-nuxt-components

const components = [
    {
        path: '~/components/layout/',
        extensions: ['vue'] // Array, include files that match the extension
    },
    {
        path: '~/components/layout/navbar/',
        extensions: ['vue'] // Array, include files that match the extension
    },
    {
        path: '~/components/layout/sidebar/',
        extensions: ['vue'] // Array, include files that match the extension
    },
    {
        path: '~/components/layout/page/',
        prefix: 'page',
        extensions: ['vue'] // Array, include files that match the extension
    },
    {
        path: '~/components/layout/card/',
        prefix: 'card',
        extensions: ['vue'] // Array, include files that match the extension
    },
    {
        path: '~/components/',
        extensions: ['vue'] // Array, include files that match the extension
    },
]
export default components;