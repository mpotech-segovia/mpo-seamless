<template>
    <div class="provider-mobile">
        <div class="provider-mobile__header">
            <TitlePage titlePage="SLOTS GAMES"></TitlePage>
        </div>
        <div class="provider-mobile__category-list">
            <ProviderListWrapper></ProviderListWrapper>
        </div>
        <v-container>
            <div class="provider-mobile__prov-list">
                <div class="prov-item" v-for="(item, i) in providerList" :key="i">
                    <a :href="item.link">
                        <div class="prov-img">
                            <img :src="item.imgSrc" alt="">
                        </div>
                        <div class="game-title">{{ item.providerName }}</div>
                    </a>
                </div>
            </div>
            <div class="provider-mobile__seo">
                <Seo></Seo>
            </div>
        </v-container>
    </div>
</template>

<script>
    import TitlePage from '@/components/TitlePage.vue'
    import ProviderListWrapper from '@/components/provider-wrapper/ProviderListWrapper.vue'
    import Seo from '@/components/home/Seo.vue'

    export default {
        name: 'ProviderMobile',

        components: {
            TitlePage,
            ProviderListWrapper,
            Seo,
        },

        data() {
            return {
                providerList: [{
                    imgSrc: require('@/assets/img/provider-banner/wm.jpg'),
                    providerName: 'WM CASINO',
                    link: '#/game-mobile',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/sexy.jpg'),
                    providerName: 'SEXY GAMING',
                    link: '#/game-mobile',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/n2live.jpg'),
                    providerName: 'WM CASINO',
                    link: '#/game-mobile',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/og.jpg'),
                    providerName: 'OG CASINO',
                    link: '#/game-mobile',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/pplc.jpg'),
                    providerName: 'PRAGMATIC PLAY LC',
                    link: '#/game-mobile',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/ag.jpg'),
                    providerName: 'ASIA GAMING',
                    link: '#/game-mobile',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/gd88.jpg'),
                    providerName: 'GD88',
                    link: '#/game-mobile',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/dream.jpg'),
                    providerName: 'DREAM GAMING',
                    link: '#/game-mobile',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/lg88.jpg'),
                    providerName: 'LG88',
                    link: '#/game-mobile',
                },]
            }
        },

        methods: {
            isMobile() {
                if( screen.width <= 906 ) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },

        created() {
            if (this.isMobile()) {
                this.$router.push('/provider-mobile').catch(()=>{});
            }
            else {
                this.$router.push('/provider').catch(()=>{});
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/mobile/_provider-mobile.scss';
</style>