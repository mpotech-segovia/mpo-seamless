<template>
    <div class="provider">
        <v-container>
            <div class="provider__header">
                <h1>Slots Games</h1>
            </div>
            <div class="provider__list">
                <v-row>
                    <v-col xl="3" lg="3" md="4" sm="6" cols="12" v-for="(item, i) in providerList" :key="i">
                        <a :href="item.link">
                            <div class="prov-holder">
                                <div class="prov-img">
                                    <img :src="item.imgSrc" alt="">
                                    <div class="play-now"><h2>Play Now</h2></div>
                                </div>
                                <h3 class="prov-name">{{ item.providerName }}</h3>
                            </div>
                        </a>
                    </v-col>
                </v-row>
            </div>
            <Seo class="mt-5"></Seo>
        </v-container>
    </div>
</template>

<script>
    import Seo from '@/components/home/Seo.vue'

    export default {
        name: 'Provider',

        components: {
            Seo,
        },

        data() {
            return {
                providerList: [{
                    imgSrc: require('@/assets/img/provider-banner/wm.jpg'),
                    providerName: 'WM CASINO',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/sexy.jpg'),
                    providerName: 'SEXY GAMING',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/n2live.jpg'),
                    providerName: 'WM CASINO',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/og.jpg'),
                    providerName: 'OG CASINO',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/pplc.jpg'),
                    providerName: 'PRAGMATIC PLAY LC',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/ag.jpg'),
                    providerName: 'ASIA GAMING',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/gd88.jpg'),
                    providerName: 'GD88',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/dream.jpg'),
                    providerName: 'DREAM GAMING',
                    link: '#/game',
                },
                {
                    imgSrc: require('@/assets/img/provider-banner/lg88.jpg'),
                    providerName: 'LG88',
                    link: '#/game',
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
	@import '@/assets/scss/pages/_provider.scss';
</style>