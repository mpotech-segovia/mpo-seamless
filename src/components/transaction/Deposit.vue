<template>
    <div class="transaction__deposit">
        <v-row>
            <v-col xl="9" lg="8" md="8" sm="12" cols="12">
                <div class="deposit-form">
                    <h2 class="form-title">Formulir Deposit</h2>
                    <v-form class="form-deposit">
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Pilih Bank Anda</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1">
                                    <v-select :items="bank" label="Bank" solo hide-details="auto" flat rounded>
                                    </v-select>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1">
                                    <div class="label-textfield font-weight-medium" for="">Nama Pemilik rekening</div>
                                    <div class="label-textfield" for="">2891 7431 02</div>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Pilih Bank Tujuan</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1">
                                    <v-select :items="bank" label="Bank" solo hide-details="auto" flat rounded>
                                    </v-select>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group show-bank">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12"></v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1">
                                    <div class="bank-item">
                                        <div class="bank-img">
                                            <img src="@/assets/img/payment/bca.png" alt="">
                                        </div>
                                        <div class="bank-account">
                                            <ul>
                                                <li>Nama Tujuan Akun : JACK THE RIPPER</li>
                                                <li>Nomor Akun Tujuan : 082123872048</li>
                                                <li>Minimum Deposit : IDR 10</li>
                                                <li>Maximum Deposit : IDR 20,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Dompet Tujuan</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1">
                                    <v-select :items="wallet" label="Dompet Tujuan" solo hide-details="auto" flat
                                        rounded></v-select>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Jumlah Deposit</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1 deposit-conversion">
                                    <v-text-field label="0.00" type="number" solo rounded hide-details="auto" flat
                                        required></v-text-field>
                                    <span class="mx-4">
                                        <v-icon small>fas fa-equals</v-icon>
                                    </span>
                                    <v-text-field label="RP" type="number" solo rounded hide-details="auto" flat
                                        required></v-text-field>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1">
                                    <label class="label-textfield" for="">Contoh: setoran deposit 50.000, tulis Rp 50 (
                                        3 digit dihilangkan )</label>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Serial Number</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1 d-flex align-center py-1">
                                    <v-text-field label="Serial Number" type="number" solo rounded hide-details="auto"
                                        flat required></v-text-field>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1 d-flex align-center py-1">
                                    <label class="label-textfield" for="">Maksimal 32 Karakter</label>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Bukti Pembayaran</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1 d-flex align-center py-1">
                                    <v-file-input label="Choose File" solo rounded hide-details="auto"
                                        accept="image/png, image/jpeg" :clearable="false" v-model="proofPayment" flat
                                        :show-size="1000" prepend-inner-icon="fas fa-camera" prepend-icon="">
                                        <template v-slot:selection="{ text }">
                                            <v-chip color="primary" dark label>{{ text }}</v-chip>
                                        </template>
                                    </v-file-input>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1 d-flex align-center py-1">
                                    <label class="label-textfield" for="">Hanya format *.jpg, *.jpeg, dan *.png yang
                                        diperbolehkan, maksimal 1 MB</label>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="deposit-button">
                            <v-btn class="deposit" rounded block large>Deposit</v-btn>
                        </div>
                    </v-form>
                </div>
            </v-col>
            <v-col xl="3" lg="4" md="4" sm="12" cols="12">
                <swiper class="swiper bank-swiper" :options="bankSwiper">
                    <swiper-slide>
                        <div class="swiper-item" v-for="(item, i) in bankList" :key="i">
                            <v-chip label small class="status" :class="item.status">{{ item.status }}</v-chip>
                            <div class="bank-info">
                                <div class="bank-img">
                                    <img :src="item.imgSrc" alt="">
                                </div>
                                <div class="bank-content">
                                    <h3 class="name">{{ item.bankName }}</h3>
                                    <h6 class="minimum">{{ item.minimum }}</h6>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </v-col>
        </v-row>
        <div class="deposit-info mt-12">
            <div class="info-header">
                <v-icon>fas fa-info-circle</v-icon>
                <h3>Informasi</h3>
            </div>
            <div class="info-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sollicitudin mauris, pulvinar
                integer. Arcu duis vel dolor ipsum, quam lectus amet, ipsum rhoncus. Egestas nibh fringilla amet
                maecenas. Id eu vulputate egestas diam, sed. Nunc elit nibh ultricies laoreet aenean odio posuere
                egestas nibh. Scelerisque ut tincidunt tincidunt sed. Enim enim pellentesque etiam maecenas condimentum
                adipiscing duis curabitur. Euismod phasellus quam amet eu aliquam arcu malesuada mauris scelerisque.
                Tortor ac nulla malesuada elementum ut. Mauris, eu nullam risus, tellus amet ornare. Scelerisque et
                potenti quis ut sollicitudin purus. Dapibus lectus mus rhoncus a amet, odio faucibus elementum sit.
                Vitae varius metus eu cras adipiscing sem. Nec augue augue dignissim non, vel nunc, sed risus. Commodo
                molestie pretium scelerisque tempus dignissim porttitor. Lectus ut aliquet morbi diam. Et diam neque
                gravida viverra aliquet cras fringilla. Scelerisque velit maecenas vel non ac egestas viverra tortor
                erat. Arcu, ullamcorper nullam elementum viverra.
            </div>
        </div>
        <div class="deposit-history mt-12">
            <div class="history-header">
                <h3>Riwayat Deposit</h3>
                <v-btn class="delete" rounded>
                    <v-icon small class="mr-2">fas fa-trash</v-icon> Delete Selected
                </v-btn>
            </div>
            <v-data-table :headers="headers" :items="desserts" :items-per-page="5" mobile-breakpoint="0"></v-data-table>
        </div>
    </div>
</template>

<script>
    import {
        Swiper,
        SwiperSlide
    } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.min.css'

    export default {
        name: 'Deposit',

        components: {
            Swiper,
            SwiperSlide,
        },

        data() {
            return {
                bank: ['BCA', 'BRI', 'BNI', 'Mandiri', 'Bank Lain', ],
                wallet: ['Dompet Utama', 'Dompet Porker'],
                proofPayment: [],
                bankList: [{
                        imgSrc: require('@/assets/img/payment/bca.png'),
                        bankName: 'BCA',
                        minimum: 'Deposit Min = 20, Max = 9999',
                        status: 'online',
                    },
                    {
                        imgSrc: require('@/assets/img/payment/bni.png'),
                        bankName: 'BNI',
                        minimum: 'Deposit Min = 20, Max = 9999',
                        status: 'online',
                    },
                    {
                        imgSrc: require('@/assets/img/payment/mandiri.png'),
                        bankName: 'MANDIRI',
                        minimum: 'Deposit Min = 20, Max = 9999',
                        status: 'online',
                    },
                    {
                        imgSrc: require('@/assets/img/payment/bri.png'),
                        bankName: 'BRI',
                        minimum: 'Deposit Min = 20, Max = 9999',
                        status: 'online',
                    },
                    {
                        imgSrc: require('@/assets/img/payment/dana.png'),
                        bankName: 'DANA',
                        minimum: 'Deposit Min = 20, Max = 9999',
                        status: 'online',
                    },
                    {
                        imgSrc: require('@/assets/img/payment/ovo.png'),
                        bankName: 'OVO PAY',
                        minimum: 'Deposit Min = 20, Max = 9999',
                        status: 'offline',
                    },
                    {
                        imgSrc: require('@/assets/img/payment/xl.png'),
                        bankName: 'XL',
                        minimum: 'Deposit Min = 20, Max = 9999',
                        status: 'online',
                    },
                    {
                        imgSrc: require('@/assets/img/payment/telkomsel.png'),
                        bankName: 'TELKOMSEL',
                        minimum: 'Deposit Min = 20, Max = 9999',
                        status: 'online',
                    },
                ],
                bankSwiper: {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    mousewheel: 'true',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                },
                headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
                ],
                desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%',
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%',
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%',
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%',
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%',
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%',
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%',
                },
                {
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%',
                },
                {
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%',
                },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_deposit.scss';
</style>