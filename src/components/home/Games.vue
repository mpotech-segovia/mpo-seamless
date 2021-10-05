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
                <div class="list-type">
                    <h2>Popular</h2>
                    <div class="list-search">
                        <v-text-field label="Search" solo hide-details flat append-icon="fas fa-search"></v-text-field>
                    </div>
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
                provider: ['Pragmatic Play', 'ISOFTBET', 'YGGDRASIL', 'Spadegaming', 'PLAYnGO', 'CQ9']
            }
        }
    }
</script>