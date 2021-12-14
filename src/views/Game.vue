<template>
    <div class="game">
        <v-container>
            <div class="game__header">
				<h1>Slots Games</h1>
			</div>
            <div class="game__provider">
                <a :href="item.link" v-for="(item, i) in limitProvider" :key="i">
                    <div class="provider-item">
                        <img :src="item.imgSrc" alt="">
                    </div>
                </a>
                <div class="provider-item see-more" v-if="showMore"  @click="viewMore">
                    <v-icon>fas fa-ellipsis-h</v-icon>
                </div>
            </div>
            <div class="game__list">
                <div class="list-header">
                    <h2>Pragmatic Play</h2>
                    <div class="header-search">
                        <v-text-field label="Search" v-model="searchGame" solo hide-details flat clearable append-icon="fas fa-search"></v-text-field>
                    </div>
                    <div class="header-filter">
                        <v-select :items="category" label="Game List" item-text="name" item-value="name" solo hide-details flat v-model="select_category"></v-select>
                    </div>
                </div>
                <div class="filter-category">
                    <div class="filter-item" v-for="(items, i) in category" :key="i">
                        <a href="javascript:void(0);" v-if="i <= 8">{{ items.name }}</a>
                    </div>
                </div>
                <div class="list-grid">
                    <span v-for="(item, i) in filterGame" :key="i">
                        <div class="game-holder">
                            <a :href="item.link">
                                <div class="game-img">
                                    <img :src="item.imgSrc" alt="">
                                </div>
                                <h5 class="game-title">{{ item.gameTitle }}</h5>
                            </a>
                        </div>
                    </span>
                </div>
            </div>
            <Seo class="mt-5"></Seo>
        </v-container>
    </div>
</template>

<script>
    import Seo from '@/components/home/Seo.vue'

    export default {
        name: 'Game',

        components: {
            Seo,
        },

        data() {
            return {
                providerToShow: 9,
                showMore: true,
                searchGame: '',
                select_category: 'All Games',
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
                providerList: [{
                    imgSrc: require('@/assets/img/provider/pp.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/isb.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/ygg.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/spade.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/png.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/cq9.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/pp.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/isb.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/ygg.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/spade.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/png.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/cq9.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/pp.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/isb.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/ygg.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/spade.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/png.png'),
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/provider/cq9.png'),
                    link: '',
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
            viewMore() {
                this.providerToShow += 10;
                this.showMore = this.providerToShow === this.limitProvider.length
            },
            isMobile() {
                if( screen.width <= 906 ) {
                    return true;
                }
                else {
                    return false;
                }
            },
        },
        
        computed: {
            limitProvider(){
                return this.providerToShow ? this.providerList.slice(0,this.providerToShow) : this.providerList
            },
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
	@import '@/assets/scss/pages/_game.scss';
</style>