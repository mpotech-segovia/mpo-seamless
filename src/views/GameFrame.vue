<template>
    <div class="game-frame">
        <v-container>
            <fullscreen v-model="fullscreen">
                <div class="game-frame__container fullscreen-wrapper">
                    <div class="game-frame__header">
                        <h4>Death Benediction</h4>
                        <div class="header-settings">
                            <div class="settings-fullscreen">
                                <v-btn class="fullscreen" :class="{ active : fullscreen }" fab small depressed
                                    @click="toggleFullscreen">
                                    <v-icon small v-show="!fullscreen">fas fa-expand</v-icon>
                                    <v-icon small v-show="fullscreen">fas fa-compress</v-icon>
                                </v-btn>
                            </div>
                            <div class="settings-close">
                                <v-btn fab small depressed title="Close Game" to="/">
                                    <v-icon small>fas fa-times</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <div class="game-frame__iframe" v-show="!fullscreen">
                        <div class="iframe-loading">
                            <h2>Loading...</h2>
                        </div>
                        <!-- <GameBalloon></GameBalloon> -->
                    </div>
                    <div class="game-frame__iframe-active" v-show="fullscreen">
                        <!-- <GameBalloon></GameBalloon> -->
                    </div>
                </div>
            </fullscreen>
        </v-container>
    </div>
</template>

<script>
    import { component } from 'vue-fullscreen'
    // import GameBalloon from '@/components/GameBalloon.vue'

    export default {
        name: 'GameFrame',

        components: {
            fullscreen: component,
            // GameBalloon
        },
        data () {
            return {
                fullscreen: false,
            }
        },
        methods: {
            toggleFullscreen() {
                this.fullscreen = !this.fullscreen
            },

        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_game-frame.scss';
</style>