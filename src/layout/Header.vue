<template>
    <div class="header">
        <v-container>
            <div class="header__cont">
                <v-row>
                    <v-col xl="2" lg="2" align-self="center">
                        <div class="header-date">{{ date }}</div>
                    </v-col>
                    <v-col xl="5" lg="4" align-self="center">
                        <div class="header-marquee">
                            <v-icon>fas fa-bell</v-icon>
                            <marquee>Selamat datang di MPOPLAY Bandar Judi Online Terpercaya!!</marquee>
                        </div>
                    </v-col>
                    <v-col xl="5" lg="6">
                        <div class="header-form">
                            <div class="form-group">
                                <v-text-field class="mr-2" placeholder="Username" type="text" rounded hide-details dense></v-text-field>
                                <v-text-field placeholder="Password" type="password" rounded hide-details dense></v-text-field>
                            </div>
                            <div class="form-button">
                                <v-btn class="login mr-2" rounded small>Masuk</v-btn>
                                <v-btn class="register" rounded small>Daftar</v-btn>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <div class="header-forgot"><a href="">Forgot Password?</a></div>
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