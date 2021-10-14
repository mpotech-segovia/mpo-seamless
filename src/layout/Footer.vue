<template>
    <div class="footer">
        <v-container class="pb-0">
            <div class="footer__provider">
                <div class="provider-content" v-for="(item, i) in provider" :key="i">
                    <div class="provider-title"><h5>{{ item.gameType }}</h5></div>
                    <div class="provider-logo">
                        <img :src="items" v-for="(items, i) in item.providerLogo" :key="i" alt="">
                    </div>
                </div>
                <div class="provider-content">
                    <v-row>
                        <v-col xl="2" lg="2" md="6" sm="3" cols="6">
                            <div class="provider-title"><h5>Poker</h5></div>
                            <div class="provider-logo">
                                <img src="@/assets/img/footer-provider/we1.png" alt="">
                            </div>
                        </v-col>
                        <v-col xl="2" lg="2" md="6" sm="3" cols="6">
                            <div class="provider-title"><h5>Lottery</h5></div>
                            <div class="provider-logo">
                                <img src="@/assets/img/footer-provider/mpo4d1.png" alt="">
                            </div>
                        </v-col>
                        <v-col xl="2" lg="2" md="6" sm="3" cols="6">
                            <div class="provider-title"><h5>E-Sport</h5></div>
                            <div class="provider-logo">
                                <img src="@/assets/img/footer-provider/iae-sport.png" alt="">
                            </div>
                        </v-col>
                        <v-col xl="2" lg="2" md="6" sm="3" cols="6">
                            <div class="provider-title"><h5>Other Game</h5></div>
                            <div class="provider-logo">
                                <img src="@/assets/img/footer-provider/miki.png" alt="">
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
            <div class="footer__link">
                <a :href="item.link" v-for="(item, i) in footerLink" :key="i">{{ item.linkName }}</a>
            </div>
            <div class="footer__trademark">
                <p>Copyright © 2021 Mpoplay, is an international registered trademark. All rights reserved.</p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            provider: [{
                gameType: 'Sportsbook',
                providerLogo: [
                    require('@/assets/img/footer-provider/wwbet.png'),
                    require('@/assets/img/footer-provider/sbobet.png'),
                    require('@/assets/img/footer-provider/cmd368.png'),
                ],
            },
            {
                gameType: 'Live Casino',
                providerLogo: [
                    require('@/assets/img/footer-provider/ebet.png'),
                    require('@/assets/img/footer-provider/og.png'),
                    require('@/assets/img/footer-provider/dreamgaming.png'),
                    require('@/assets/img/footer-provider/asia-gaming.png'),
                    require('@/assets/img/footer-provider/sg.png'),
                    require('@/assets/img/footer-provider/sa-gaming.png'),
                    require('@/assets/img/footer-provider/wm-casino.png'),
                    require('@/assets/img/footer-provider/pp.png'),
                    require('@/assets/img/footer-provider/allbet.png'),
                ],
            },
            {
                gameType: 'Slots',
                providerLogo: [
                    require('@/assets/img/footer-provider/pp.png'),
                    require('@/assets/img/footer-provider/tt-gaming.png'),
                    require('@/assets/img/footer-provider/playtech.png'),
                    require('@/assets/img/footer-provider/habanero.png'),
                    require('@/assets/img/footer-provider/microgaming.png'),
                    require('@/assets/img/footer-provider/sp.png'),
                    require('@/assets/img/footer-provider/isoftbet.png'),
                    require('@/assets/img/footer-provider/playngo.png'),
                    require('@/assets/img/footer-provider/cq9.png'),
                    require('@/assets/img/footer-provider/maja.png'),
                    require('@/assets/img/footer-provider/pgsoft.png'),
                    require('@/assets/img/footer-provider/spade-gaming.png'),
                    require('@/assets/img/footer-provider/yggdrasil.png'),
                ],
            },],
            footerLink: [{
                linkName: '+18',
                link: ''
            },
            {
                linkName: 'Berita',
                link: ''
            },
            {
                linkName: 'Promosi',
                link: ''
            },
            {
                linkName: 'About Us',
                link: ''
            },
            {
                linkName: 'Contact Us',
                link: ''
            },
            {
                linkName: 'Terms & Conditions',
                link: ''
            },
            {
                linkName: 'FAQ',
                link: '#/help'
            },
            {
                linkName: 'Feedback',
                link: ''
            },]
        }
    }
}
</script>