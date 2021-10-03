<template>
    <div class="navbar">
        <v-container class="py-2">
            <div class="navbar__cont">
                <div class="navbar-logo">SEAMLESS</div>
                <div class="navbar-menu">
                    <span v-for="(item, i) in navItem" :key="i">
                        <a href="" class="nav-link" >
                            <div class="nav-item">
                                <div class="icon active">
                                    <img  :src="item.iconSrcActive" alt="">
                                </div>
                                <div class="icon inactive">
                                    <img :src="item.iconSrcInactive" alt="">
                                </div>
                                <div class="nav-title mt-1">{{ item.title }}</div>
                            </div>
                        </a>
                    </span>
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
                iconSrcActive: require('@/assets/navbar-icon/slots.svg'),
                iconSrcInactive: require('@/assets/navbar-icon/slots-white.svg'),
                title: 'Slots'
            },
            {
                iconSrcActive: require('@/assets/navbar-icon/sportsbook.svg'),
                iconSrcInactive: require('@/assets/navbar-icon/sportsbook-white.svg'),
                title: 'Sportsbook'
            },
            {
                iconSrcActive: require('@/assets/navbar-icon/fishing.svg'),
                iconSrcInactive: require('@/assets/navbar-icon/fishing-white.svg'),
                title: 'Fishing'
            },
            {
                iconSrcActive: require('@/assets/navbar-icon/game-lain.svg'),
                iconSrcInactive: require('@/assets/navbar-icon/game-lain-white.svg'),
                title: 'Game Lain'
            },
            {
                iconSrcActive: require('@/assets/navbar-icon/casino.svg'),
                iconSrcInactive: require('@/assets/navbar-icon/casino-white.svg'),
                title: 'Casino'
            },
            {
                iconSrcActive: require('@/assets/navbar-icon/lottery.svg'),
                iconSrcInactive: require('@/assets/navbar-icon/lottery-white.svg'),
                title: 'Lottery'
            },
            {
                iconSrcActive: require('@/assets/navbar-icon/poker.svg'),
                iconSrcInactive: require('@/assets/navbar-icon/poker-white.svg'),
                title: 'Poker'
            },
            {
                iconSrcActive: require('@/assets/navbar-icon/berita.svg'),
                iconSrcInactive: require('@/assets/navbar-icon/berita-white.svg'),
                title: 'Berita'
            },
            {
                iconSrcActive: require('@/assets/navbar-icon/promosi.svg'),
                iconSrcInactive: require('@/assets/navbar-icon/promosi-white.svg'),
                title: 'Promosi'
            }]
        }
    }
}
</script>