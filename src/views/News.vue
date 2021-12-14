<template>
    <div class="news">
        <v-container>
            <div class="news__header">
                <h1>News</h1>
            </div>
            <div class="news__list">
                <v-row>
                    <v-col xl="4" lg="6" md="6" sm="6" cols="12" v-for="(item, i) in newsList" :key="i">
                        <a :href="item.link">
                            <div class="news-item">
                                <div class="news-img">
                                    <img :src="item.imgSrc" alt="">
                                    <div class="show-now"><h2>Show News</h2></div>
                                </div>
                                <div class="news-info">
                                    <h3 class="news-title">{{ item.newsTitle }}</h3>
                                    <p class="description">{{ item.newsDesc }}</p>
                                </div>
                                <div class="news-button">
                                    <v-btn class="news" rounded small>Read More</v-btn>
                                </div>
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
    name: 'News',

    components: {
        Seo,
    },

    data() {
        return {
            newsList: [{
                imgSrc: require('@/assets/img/promo-banner.jpg'),
                newsTitle: 'Berita Title',
                newsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: '#/news-detail',
            },
            {
                imgSrc: require('@/assets/img/promo-banner.jpg'),
                newsTitle: 'Berita Title',
                newsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: '#/news-detail',
            },
            {
                imgSrc: require('@/assets/img/promo-banner.jpg'),
                newsTitle: 'Berita Title',
                newsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: '#/news-detail',
            },
            {
                imgSrc: require('@/assets/img/promo-banner.jpg'),
                newsTitle: 'Berita Title',
                newsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: '#/news-detail',
            },
            {
                imgSrc: require('@/assets/img/promo-banner.jpg'),
                newsTitle: 'Berita Title',
                newsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: '#/news-detail',
            },
            {
                imgSrc: require('@/assets/img/promo-banner.jpg'),
                newsTitle: 'Berita Title',
                newsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
	@import '@/assets/scss/pages/_news.scss';
</style>