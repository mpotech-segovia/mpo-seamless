<template>
	<v-app>
		<Header v-if="!isMobile()"></Header>
		<HeaderMobile v-if="isMobile()"></HeaderMobile>
		<v-main>
			<router-view />
		</v-main>
		<Footer v-if="!isMobile()"></Footer>
		<FooterMobile v-if="isMobile()"></FooterMobile>
		<GameBalloon v-if="!isMobile()"></GameBalloon>
	</v-app>
</template>

<script>
	import Header from '@/layout/Header.vue'
	import Footer from '@/layout/Footer.vue'
	import HeaderMobile from '@/layout/mobile/HeaderMobile.vue'
	import FooterMobile from '@/layout/mobile/FooterMobile.vue'
	import GameBalloon from '@/components/GameBalloon.vue'

	export default {
		name: 'App',

		components: {
			Header,
			Footer,
			HeaderMobile,
			FooterMobile,
			GameBalloon,
		},

		data: () => ({
			
		}),

		methods: {
			isMobile() {
				if (screen.width <= 906) {
					return true;
				} else {
					return false;
				}
			}
		},
	};
</script>

<style lang="scss">
	@import "@/assets/scss/layout/_index.scss";
	@import "@/assets/scss/components/_index.scss";
</style>