// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'vee-validate-inputs',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'vee-validate-inputs',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'vee-validate-inputs',
        },
      ],
    },
  },

  components: true,

  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],

  vite: {
    plugins: [eslintPlugin()],
  },

  modules: ['@nuxtjs/tailwindcss'],
});
