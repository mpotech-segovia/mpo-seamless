<template>
    <div class="game">
        <v-container>
            <div class="game__header">
				<h1>Slots Games</h1>
			</div>
            <Seo class="mt-5"></Seo>
        </v-container>
    </div>
</template>

<script>
import Seo from '@/components/home/Seo.vue'

export default {
    name: 'Game',

    components: {
		Seo,
	},
}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/pages/_game.scss';
</style>