<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "@/assets/scss/layout/_index.scss";
</style>
