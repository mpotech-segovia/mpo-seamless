<template>
  <div class="home">
    <SliderSection></SliderSection>
    <GamesSection></GamesSection>
  </div>
</template>

<script>
import SliderSection from '@/components/home/Slider'
import GamesSection from '@/components/home/Games'

export default {
  name: 'Home',

  components: {
    SliderSection,
    GamesSection
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/pages/_home.scss';
</style>
