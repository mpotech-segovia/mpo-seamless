<template>
    <div class="game-frame">
        <v-container>
            <div class="game-frame__container">
                <div class="game-frame__header">
                    <h4>Ambrosia</h4>
                    <div class="header-settings">
                        <div class="settings-fullscreen">
                            <v-btn class="fullscreen" :class="{ active : fullscreen }" fab small depressed @click="fullscreen = !fullscreen">
                                <v-icon small v-show="!fullscreen">fas fa-expand</v-icon>
                                <v-icon small v-show="fullscreen">fas fa-compress</v-icon>
                            </v-btn>
                            <!-- <v-btn class="compress" fab small depressed title="Exit Fullscreen" @click="fullscreen = !fullscreen" v-else><v-icon small>fas fa-compress</v-icon></v-btn> -->
                        </div>
                        <div class="settings-close">
                            <v-btn fab small depressed title="Close Game" to="/"><v-icon small>fas fa-times</v-icon></v-btn>
                        </div>
                    </div>
                </div>
                <div class="game-frame__iframe">
                    <iframe src="https://cdn.aisgaming.com/ConcubinesLust/main.html?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEYXRlVGltZSI6IjYzNzc0NjU2MjI4MjU1NzQ4OSIsIlZQbGF5ZXJJZCI6IjI2MjU0MSIsIlZlbmRvcklkIjoiNiIsIlBsYXllcklkIjoibDI4emptemw4dTM5NiIsIm5iZiI6MTYzOTAzNDIyOCwiZXhwIjoxNjM5MTQ1ODI4LCJpYXQiOjE2MzkwMzQyMjh9.WU_HginJ6d4TVBKwP1Ck_01HnUWb2HN0t0sVNgYHk3c" allowfullscreen="true" frameborder="0"></iframe>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'GameFrame',

        data() {
            return {
                fullscreen: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_game-frame.scss';
</style>