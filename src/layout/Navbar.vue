<template>
    <div class="navbar">
        <v-container class="py-0">
            <div class="navbar__cont">
                <div class="navbar-logo"><a href="">SEAMLESS</a></div>
                <div class="navbar-menu">
                    <div class="nav-item" v-for="(item, i) in navItem" :key="i">
                        <a :href="item.link" class="nav-link" >
                            <div class="link-item">
                                <div class="icon active">
                                    <img :src="item.iconSrcActive" alt="">
                                </div>
                                <div class="icon inactive">
                                    <img :src="item.iconSrcInactive" alt="">
                                </div>
                                <div class="nav-title mt-2">{{ item.navtitle }}</div>
                            </div>
                        </a>
                        <div class="nav-provider">
                            <v-container class="d-flex align-center justify-center flex-wrap">
                                <div class="provider-item" v-for="(items, i) in item.providerList" :key="i">
                                    <a :href="items.link">
                                        <img :src="items.imgSrc" alt="">
                                        <h5>{{ items.providerName }}</h5>
                                    </a>
                                </div>
                            </v-container>
                        </div>
                    </div>
                    <div class="nav-item">
                        <a href="" class="nav-link" >
                            <div class="link-item">
                                <div class="icon active">
                                    <img src="@/assets/img/navbar-icon/berita.svg" alt="">
                                </div>
                                <div class="icon inactive">
                                    <img src="@/assets/img/navbar-icon/berita-white.svg" alt="">
                                </div>
                                <div class="nav-title mt-2">Berita</div>
                            </div>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="" class="nav-link" >
                            <div class="link-item">
                                <div class="icon active">
                                    <img src="@/assets/img/navbar-icon/promosi.svg" alt="">
                                </div>
                                <div class="icon inactive">
                                    <img src="@/assets/img/navbar-icon/promosi-white.svg" alt="">
                                </div>
                                <div class="nav-title mt-2">Promosi</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return {
            navItem: [{
                iconSrcActive: require('@/assets/img/navbar-icon/slots.svg'),
                iconSrcInactive: require('@/assets/img/navbar-icon/slots-white.svg'),
                navtitle: 'Slots',
                link: '#/provider',
                providerList: [{
                    imgSrc: require('@/assets/img/provider-img/pragmaticplay.png'),
                    providerName: 'Pragmatic Play',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-img/spade_logo.png'),
                    providerName: 'Spade Gaming',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-img/joker.png'),
                    providerName: 'Joker Gaming',
                    link: '#/game',
                },]
            },
            {
                iconSrcActive: require('@/assets/img/navbar-icon/sportsbook.svg'),
                iconSrcInactive: require('@/assets/img/navbar-icon/sportsbook-white.svg'),
                navtitle: 'Sportsbook',
                link: '#/provider',
                providerList: [{
                    imgSrc: require('@/assets/img/provider-img/afb.png'),
                    providerName: 'AFB',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-img/sbosport_logo.png'),
                    providerName: 'SBO Sport',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-img/cmd368.png'),
                    providerName: 'CMD368',
                    link: '#/game',
                },]
            },
            {
                iconSrcActive: require('@/assets/img/navbar-icon/fishing.svg'),
                iconSrcInactive: require('@/assets/img/navbar-icon/fishing-white.svg'),
                navtitle: 'Fishing',
                link: '#/provider',
                providerList: [{
                    imgSrc: require('@/assets/img/provider-img/joker.png'),
                    providerName: 'Joker Gaming',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-img/spade_logo.png'),
                    providerName: 'Spade Gaming',
                    link: '#/game',
                },]
            },
            {
                iconSrcActive: require('@/assets/img/navbar-icon/game-lain.svg'),
                iconSrcInactive: require('@/assets/img/navbar-icon/game-lain-white.svg'),
                navtitle: 'Game Lain',
                link: '#/provider',
                providerList: [{
                    imgSrc: require('@/assets/img/provider-img/sv388.webp'),
                    providerName: 'SV388 Cockfight',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-img/miki.webp'),
                    providerName: 'MIKI Gaming',
                    link: '#/game',
                },]
            },
            {
                iconSrcActive: require('@/assets/img/navbar-icon/casino.svg'),
                iconSrcInactive: require('@/assets/img/navbar-icon/casino-white.svg'),
                navtitle: 'Casino',
                link: '#/provider',
                providerList: [{
                    imgSrc: require('@/assets/img/provider-img/gd88.webp'),
                    providerName: 'GD88',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-img/wm_casino.webp'),
                    providerName: 'WM Casino',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-img/pragmatic_play.webp'),
                    providerName: 'Pragmatic Play LC',
                    link: '#/game',
                },]
            },
            {
                iconSrcActive: require('@/assets/img/navbar-icon/lottery.svg'),
                iconSrcInactive: require('@/assets/img/navbar-icon/lottery-white.svg'),
                navtitle: 'Lottery',
                link: '#/provider',
                providerList: [{
                    imgSrc: require('@/assets/img/provider-img/mpo4d.webp'),
                    providerName: 'MPO4D',
                    link: '#/game',
                },]
            },
            {
                iconSrcActive: require('@/assets/img/navbar-icon/poker.svg'),
                iconSrcInactive: require('@/assets/img/navbar-icon/poker-white.svg'),
                navtitle: 'Poker',
                link: '#/provider',
                providerList: [{
                    imgSrc: require('@/assets/img/provider-img/we1poker.webp'),
                    providerName: 'WE1Poker',
                    link: '#/game',
                },]
            },]
        }
    }
}
</script>