<template>
    <div class="game-mobile">
        <div class="game-mobile__header">
            <TitlePage titlePage="PRAGMATIC PLAY"></TitlePage>
        </div>
        <v-container>
            <div class="game-mobile__wrapper">
                <div class="wrapper-filter">
                    <div class="filter-select">
                        <v-select :items="category" label="Game List" item-text="name" item-value="name" solo hide-details flat dense v-model="select_category"></v-select>
                    </div>
                    <div class="filter-search">
                        <v-text-field label="Search" v-model="searchGame" solo hide-details flat dense append-icon="fas fa-search"></v-text-field>
                    </div>
                </div>
                <div class="game-list">
                    <span  v-for="(item, i) in filterGame" :key="i">
                        <div class="game-item">
                            <a :href="item.link">
                                <div class="game-img">
                                    <img :src="item.imgSrc" alt="">
                                </div>
                                <div class="game-title">{{ item.gameTitle }}</div>
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    import TitlePage from '@/components/TitlePage.vue'

    export default {
        name: 'GamaMobile',

        components: {
            TitlePage,
        },

        data() {
            return {
                select_category: 'All Games',
                searchGame: '',
                category: [{
                    id: 0,
                    name: 'All Games'
                },
                {
                    id: 1,
                    name: 'Video Slots'
                },
                {
                    id: 2,
                    name: 'Bonus Buy Slots'
                },
                {
                    id: 3,
                    name: 'Megaway Slots'
                },
                {
                    id: 4,
                    name: 'Bacarrat News'
                },
                {
                    id: 5,
                    name: 'Classic Slots'
                },
                {
                    id: 6,
                    name: 'Bacarrat'
                },
                {
                    id: 7,
                    name: 'Blackjack'
                },
                {
                    id: 8,
                    name: 'Roulette'
                },],
                gameList: [{
                    imgSrc: require('@/assets/img/game-img/1.jpg'),
                    gameTitle: 'Phoenix Forge',
                    link: '#',
                    category: 'Video Slots',
                },
                {
                    imgSrc: require('@/assets/img/game-img/2.jpg'),
                    gameTitle: 'Empty The Bank',
                    link: '#',
                    category: 'Bonus Buy Slots',
                },
                {
                    imgSrc: require('@/assets/img/game-img/3.jpg'),
                    gameTitle: 'Heart of Rio',
                    link: '#',
                    category: 'Megaway Slots',
                },
                {
                    imgSrc: require('@/assets/img/game-img/4.jpg'),
                    gameTitle: 'Lucky Lighting',
                    link: '#',
                    category: 'Bacarrat News',
                },
                {
                    imgSrc: require('@/assets/img/game-img/5.jpg'),
                    gameTitle: 'Dragon Hot Hold And Spin',
                    link: '#',
                    category: 'Classic Slots',
                },
                {
                    imgSrc: require('@/assets/img/game-img/6.jpg'),
                    gameTitle: '5 Lion Megaway',
                    link: '#',
                    category: 'Bacarrat',
                },
                {
                    imgSrc: require('@/assets/img/game-img/7.jpg'),
                    gameTitle: 'Cash Evalator',
                    link: '#',
                    category: 'Blackjack',
                },
                {
                    imgSrc: require('@/assets/img/game-img/8.jpg'),
                    gameTitle: 'Hokkaido Wolf',
                    link: '#',
                    category: 'Roulette',
                },
                {
                    imgSrc: require('@/assets/img/game-img/9.jpg'),
                    gameTitle: 'Cash Evalator',
                    link: '#',
                    category: 'Video Slots',
                },
                {
                    imgSrc: require('@/assets/img/game-img/10.jpg'),
                    gameTitle: 'The Magic Gaudron',
                    link: '#',
                    category: 'Bonus Buy Slots',
                },
                {
                    imgSrc: require('@/assets/img/game-img/11.jpg'),
                    gameTitle: 'Bigger Bass Bonanza',
                    link: '#',
                    category: 'Megaway Slots',
                },
                {
                    imgSrc: require('@/assets/img/game-img/12.jpg'),
                    gameTitle: 'Bigger Bass Bonanza',
                    link: '#',
                    category: 'Bacarrat News',
                },
                {
                    imgSrc: require('@/assets/img/game-img/13.jpg'),
                    gameTitle: 'Bigger Bass Bonanza',
                    link: '#',
                    category: 'Classic Slots',
                },
                {
                    imgSrc: require('@/assets/img/game-img/14.jpg'),
                    gameTitle: 'Bigger Bass Bonanza',
                    link: '#',
                    category: 'Baccarat',
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
            filterGame() {
                var category = this.select_category
                
                if (category === 'All Games') {
                    return this.gameList
                } else {
                    return this.gameList.filter(game_category => {
                            return category === "All Games" || game_category.category === category
                        },
                    )
                }
            }
        },

        created() {
            if (this.isMobile()) {
                this.$router.push('/game-mobile').catch(()=>{});
            }
            else {
                this.$router.push('/game').catch(()=>{});
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/mobile/_game-mobile.scss';
</style>