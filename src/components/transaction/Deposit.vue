<template>
    <div class="transaction__deposit">
        <v-row>
            <v-col xl="9" lg="8" md="8" sm="12">
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
                                    <v-file-input label="Choose File" solo rounded hide-details="auto" accept="image/png, image/jpeg" :clearable="false" v-model="proofPayment" flat :show-size="1000" prepend-inner-icon="fas fa-camera" prepend-icon="">
                                        <template v-slot:selection="{ text }">
                                            <v-chip color="primary" dark label>{{ text }}</v-chip>
                                        </template>
                                    </v-file-input>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1 d-flex align-center py-1">
                                    <label class="label-textfield" for="">Hanya format *.jpg, *.jpeg, dan *.png yang diperbolehkan, maksimal 1 MB</label>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="deposit-button">
                            <v-btn class="deposit" rounded block large>Deposit</v-btn>
                        </div>
                    </v-form>
                </div>
            </v-col>
            <v-col xl="3" lg="4" md="4" sm="12">
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
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
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
                },],
                bankSwiper: {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    freeMode: 'true',
                    mousewheel: 'true',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_deposit.scss';
</style>