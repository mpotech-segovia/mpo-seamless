<template>
	<div class="register">
		<v-container>
			<div class="register__header">
				<h1>Register Form</h1>
			</div>
			<div class="register__form">
				<p class="register">Member diharapkan untuk mengisi Nomor telepon dan Email yang aktif supaya kami bisa memberikan informasi terkini dan promo menarik serta untuk memudahkan perubahan password.</p>
			</div>
			<Seo class="mt-5"></Seo>
		</v-container>
	</div>
</template>

<script>
import Seo from '@/components/home/Seo.vue'

export default {
	name: 'Register',

	components: {
		Seo,
	}
}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/pages/_register.scss';
</style>