<template>
    <div class="home__service">
        <v-container>
            <div class="service-holder">
                <v-row>
                    <v-col xl="4" lg="4" md="6" sm="6" cols="12">
                        <div class="service-item service-meter">
                            <div class="service-header">
                                <img src="@/assets/img/service-icon/service-meter.svg" alt="">
                                <h2>SERVICE METER</h2>
                            </div>
                            <div class="meter-item">
                                <div class="meter-content">
                                    <div class="meter-title">
                                        <h3>Deposit</h3>
                                        <h5>Waktu</h5>
                                    </div>
                                    <div class="meter-time">
                                        <h4>2</h4>
                                        <h5>Menit</h5>
                                    </div>
                                </div>
                                <div class="meter-progress">
                                    <v-progress-linear rounded height="15" value="20" class="mb-7"></v-progress-linear>
                                </div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-content">
                                    <div class="meter-title">
                                        <h3>Withdraw</h3>
                                        <h5>Waktu</h5>
                                    </div>
                                    <div class="meter-time">
                                        <h4>8</h4>
                                        <h5>Menit</h5>
                                    </div>
                                </div>
                                <div class="meter-progress">
                                    <v-progress-linear rounded height="15" value="80"></v-progress-linear>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col xl="4" lg="4" md="6" sm="6" cols="12">
                        <div class="service-item payment">
                            <div class="service-header">
                                <img src="@/assets/img/service-icon/payment.svg" alt="">
                                <h2>PAYMENT METHOD</h2>
                            </div>
                            <swiper class="swiper payment-swiper" :options="paymentSwiperOption">
                                <swiper-slide class="d-flex align-center justify-center" v-for="(item, i) in paymentList" :key="i">
                                    <v-chip label small :class="item.status">Online</v-chip>
                                    <img class="mt-2" :src="item.imgSrc" alt="">
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                            </swiper>
                        </div>
                    </v-col>
                    <v-col xl="4" lg="4" md="12" sm="12" cols="12">
                        <div class="service-item help-support">
                            <div class="service-header">
                                <img src="@/assets/img/service-icon/help-support.svg" alt="">
                                <h2>HELP & SUPPORT</h2>
                            </div>
                            <a :href="item.link" v-for="(item, i) in helpSupport" :key="i">
                                <div class="support-item">
                                    <img :src="item.imgSrc" alt="">
                                    <h4>{{ item.title }}</h4>
                                </div>
                            </a>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.min.css'

    export default {
		name: 'Service',

        components: {
            Swiper,
            SwiperSlide,
        },

		data() {
			return {
                paymentList: [{
                    imgSrc: require('@/assets/img/payment/bca.png'),
                    status: 'online',
                },
                {
                    imgSrc: require('@/assets/img/payment/bni.png'),
                    status: 'online',
                },
                {
                    imgSrc: require('@/assets/img/payment/mandiri.png'),
                    status: 'online',
                },
                {
                    imgSrc: require('@/assets/img/payment/bri.png'),
                    status: 'online',
                },
                {
                    imgSrc: require('@/assets/img/payment/dana.png'),
                    status: 'online',
                },
                {
                    imgSrc: require('@/assets/img/payment/ovo.png'),
                    status: 'offline',
                },
                {
                    imgSrc: require('@/assets/img/payment/xl.png'),
                    status: 'online',
                },
                {
                    imgSrc: require('@/assets/img/payment/telkomsel.png'),
                    status: 'online',
                },],
                helpSupport: [{
                    imgSrc: require('@/assets/img/service-icon/contact.svg'),
                    title: '085860008528',
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/service-icon/line.svg'),
                    title: '@mpoplay',
                    link: '',
                },
                {
                    imgSrc: require('@/assets/img/service-icon/messenger.svg'),
                    title: '081266608528',
                    link: '',
                },],
				paymentSwiperOption: {
                    slidesPerView: 3,
                    slidesPerColumn: 3,
                    spaceBetween: 15,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        1920: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                    }
                }
			}
		},
	}
</script>