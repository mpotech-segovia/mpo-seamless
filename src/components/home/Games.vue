<template>
    <div class="home__games">
        <v-container>
            <div class="game-type">
                <a href="">
                    <div class="game-item popular">
                        <div class="game-title">Popular</div>
                        <img class="game-icon" src="@/assets/game-icon/popular.png">
                    </div>
                </a>
                <a href="">
                    <div class="game-item  casino">
                        <div class="game-title">Casino</div>
                        <img class="game-icon" src="@/assets/game-icon/casino.png">
                    </div>
                </a>
                <a href="">
                    <div class="game-item sportsbook">
                        <div class="game-title">Sportsbook</div>
                        <img class="game-icon" src="@/assets/game-icon/sports.png">
                    </div>
                </a>
                <a href="">
                    <div class="game-item lottery">
                        <div class="game-title">Lottery</div>
                        <img class="game-icon" src="@/assets/game-icon/lottery.png">
                    </div>
                </a>
                <a href="">
                    <div class="game-item slots">
                        <div class="game-title">Slots</div>
                        <img class="game-icon" src="@/assets/game-icon/slots.png">
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
                        <v-text-field label="Search" solo hide-details flat append-icon="fas fa-search"></v-text-field>
                    </div>
                </div>
                <div class="list-grid">
                    <!-- <v-row> -->
                        <!-- <v-col xl="2" lg="3" md="4" sm="6" v-for="(item, i) in gameList" :key="i"> -->
                            <div class="game-holder" v-for="(item, i) in gameList" :key="i">
                                <a :href="item.link">
                                    <div class="game-img">
                                        <img :src="item.imgSrc" alt="">
                                    </div>
                                    <h5 class="game-title">{{ item.gameTitle }}</h5>
                                </a>
                            </div>
                        <!-- </v-col> -->
                    <!-- </v-row> -->
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
                provider: ['Pragmatic Play', 'ISOFTBET', 'YGGDRASIL', 'Spadegaming', 'PLAYnGO', 'CQ9'],
                gameList: [{
                    imgSrc: require('@/assets/game-img/1.jpg'),
                    gameTitle: 'Phoenix Forge',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/game-img/2.jpg'),
                    gameTitle: 'Empty The Bank',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/game-img/1.jpg'),
                    gameTitle: 'Phoenix Forge',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/game-img/2.jpg'),
                    gameTitle: 'Empty The Bank',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/game-img/1.jpg'),
                    gameTitle: 'Phoenix Forge',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/game-img/2.jpg'),
                    gameTitle: 'Empty The Bank',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/game-img/1.jpg'),
                    gameTitle: 'Phoenix Forge',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/game-img/2.jpg'),
                    gameTitle: 'Empty The Bank',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/game-img/1.jpg'),
                    gameTitle: 'Phoenix Forge',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/game-img/2.jpg'),
                    gameTitle: 'Empty The Bank',
                    link: '#',
                },
                {
                    imgSrc: require('@/assets/game-img/2.jpg'),
                    gameTitle: 'Empty The Bank',
                    link: '#',
                },]
            }
        }
    }
</script>