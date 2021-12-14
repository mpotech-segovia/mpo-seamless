<template>
    <div class="help">
        <div class="help__header">
            <h1>Hi, how can we help?</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend eu orci, sodales ut fringilla viverra.</h3>
        </div>
        <v-container>
            <div class="help__container">
                <v-tabs vertical hide-slider>
                    <div class="tab-holder">
                        <v-tab class="my-3">About</v-tab>
                        <v-tab class="my-3">How to Play</v-tab>
                        <v-tab class="my-3">Regulation</v-tab>
                        <v-tab class="my-3">General Info</v-tab>
                        <v-tab class="my-3">Game Type</v-tab>
                        <v-tab class="my-3">Promotion</v-tab>
                        <v-tab class="my-3">FAQ</v-tab>
                        <v-tab class="my-3">Info Khusus</v-tab>
                    </div>
                    <v-tab-item>
                        <div class="help-accordion">
                            <v-expansion-panels flat>
                                <v-expansion-panel v-for="(item, i) in FAQList" :key="i">
                                    <v-expansion-panel-header>
                                        {{ item.title }}
                                        <template v-slot:actions>
                                            <v-icon small>fas fa-caret-down</v-icon>
                                        </template>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        {{ item.content }}
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-tab-item>
                    <v-tab-item>
                        <h2>THIS IS HOW TO PLAY TAB</h2>
                    </v-tab-item>
                    <v-tab-item>
                        <h2>THIS IS REGULATION TAB</h2>
                    </v-tab-item>
                </v-tabs>
            </div>
            <Seo></Seo>
        </v-container>
    </div>
</template>

<script>
    import Seo from '@/components/home/Seo.vue'

    export default {
        name: 'Help',

        components: {
            Seo,
        },

        data() {
            return {
                FAQList: [{
                    title: 'Tentang Kami',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ac quam bibendum gravida amet. Velit dictumst neque a at gravida fermentum in. Nibh tortor blandit vitae ultrices. Blandit laoreet sed pretium ultrices quisque id. Quis morbi ac quam auctor eleifend amet habitasse. Varius praesent vitae cursus sed urna congue eu tristique nibh. Orci condimentum at amet pretium, viverra viverra erat varius semper.'
                },
                {
                    title: 'Tentang',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ac quam bibendum gravida amet. Velit dictumst neque a at gravida fermentum in. Nibh tortor blandit vitae ultrices. Blandit laoreet sed pretium ultrices quisque id. Quis morbi ac quam auctor eleifend amet habitasse. Varius praesent vitae cursus sed urna congue eu tristique nibh. Orci condimentum at amet pretium, viverra viverra erat varius semper.'
                },
                {
                    title: 'Kebijakn Privasi',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ac quam bibendum gravida amet. Velit dictumst neque a at gravida fermentum in. Nibh tortor blandit vitae ultrices. Blandit laoreet sed pretium ultrices quisque id. Quis morbi ac quam auctor eleifend amet habitasse. Varius praesent vitae cursus sed urna congue eu tristique nibh. Orci condimentum at amet pretium, viverra viverra erat varius semper.'
                },
                {
                    title: 'Syarat dan Ketentuan',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ac quam bibendum gravida amet. Velit dictumst neque a at gravida fermentum in. Nibh tortor blandit vitae ultrices. Blandit laoreet sed pretium ultrices quisque id. Quis morbi ac quam auctor eleifend amet habitasse. Varius praesent vitae cursus sed urna congue eu tristique nibh. Orci condimentum at amet pretium, viverra viverra erat varius semper.'
                },
                {
                    title: 'Cara Pembayaran',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ac quam bibendum gravida amet. Velit dictumst neque a at gravida fermentum in. Nibh tortor blandit vitae ultrices. Blandit laoreet sed pretium ultrices quisque id. Quis morbi ac quam auctor eleifend amet habitasse. Varius praesent vitae cursus sed urna congue eu tristique nibh. Orci condimentum at amet pretium, viverra viverra erat varius semper.'
                },
                {
                    title: 'Penolakan',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus ac quam bibendum gravida amet. Velit dictumst neque a at gravida fermentum in. Nibh tortor blandit vitae ultrices. Blandit laoreet sed pretium ultrices quisque id. Quis morbi ac quam auctor eleifend amet habitasse. Varius praesent vitae cursus sed urna congue eu tristique nibh. Orci condimentum at amet pretium, viverra viverra erat varius semper.'
                },],
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
            if (this.isMobile()) {
                this.$router.push('/help-mobile').catch(()=>{});
            }
            else {
                this.$router.push('/help').catch(()=>{});
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_help.scss';
</style>