<template>
    <div class="help-mobile">
        <div class="help-mobile__header">
            <TitlePage titlePage="BANTUAN"></TitlePage>
        </div>
        <v-container>
            <div class="help-mobile__wrapper">
                <div class="help-accordion">
                    <div class="accordion-item">
                        <div class="accordion-header" @click="about = !about">
                            <h4>About</h4>
                            <v-icon x-small v-if="!about">fas fa-caret-down</v-icon>
                            <v-icon x-small v-if="about">fas fa-caret-up</v-icon>
                        </div>
                        <div class="accordion-body" v-if="about">
                            <v-expansion-panels flat>
                                <v-expansion-panel v-for="(item, i) in AboutList" :key="i">
                                    <v-expansion-panel-header>
                                        {{ item.title }}
                                        <template v-slot:actions>
                                            <v-icon x-small>fas fa-caret-down</v-icon>
                                        </template>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        {{ item.content }}
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <h4>General Info</h4>
                            <v-icon small>fas fa-caret-down</v-icon>
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    import TitlePage from '@/components/TitlePage.vue'

    export default {
        name: 'HelpMobile',

        components: {
            TitlePage,
        },

        data() {
            return {
                about: false,
                AboutList: [{
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
    @import '@/assets/scss/pages/mobile/_help-mobile.scss';
</style>