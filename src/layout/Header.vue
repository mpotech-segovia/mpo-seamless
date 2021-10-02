<template>
    <div class="header">
        <v-container>
            <div class="header__cont">
                <v-row>
                    <v-col xl="2" lg="2">
                        <div class="header-date">{{ date }}</div>
                    </v-col>
                    <v-col xl="4" lg="5">
                        <div class="header-marquee">
                            <v-icon>fas fa-bell</v-icon>
                            <marquee>Selamat datang di MPOPLAY Bandar Judi Online Terpercaya!!</marquee>
                        </div>
                    </v-col>
                    <v-col xl="6" lg="5">
                        <div class="header-form">
                            <div class="form-group">
                                <v-text-field label="Username" rounded outlined></v-text-field>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
var moment = require('moment');

export default {
    name: 'Header',

    data() {
        return {
            date: null,
            // headerDate: 'Header Date',
        }
    },
    methods: {
        headerDate() {
        this.date = moment().format('ddd, MMMM D, h:mm:ss A');
        },
    },
    created() {
        this.date = moment().format('ddd, MMMM D, h:mm:ss A');
        setInterval(() => {
            this.headerDate()
        }, 1000);
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/layout/_header.scss";
</style>