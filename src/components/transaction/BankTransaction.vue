<template>
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
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.min.css'

    export default {
        name: 'BankSwiper',

        components: {
            Swiper,
            SwiperSlide,
        },

        data() {
            return {
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_bank-transaction.scss';
</style>