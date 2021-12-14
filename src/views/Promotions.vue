<template>
    <div class="promotions">
        <v-container>
            <div class="promotions__header">
                <h1>Promotions</h1>
            </div>
            <div class="promotions__filter">
                <div class="filter-tab">
                    <div class="filter-item">
                        <a href="javascript:void(0);">All Promo</a>
                    </div>
                    <div class="filter-item">
                        <a href="javascript:void(0);">New Promo</a>
                    </div>
                </div>
                <div class="filter-search">
                    <v-text-field label="Search" v-model="searchGame" solo hide-details flat clearable append-icon="fas fa-search"></v-text-field>
                </div>
            </div>
            <div class="promotions__list">
                <v-row>
                    <v-col xl="4" lg="6" md="6" sm="6" cols="12" v-for="(item, i) in promoList" :key="i">
                        <a :href="item.link">
                            <div class="promo-item">
                                <div class="promo-img">
                                    <img :src="item.imgSrc" alt="">
                                    <div class="play-now"><h2>Show Promo</h2></div>
                                </div>
                                <h3 class="promo-title">{{ item.promoTitle }}</h3>
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
        name: 'Promotions',

        components: {
            Seo,
        },

        data() {
            return {
                promoList: [{
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    promoTitle: 'Promo Slots',
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    promoTitle: 'Promo Sportsbook',
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    promoTitle: 'Promo Fishing',
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    promoTitle: 'Promo Casino',
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    promoTitle: 'Promo Lottery',
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    promoTitle: 'Promo Poker',
                    link: '',
                },],
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
                this.$router.push('/promotions-mobile').catch(()=>{});
            }
            else {
                this.$router.push('/promotions').catch(()=>{});
            }
        }
    }
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/pages/_promotions.scss';
</style>