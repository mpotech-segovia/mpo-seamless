<template>
    <v-dialog v-model="show" max-width="320">
        <div class="login-modal">
            <div class="login-modal__header">
                <v-icon>fas fa-user-circle</v-icon>
                <h3 class="mb-0">Login Form</h3>
            </div>
            <div class="login-modal__form">
                <div class="form-group">
                    <v-text-field class="mb-2" label="Username" type="text" solo rounded hide-details flat>
                    </v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field label="Username" type="password" solo rounded hide-details flat></v-text-field>
                </div>
                <div class="form-group forgot-password">
                    <a href="">Forgot Password</a>
                </div>
                <div class="form-group login-button">
                    <v-btn class="login" rounded block @click.stop="show=false">Login</v-btn>
                </div>
                <div class="form-group register-content">
                    <h5>Belum punya akun? <a href="">Daftar Sekarang</a></h5>
                </div>
            </div>
        </div>
    </v-dialog>
</template>

<script>
    export default {
        name: 'LoginModal',

        data() {
            return {

            }
        },

        props: ['visible'],

        computed: {
            show: {
                get() {
                    return this.visible
                },
                set(value) {
                    if (!value) {
                        this.$emit('close')
                        this.$emit('login')
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/layout/mobile/_login-modal.scss";
</style>