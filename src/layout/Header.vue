<template>
    <div class="header">
        <div class="header__top">
            <v-container>
                <div class="header__cont">
                    <v-row>
                        <v-col class="py-3" xl="2" lg="2" md="3" cols="6" align-self="center">
                            <div class="header-date">{{ date }}</div>
                        </v-col>
                        <v-col class="py-3" xl="5" lg="4" md="9" cols="6" align-self="center">
                            <div class="header-marquee">
                                <v-icon>fas fa-bell</v-icon>
                                <marquee>Selamat datang di MPOPLAY Bandar Judi Online Terpercaya!!</marquee>
                            </div>
                        </v-col>
                        <v-col class="py-3" xl="5" lg="6" md="12" cols="12">
                            <div class="header-form" v-if="guest">
                                <div class="form-group">
                                    <v-text-field class="mr-2" label="Username" type="text" solo rounded hide-details dense flat></v-text-field>
                                    <v-text-field label="Password" type="password" solo rounded hide-details dense flat></v-text-field>
                                </div>
                                <div class="form-button">
                                    <v-btn class="login mr-2" rounded small @click="guest = !guest">Masuk</v-btn>
                                    <v-btn class="register" rounded small to="/register">Daftar</v-btn>
                                </div>
                            </div>
                            <div class="header-form" v-else>
                                <div class="form-button">
                                    <v-btn class="memo mr-2" rounded small to="/memo">Memo</v-btn>
                                    <v-btn class="profil mr-2" rounded small>Profil</v-btn>
                                    <v-btn class="transaksi mr-2" rounded small to="/transaction">Transaksi</v-btn>
                                    <v-btn class="bonus mr-2" rounded small to="/bonus">Bonus</v-btn>
                                    <v-btn class="logout" rounded small @click="guest = !guest">Logout</v-btn>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <div class="header-forgot" v-if="guest"><a href="">Forgot Password?</a></div>
                </div>
            </v-container>
        </div>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Navbar from '@/layout/Navbar.vue';

var moment = require('moment');

export default {
    name: 'Header',

    components: {
        Navbar,
    },

    data() {
        return {
            guest: true,
            date: null,
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