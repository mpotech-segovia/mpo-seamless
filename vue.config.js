module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
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
