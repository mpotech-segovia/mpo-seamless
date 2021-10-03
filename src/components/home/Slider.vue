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
			<v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.imgSrc"></v-carousel-item>
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
				slides: [{
					imgSrc: require('@/assets/slider-img/slider-1.jpg')
				},
				{
					imgSrc: require('@/assets/slider-img/slider-1.jpg')
				},
				{
					imgSrc: require('@/assets/slider-img/slider-1.jpg')
				}],
				jackpot: 'IDR 255,778,920',
			}
		},

		methods: {
			
		},
	}
</script>