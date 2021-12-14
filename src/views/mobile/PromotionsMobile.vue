<template>
    <div class="promotions-mobile">
        <div class="promotions-mobile__header">
            <TitlePage titlePage="PROMOTIONS"></TitlePage>
        </div>
        <v-container>
            <div class="promotions-mobile__filter">
                <v-select :items="category" label="All Promo" item-text="name" item-value="name" solo hide-details flat dense></v-select>
            </div>
            <div class="promotions-mobile__list">
                <span v-for="(item, i) in promoList" :key="i">
                    <div class="promo-item">
                        <a :href="item.link">
                            <div class="promo-img">
                                <img :src="item.imgSrc" alt="">
                            </div>
                            <div class="promo-bottom">
                                <div class="promo-title">{{ item.promoTitle }}</div>
                                <div class="promo-button">
                                    <v-btn rounded x-small>READ MORE</v-btn>
                                </div>
                            </div>
                        </a>
                    </div>
                </span>
            </div>
        </v-container>
    </div>
</template>

<script>
    import TitlePage from '@/components/TitlePage.vue'

    export default {
        name: 'PromotionsMobile',

        components: {
            TitlePage,
        },

        data() {
            return {
                category: [{
                    id: 0,
                    name: 'All Promos'
                },
                {
                    id: 1,
                    name: 'New Promo'
                },
                {
                    id: 2,
                    name: 'Slot Promo'
                },],
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
    @import '@/assets/scss/pages/mobile/_promotions-mobile.scss';
</style>