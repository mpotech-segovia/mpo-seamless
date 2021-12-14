<template>
    <div class="header-mobile">
        <div class="header-mobile__wrapper">
            <v-container>
                <div class="header-mobile__flex">
                    <div class="mobile-logo">
                        <img src="https://images.linkcdn.cloud/V1/44/logo/44-logo-1407729506.webp" alt="">
                    </div>
                    <div class="mobile-button">
                        <v-btn class="mr-1 refresh" small icon v-if="!guest">
                            <v-icon x-small>fas fa-sync-alt</v-icon>
                        </v-btn>
                        <v-btn class="mr-2 amount" small v-if="!guest">
                            <v-icon class="mr-2" x-small>fas fa-coins</v-icon>
                            IDR 100.00
                        </v-btn>
                        <div class="navigation-button" @click.stop="drawer = !drawer">
                            <v-icon>fas fa-bars</v-icon>
                        </div>
                    </div>
                </div>
            </v-container>
        </div>
        <v-navigation-drawer v-model="drawer" v-if="!dialog" fixed temporary right width="280">
            <div class="drawer-header">
                <div class="drawer-header__greet">
                    <h5>Selamat Datang <span v-if="!guest">mpo_player_001</span></h5>
                </div>
                <div class="drawer-header__logo">
                    <img src="https://images.linkcdn.cloud/V1/44/logo/44-logo-1407729506.webp" alt="">
                </div>
                <div class="drawer-header__button" v-if="guest">
                    <h6>Silakan Masuk atau Mendaftar!</h6>
                    <div class="form-button">
                        <v-btn class="login mr-2" rounded small @click.stop="dialog = true">Masuk</v-btn>
                        <v-btn class="register" rounded small to="/register">Daftar</v-btn>
                    </div>
                    <div class="forgot-password">
                        <a href="">Forgot Password</a>
                    </div>
                </div>
            </div>
            <div class="drawer-list" v-if="guest">
                <a :href="item.link" v-for="item in drawerListGuest" :key="item.title">
                    <div class="drawer-list__item">
                        <v-icon small>{{ item.icon }}</v-icon>
                        <h5>{{ item.title }}</h5>
                    </div>
                </a>
            </div>
            <div class="drawer-list" v-if="!guest">
                <a :href="item.link" v-for="item in drawerListMember" :key="item.title" :to="item.link">
                    <div class="drawer-list__item">
                        <v-icon small>{{ item.icon }}</v-icon>
                        <h5>{{ item.title }}</h5>
                    </div>
                </a>
                <div class="drawer-list__item" @click="logout()">
                    <v-icon small>fas fa-sign-out-alt</v-icon>
                    <h5>Keluar</h5>
                </div>
            </div>
        </v-navigation-drawer>
        <LoginModal :visible="dialog" @close="dialog=false" @login="guest=false"></LoginModal>
    </div>
</template>

<script>
    import LoginModal from '@/layout/mobile/LoginModal.vue'

    export default {
        name: 'HeaderMobile',

        components: {
            LoginModal,
        },

        data() {
            return {
                guest: true,
                drawer: null,
                dialog: false,
                drawerListGuest: [{
                        title: 'Home',
                        icon: 'fas fa-home',
                        link: '#/',
                    },
                    {
                        title: 'Promo',
                        icon: 'fas fa-percentage',
                        link: '#/promotions-mobile',
                    },
                    {
                        title: 'Keluaran Terakhir',
                        icon: 'fas fa-table',
                        link: '',
                    },
                    {
                        title: 'Batuan',
                        icon: 'fas fa-question-circle',
                        link: '#/help-mobile',
                    },
                    {
                        title: 'Download Apps',
                        icon: 'fas fa-cloud-download-alt',
                        link: '',
                    },
                    {
                        title: 'Berita',
                        icon: 'fas fa-rss-square',
                        link: '#/news-mobile',
                    },
                    {
                        title: 'Hubungi Kami',
                        icon: 'fas fa-phone-square',
                        link: '',
                    },
                ],
                drawerListMember: [{
                        title: 'Home',
                        icon: 'fas fa-home',
                        link: '#/',
                    },
                    {
                        title: 'Transaksi',
                        icon: 'fas fa-wallet',
                        link: '#/transaction',
                    },
                    {
                        title: 'Permainan',
                        icon: 'fas fa-gamepad',
                        link: '#/game',
                    },
                    {
                        title: 'Bonus',
                        icon: 'fas fa-coins',
                        link: '#/bonus',
                    },
                    {
                        title: 'Memo',
                        icon: 'fas fa-inbox',
                        link: '#/memo',
                    },
                    {
                        title: 'Promo',
                        icon: 'fas fa-percentage',
                        link: '#/promotions-mobile',
                    },
                    {
                        title: 'Akun Saya',
                        icon: 'fas fa-user-circle',
                        link: '',
                    },
                    {
                        title: 'Berita',
                        icon: 'fas fa-rss-square',
                        link: '#/news-mobile',
                    },
                    {
                        title: 'Batuan',
                        icon: 'fas fa-question-circle',
                        link: '#/help-mobile',
                    },
                    {
                        title: 'Hubungi Kami',
                        icon: 'fas fa-phone-square',
                        link: '',
                    },
                ],
            }
        },

        methods: {
            logout() {
                this.guest = true
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/layout/mobile/_header-mobile.scss";
</style>