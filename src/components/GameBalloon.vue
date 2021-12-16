<template>
    <div class="game-balloon" :class="{ minimized : minimized }" v-if="!closeGame">
        <div class="game-balloon__header" v-if="minimized">
            <h1>Death Benediction</h1>
            <v-btn fab depressed title="Close Game" @click="closeGame = !closeGame">
                <v-icon>fas fa-times</v-icon>
            </v-btn>
        </div>
        <a class="game-balloon__iframe" @click="maximizeGame">
            <div class="iframe-maximized" v-if="minimized">
                <v-icon x-large>fas fa-external-link-alt</v-icon>
            </div>
            <iframe src="https://cdn.aisgaming.com/DeathBenediction/main.html?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEYXRlVGltZSI6IjYzNzc1MjY4NjAzNTIzMDMzMiIsIlZQbGF5ZXJJZCI6IjI2MjU0MSIsIlZlbmRvcklkIjoiNiIsIlBsYXllcklkIjoibDI4emptemw4dTM5NiIsIm5iZiI6MTYzOTY0NjYwMywiZXhwIjoxNjM5NzU4MjAzLCJpYXQiOjE2Mzk2NDY2MDN9.ZhIeW0k18a5R_8U3nSbJx960y3mzPPWpGnGF6PpODS8" frameborder="0"></iframe>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'GameBalloon',

        components: {
            
        },

        data() {
            return {
                minimized: true,
                closeGame: false,
            }
        },

        methods: {
            maximizeGame() {
                this.$router.push('game-frame')
                this.minimized = false
            },
        },
    }
</script>

<style lang="scss">
    @import '@/assets/scss/layout/_game-balloon.scss';
</style>