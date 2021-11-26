import path from 'path';
import CKEditorStyles from '@ckeditor/ckeditor5-dev-utils';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | BLOG',
    title: 'Home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/ckeditor/ckeditor', mode: 'client' },
    { src: '@/plugins/vee-validate' },
    { src: '@/plugins/helper' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['cookie-universal-nuxt'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          default: '#082032',
          mute: '#2C394B',
          primary: '#1081E8',
          secondary: '#ff8700',
          tertiary: '#0fb3bd',
          quaternary: '#ff4d6d',
          success: '#00E676',
          error: '#FF3D00',
        },
        light: {
          default: '#fff',
          mute: '#f4f5fc',
          primary: '#1081E8',
          secondary: '#ff8700',
          tertiary: '#0fb3bd',
          quaternary: '#ff4d6d',
          success: '#00E676',
          error: '#FF3D00',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/,
      'vee-validate/dist/rules',
    ],

    plugins: [
      // If you set ssr: true that will cause the following error. This error does not affect the operation.
      // ERROR  [CKEditorWebpackPlugin] Error: No translation has been found for the zh language.
      // new CKEditorWebpackPlugin({
      //   // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
      //   language: 'zh',
      //   additionalLanguages: 'all',
      //   addMainLanguageTranslationsToAllAssets: true,
      // }),
    ],

    // If you don't add postcss, the CKEditor css will not work.
    postcss: CKEditorStyles.styles.getPostCssConfig({
      themeImporter: {
        themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
      },
      minify: true,
    }),

    extend(config, ctx) {
      const svgRule = config.module.rules.find((item) => {
        return /svg/.test(item.test);
      });
      svgRule.exclude = [path.join(__dirname, 'node_modules', '@ckeditor')];

      // add svg to load raw-loader
      config.module.rules.push({
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        use: ['raw-loader'],
      });
    },
  },
};
