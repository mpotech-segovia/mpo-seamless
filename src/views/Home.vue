<template>
	<div class="home">
		<SliderSection></SliderSection>
		<GamesSection></GamesSection>
		<ProviderSlider></ProviderSlider>
		<ServiceSection></ServiceSection>
		<SeoSection></SeoSection>
	</div>
</template>

<script>
	import SliderSection from '@/components/home/Slider.vue'
	import GamesSection from '@/components/home/Games.vue'
	import ServiceSection from '@/components/home/Service.vue'
	import SeoSection from '@/components/home/Seo.vue'
	import ProviderSlider from '@/components/home/ProviderSlider.vue'

	export default {
		name: 'Home',

		components: {
			SliderSection,
			GamesSection,
			ServiceSection,
			SeoSection,
			ProviderSlider,
		},

		methods: {
			isMobile() {
				if (screen.width <= 906) {
					return true;
				} else {
					return false;
				}
			}
		},

		created() {
			if (this.isMobile()) {
				this.$router.push('/home-mobile').catch(() => {});
			} else {
				this.$router.push('/').catch(() => {});
			}
		}
	}
</script>

<style lang="scss">
	@import '@/assets/scss/pages/_home.scss';
</style>