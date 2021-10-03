<template>
  <v-app>
    <Header></Header>
    <Navbar></Navbar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/layout/Header'
import Navbar from '@/layout/Navbar'

export default {
  name: 'App',

  components: {
    Header,
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "@/assets/scss/layout/_header.scss";
  @import "@/assets/scss/layout/_navbar.scss";
</style>
