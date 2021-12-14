<template>
    <div class="news-mobile">
        <div class="news-mobile__header">
            <TitlePage titlePage="BERITA"></TitlePage>
        </div>
        <v-container>
            <div class="news-mobile__filter">
                <v-select :items="category" label="All News" item-text="name" item-value="name" solo hide-details flat dense></v-select>
            </div>
            <div class="news-mobile__list">
                <span v-for="(item, i) in newsList" :key="i">
                    <div class="news-item">
                        <a :href="item.link">
                            <div class="news-img">
                                <img :src="item.imgSrc" alt="">
                            </div>
                            <div class="news-info">
                                <div class="news-title">{{ item.newsTitle }}</div>
                                <div class="news-content">{{ item.newsContent }}</div>
                            </div>
                            <div class="news-bottom">
                                <div class="news-date">Tanngal berit: <span>{{ item.newsDate }}</span></div>
                                <div class="news-button">
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
        name: 'NewsMobile',

        components: {
            TitlePage
        },

        data() {
            return {
                category: [{
                    id: 0,
                    name: 'All News'
                },
                {
                    id: 1,
                    name: 'Sportsbook News'
                },
                {
                    id: 2,
                    name: 'Slot News'
                },],
                newsList: [{
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    newsTitle: 'Berita Title',
                    newsContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta incidunt fugiat nulla quaerat illum fugit, quia ipsam quos eveniet quidem cumque delectus corrupti, veritatis fuga! Ratione sapiente nulla porro itaque.',
                    newsDate: '22/02/2002',
                    link: '#/news-detail',
                },
                {
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    newsTitle: 'Berita Title',
                    newsContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta incidunt fugiat nulla quaerat illum fugit, quia ipsam quos eveniet quidem cumque delectus corrupti, veritatis fuga! Ratione sapiente nulla porro itaque.',
                    newsDate: '22/02/2002',
                    link: '#/news-detail',
                },
                {
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    newsTitle: 'Berita Title',
                    newsContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta incidunt fugiat nulla quaerat illum fugit, quia ipsam quos eveniet quidem cumque delectus corrupti, veritatis fuga! Ratione sapiente nulla porro itaque.',
                    newsDate: '22/02/2002',
                    link: '#/news-detail',
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
                this.$router.push('/news-mobile').catch(()=>{});
            }
            else {
                this.$router.push('/news').catch(()=>{});
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/mobile/_news-mobile.scss';
</style>