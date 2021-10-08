<template>
	<div class="register">
		<v-container>
			<div class="register__header">
				<h1>Register Form</h1>
			</div>
			<div class="register__form">
				<p class="register-desc">Member diharapkan untuk mengisi Nomor telepon dan Email yang aktif supaya kami bisa memberikan informasi terkini dan promo menarik serta untuk memudahkan perubahan password.</p>
				<v-form class="form-register" ref="form" v-model="validateForm" lazy-validation>
					<div class="form-group">
						<v-row>
							<v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
								<label class="label-textfield" for="">Nama Pengguna</label>
							</v-col>
							<v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
								<v-text-field label="Nama Pengguna" type="text" v-model="username" :rules="textFieldRules" hide-details="auto" solo rounded flat required></v-text-field>
							</v-col>
						</v-row>
					</div>
					<div class="form-group">
						<v-row>
							<v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
								<label class="label-textfield" for="">Kata Sandi</label>
							</v-col>
							<v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
								<v-text-field label="Kata Sandi" type="password" v-model="password" :rules="passwordRules" hide-details="auto" solo rounded flat required></v-text-field>
							</v-col>
						</v-row>
					</div>
					<div class="form-group">
						<v-row>
							<v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
								<label class="label-textfield" for="">Konfirmasi Kata Sandi</label>
							</v-col>
							<v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
								<v-text-field label="Konfirmasi Kata Sandi" type="password" v-model="confirmPassword" :rules="[ confirmPasswordRules]" solo rounded hide-details="auto" flat></v-text-field>
							</v-col>
						</v-row>
					</div>
					<div class="form-group">
						<v-row>
							<v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
								<label class="label-textfield" for="">Email</label>
							</v-col>
							<v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
								<v-text-field label="Email" type="text" v-model="email" :rules="emailRules" solo rounded hide-details="auto" flat required></v-text-field>
							</v-col>
						</v-row>
					</div>
					<div class="form-group">
						<v-row>
							<v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
								<label class="label-textfield" for="">Bank</label>
							</v-col>
							<v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
								<v-select :items="bank" label="Bank" solo hide-details="auto" flat rounded></v-select>
							</v-col>
						</v-row>
					</div>
					<div class="form-group">
						<v-row>
							<v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
								<label class="label-textfield" for="">Nomor Ponsel</label>
							</v-col>
							<v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
								<v-text-field label="Nomor Ponsel" type="number" v-model="phoneNumber" :rules="textFieldRules" solo rounded hide-details="auto" flat required></v-text-field>
							</v-col>
						</v-row>
					</div>
					<div class="form-group">
						<v-row>
							<v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
								<label class="label-textfield" for="">Nama Rekening</label>
							</v-col>
							<v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
								<v-text-field label="Nama Rekening" type="text" v-model="accountName" :rules="textFieldRules" solo rounded hide-details="auto" flat required></v-text-field>
							</v-col>
						</v-row>
					</div>
					<div class="form-group">
						<v-row>
							<v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
								<label class="label-textfield" for="">Nomor Rekening</label>
							</v-col>
							<v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
								<v-text-field label="Nomor Rekening" type="number" v-model="accountNumber" :rules="textFieldRules" solo rounded hide-details="auto" flat required></v-text-field>
							</v-col>
						</v-row>
					</div>
					<div class="form-group">
						<v-row>
							<v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
								<label class="label-textfield" for="">Referral</label>
							</v-col>
							<v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
								<v-text-field label="Referral" type="text" solo rounded hide-details="auto" flat></v-text-field>
							</v-col>
						</v-row>
					</div>
					<div class="form-group">
						<v-row>
							<v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
								<label class="label-textfield" for="">Captcha</label>
							</v-col>
							<v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
								<div class="captcha-form">
									<img src="https://52.220.214.91/captcha/default?H3jvAmqK" alt="">
									<v-btn class="captcha mx-3" small><v-icon x-small flat>fas fa-sync-alt</v-icon></v-btn>
									<v-text-field label="Captcha" type="text" v-model="captcha" :rules="textFieldRules" solo rounded hide-details="auto" flat required></v-text-field>
								</div>
							</v-col>
						</v-row>
					</div>
					<div class="form-group mb-2">
						<v-checkbox v-model="checkbox" label="Saya telah berusia lebih dari 18 tahun, telah membaca, dan menerima syarat dan ketentuan yang dipasang di situs ini, peraturan pribadi, dan aturan taruhan."></v-checkbox>
					</div>
					<div class="register-button">
						<v-btn class="register" rounded block @click="submit">Daftar</v-btn>
					</div>
				</v-form>
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
	},

	data() {
		return {
			checkbox: false,
			validateForm: false,
			username: '',
			password: '',
			confirmPassword: '',
			email: '',
			phoneNumber: '',
			accountName: '',
			accountNumber: '',
			captcha: '',
			textFieldRules: [
				v => !!v || 'This field is required',
			],
			passwordRules: [
				v => !!v || 'Password is required',
			],
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+/.test(v) || 'E-mail must be valid',
			],
			bank: ['BCA', 'BRI', 'BNI', 'Mandiri', 'Bank Lain',],
		}
	},

	computed: {
		confirmPasswordRules() {
			return() => (this.password === this.confirmPassword) || 'Password must match'
		}
	},

	methods: {
		submit() {
			this.$refs.form.validate();
		}
	},

	
}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/pages/_register.scss';
</style>