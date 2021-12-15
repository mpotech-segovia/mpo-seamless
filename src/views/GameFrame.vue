<template>
    <div class="game-frame">
        <v-container>
            <fullscreen v-model="fullscreen">
                <div class="game-frame__container fullscreen-wrapper">
                    <div class="game-frame__header">
                        <h4>Ambrosia</h4>
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
                    <div class="game-frame__iframe-not-active" v-show="!fullscreen">
                        <iframe src="https://cf-mt-cdn2.relaxg.com/casino/launcher.html?partner=twin&gameid=artoandthesevendeadlyspinsmegaways&lang=en_US&partnerid=186&ticket=&moneymode=fun&homeurl=https://games-twincasino.igamingcloud.com/Redirect/Lobby&jurisdiction=MT&channel=web" frameborder="0"></iframe>
                    </div>
                    <div class="game-frame__iframe-active" v-show="fullscreen">
                        <iframe src="https://cf-mt-cdn2.relaxg.com/casino/launcher.html?partner=twin&gameid=artoandthesevendeadlyspinsmegaways&lang=en_US&partnerid=186&ticket=&moneymode=fun&homeurl=https://games-twincasino.igamingcloud.com/Redirect/Lobby&jurisdiction=MT&channel=web" frameborder="0"></iframe>
                    </div>
                </div>
            </fullscreen>
        </v-container>
    </div>
</template>

<script>
    import { component } from 'vue-fullscreen'

    export default {
        name: 'GameFrame',

        components: {
            fullscreen: component
        },
        data () {
            return {
                fullscreen: false,
            }
        },
        methods: {
            toggleFullscreen () {
                this.fullscreen = !this.fullscreen
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_game-frame.scss';
</style>