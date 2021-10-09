<template>
    <div class="home__games">
        <v-container>
            <div class="game-type">
                <a href="">
                    <div class="game-item popular">
                        <div class="game-title">Popular</div>
                        <img class="game-icon" src="@/assets/img/game-icon/popular.png">
                    </div>
                </a>
                <a href="">
                    <div class="game-item  casino">
                        <div class="game-title">Casino</div>
                        <img class="game-icon" src="@/assets/img/game-icon/casino.png">
                    </div>
                </a>
                <a href="">
                    <div class="game-item sportsbook">
                        <div class="game-title">Sportsbook</div>
                        <img class="game-icon" src="@/assets/img/game-icon/sports.png">
                    </div>
                </a>
                <a href="">
                    <div class="game-item lottery">
                        <div class="game-title">Lottery</div>
                        <img class="game-icon" src="@/assets/img/game-icon/lottery.png">
                    </div>
                </a>
                <a href="">
                    <div class="game-item slots">
                        <div class="game-title">Slots</div>
                        <img class="game-icon" src="@/assets/img/game-icon/slots.png">
                    </div>
                </a>
                <div class="provider-select">
                    <v-select :items="provider" label="Provider" solo hide-details flat></v-select>
                </div>
            </div>
            <div class="game-list">
                <div class="list-title">
                    <h2>Popular</h2>
                    <div class="list-search">
                        <v-text-field label="Search" v-model="searchGame" solo hide-details flat clearable append-icon="fas fa-search"></v-text-field>
                    </div>
                </div>
                <div class="list-grid">
                    <span v-for="(item, i) in filteredGame" :key="i">
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
                <div class="list-pagination">
                    <v-pagination v-model="page" :length="3" :total-visible="3" prev-icon="fas fa-caret-left" next-icon="fas fa-caret-right"></v-pagination>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Games',

        data() {
            return {
                page: 1,
                provider: ['Pragmatic Play', 'ISOFTBET', 'YGGDRASIL', 'Spadegaming', 'PLAYnGO', 'CQ9'],
                searchGame: '',
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
        computed: {
            filteredGame() {
                return this.gameList.filter(item => {
                    return item.gameTitle.toLowerCase().includes(this.searchGame.toLowerCase())
                })
            }
        }
    }
</script>