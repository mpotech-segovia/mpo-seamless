module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
  ? '/mpo-seamless/'
  : '/',
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        additionalData: "@import '@/assets/scss/utils/custom-variables.scss'",
      },
      scss: {
        additionalData: "@import '@/assets/scss/utils/custom-variables.scss';",
      },
    },
  },
}
