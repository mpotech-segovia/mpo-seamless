<template>
    <div class="popular-mobile">
        <div class="popular-mobile__header">
            <TitlePage titlePage="POPULAR"></TitlePage>
        </div>
        <div class="popular-mobile__category-list">
            <ProviderListWrapper></ProviderListWrapper>
        </div>
        <v-container>
            <div class="popular-mobile__game-list">
                <div class="game-item" v-for="(item, i) in gameList" :key="i">
                    <a :href="item.link">
                        <div class="game-img">
                            <img :src="item.imgSrc" alt="">
                        </div>
                        <div class="game-title">{{ item.gameTitle }}</div>
                    </a>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    import TitlePage from '@/components/TitlePage.vue'
    import ProviderListWrapper from '@/components/provider-wrapper/ProviderListWrapper.vue'

    export default {
        name: 'GameMobile',

        components: {
            TitlePage,
            ProviderListWrapper,
        },

        data() {
            return {
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
        
        created() {
            if (this.isMobile() == false) {
                this.$router.push('/').catch(()=>{});
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/mobile/_popular-mobile.scss';
</style>