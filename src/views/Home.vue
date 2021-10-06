<template>
  <div class="home">
    <SliderSection></SliderSection>
    <GamesSection></GamesSection>
    <ServiceSection></ServiceSection>
  </div>
</template>

<script>
import SliderSection from '@/components/home/Slider'
import GamesSection from '@/components/home/Games'
import ServiceSection from '@/components/home/Service'

export default {
  name: 'Home',

  components: {
    SliderSection,
    GamesSection,
    ServiceSection
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/pages/_home.scss';
</style>
