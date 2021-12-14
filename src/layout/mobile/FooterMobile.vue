<template>
    <div class="footer-mobile">
        <div class="footer-mobile__wrapper">
            <div class="footer-mobile__item active">
                <a href="#/">
                    <div class="icon">
                        <v-icon dense>fas fa-home</v-icon>
                    </div>
                    <h6>Home</h6>
                </a>
            </div>
            <div class="footer-mobile__item">
                <a href="">
                    <div class="icon">
                        <v-icon dense>fas fa-th-large</v-icon>
                    </div>
                    <h6>Apps</h6>
                </a>
            </div>
            <div class="footer-mobile__item mobile-login" @click.stop="dialog = true" v-if="guest">
                <div class="icon">
                    <v-icon size="28">fas fa-user-alt</v-icon>
                </div>
                <h6>Login</h6>
            </div>
            <div class="footer-mobile__item mobile-login" v-if="!guest">
                <div class="icon">
                    <v-icon size="28">fas fa-wallet</v-icon>
                </div>
                <h6>Dompetku</h6>
            </div>
            <div class="footer-mobile__item">
                <a href="#/promotions-mobile">
                    <div class="icon">
                        <v-icon dense>fas fa-percentage</v-icon>
                    </div>
                    <h6>Promo</h6>
                </a>
            </div>
            <div class="footer-mobile__item">
                <a href="">
                    <div class="icon">
                        <v-icon dense>fas fa-comments</v-icon>
                    </div>
                    <h6>Live Chat</h6>
                </a>
            </div>
        </div>
        <LoginModal :visible="dialog" @close="dialog=false" @login="guest=false"></LoginModal>
    </div>
</template>

<script>
    import LoginModal from '@/layout/mobile/LoginModal.vue'

    export default {
        name: 'FooterMobile',

        data() {
            return {
                dialog: false,
                guest: true,
            }
        },

        components: {
            LoginModal,
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/layout/mobile/_footer-mobile.scss";
</style>