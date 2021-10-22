<template>
  <div class="home">
    <SliderSection></SliderSection>
    <GamesSection></GamesSection>
    <ServiceSection></ServiceSection>
    <SeoSection></SeoSection>
  </div>
</template>

<script>
  import SliderSection from '@/components/home/Slider'
  import GamesSection from '@/components/home/Games'
  import ServiceSection from '@/components/home/Service'
  import SeoSection from '@/components/home/Seo'

  export default {
    name: 'Home',

    components: {
      SliderSection,
      GamesSection,
      ServiceSection,
      SeoSection
    },

    methods: {
      isMobile() {
        if( screen.width <= 906 ) {
            return true;
        }
        else {
            return false;
        }
      }
    },

    created() {
        if (this.isMobile()) {
            this.$router.push('/mobile-home');
        }
        else {
            this.$router.push('/');
        }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/scss/pages/_home.scss';
</style>
