<template>
	<div class="home__slider">
		<v-carousel cycle hide-delimiter-background show-arrows-on-hover>
			<template v-slot:prev="{ on, attrs }">
				<v-btn elevation="3" x-large icon v-bind="attrs" v-on="on">
					<v-icon>fas fa-angle-left</v-icon>
				</v-btn>
			</template>
			<template v-slot:next="{ on, attrs }">
				<v-btn elevation="3" x-large icon v-bind="attrs" v-on="on">
					<v-icon>fas fa-angle-right</v-icon>
				</v-btn>
			</template>
			<span v-if="isMobile()">
				<v-carousel-item v-for="(slide, i) in slidesMobile" :key="i" :src="slide.imgSrc"></v-carousel-item>
			</span>
			<span v-if="!isMobile()">
				<v-carousel-item v-for="(slide, i) in slidesDesktop" :key="i" :src="slide.imgSrc"></v-carousel-item>
			</span>
			<div class="slider-jackpot">
				<h3>Current Jackpot</h3>
				<h1>{{ jackpot }}</h1>
			</div>
		</v-carousel>
	</div>
</template>

<script>
	export default {
		name: 'Slider',

		data() {
			return {
				slidesDesktop: [{
					imgSrc: require('@/assets/img/slider-img/slider-1.jpg')
				},
				{
					imgSrc: require('@/assets/img/slider-img/slider-1.jpg')
				}],
				slidesMobile: [{
					imgSrc: require('@/assets/img/slider-img/phone-slider-1.jpg')
				},
				{
					imgSrc: require('@/assets/img/slider-img/phone-slider-1.jpg')
				},],
				jackpot: 'IDR 255,778,920',
			}
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
		}
	}
</script>

<style lang="scss">
	@import "@/assets/scss/components/home/_slider.scss";
</style>