<template>
    <div class="home-mobile">
        <Slider></Slider>
        <div class="home-mobile__form">
            <div class="form-button login">LOGIN</div>
            <a href="#/register">
                <div class="form-button register" to="register">
                    REGISTER
                </div>
            </a>
        </div>
        <div class="home-mobile__provider">
            <ProviderListWrapper></ProviderListWrapper>
        </div>
        <v-container>
            <div class="home-mobile__game">
                <div class="game-item" v-for="(item, i) in limitGameList" :key="i">
                    <a :href="item.link">
                        <div class="game-img">
                            <img :src="item.imgSrc" alt="">
                        </div>
                        <div class="game-title">{{ item.gameTitle }}</div>
                    </a>
                </div>
            </div>
        </v-container>
        <div class="home-mobile__download">
            <v-container>
                <div class="download-wrapper">
                    <div class="download-content">
                        <div class="download-icon">
                            <img src="@/assets/img/android-icon.png" alt="">
                        </div>
                        <div class="download-info">
                            <h5>MPOSEAMLESS</h5>
                            <h6>Download sekarang</h6>
                        </div>
                    </div>
                    <div class="download-button">
                        <v-btn class="download" small>Download Now</v-btn>
                    </div>
                </div>
            </v-container>
        </div>
        <v-container>
            <div class="home-mobile__seo">
                <Seo></Seo>
            </div>
        </v-container>
    </div>
</template>

<script>
    import Slider from '@/components/home/Slider.vue'
    import Seo from '@/components/home/Seo.vue'
    import ProviderListWrapper from '@/components/provider-wrapper/ProviderListWrapper.vue'

    export default {
        name: 'HomeMobile',

        components: {
            Slider,
            Seo,
            ProviderListWrapper
        },

        data() {
            return {
                gameToShow: 9,
                gameList: [{
                    imgSrc: require('@/assets/img/game-img/1.jpg'),
                    gameTitle: 'Phoenix Forge',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/2.jpg'),
                    gameTitle: 'Empty The Bank',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/3.jpg'),
                    gameTitle: 'Heart of Rio',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/4.jpg'),
                    gameTitle: 'Lucky Lighting',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/5.jpg'),
                    gameTitle: 'Dragon Hot Hold And Spin',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/6.jpg'),
                    gameTitle: '5 Lion Megaway',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/7.jpg'),
                    gameTitle: 'Cash Evalator',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/8.jpg'),
                    gameTitle: 'Hokkaido Wolf',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/9.jpg'),
                    gameTitle: 'Cash Evalator',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/10.jpg'),
                    gameTitle: 'The Magic Gaudron',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/11.jpg'),
                    gameTitle: 'Bigger Bass Bonanza',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/12.jpg'),
                    gameTitle: 'Bigger Bass Bonanza',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/13.jpg'),
                    gameTitle: 'Bigger Bass Bonanza',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/img/game-img/14.jpg'),
                    gameTitle: 'Bigger Bass Bonanza',
                    link: '#',
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

        computed: {
            limitGameList() {
                return this.gameToShow ? this.gameList.slice(0,this.gameToShow) : this.gameList
            }
        },

        created() {
            if (this.isMobile()) {
                this.$router.push('/home-mobile').catch(()=>{});
            }
            else {
                this.$router.push('/').catch(()=>{});
            }
        }
    }
</script> 

<style lang="scss" scoped>
    @import "@/assets/scss/pages/mobile/_home-mobile.scss";
</style>