<template>
    <div class="home__slider-provider mb-3">
        <v-container>
            <v-row>
                <v-col xl="4" lg="5">
                    <div class="provider-holder">
                        <div class="provider-top">
                            <div class="top-title">
                                <div class="icon">
                                    <img src="@/assets/img/navbar-icon/sportsbook.svg" alt="">
                                </div>
                                <h5>SPORTSBOOK</h5>
                            </div>
                            <div class="top-action">
                                <v-btn class="see-more" rounded x-small>SEE MORE</v-btn>
                            </div>
                            <div class="navigation navigation-prev navigation-prev--sportsbook" slot="button-prev">
                                <v-icon small>fas fa-angle-left</v-icon>
                            </div>
                            <div class="navigation navigation-next navigation-next--sportsbook" slot="button-next">
                                <v-icon small>fas fa-angle-right</v-icon>
                            </div>
                        </div>
                        <div class="provider-slide">
                            <swiper class="swiper sportsbook-swiper" :options="sportsbookSwiperOption">
                                <swiper-slide v-for="(item, i) in sportsbookSwiper" :key="i">
                                    <div class="slide-item">
                                        <a :href="item.link">
                                            <div class="slide-img">
                                                <div class="skeleton-loading" v-show="skeletonLoading"></div>
                                                <img :src="item.providerImg" class="provider-img" alt="">
                                                <div class="provider-logo">
                                                    <img :src="item.providerLogo" alt="">
                                                </div>
                                                <div class="provider-status new">
                                                    <v-icon x-small>fas fa-fire</v-icon>
                                                    <h6>New</h6>
                                                </div>
                                                <div class="provider-status promo">
                                                    <v-icon x-small>fas fa-tag</v-icon>
                                                    <h6>Promo</h6>
                                                </div>
                                            </div>
                                            <h5 class="slide-title">{{ item.providerTitle }}</h5>
                                        </a>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </v-col>
                <v-col xl="8" lg="7">
                    <div class="provider-holder">
                        <div class="provider-top">
                            <div class="top-title">
                                <div class="icon">
                                    <img src="@/assets/img/navbar-icon/casino.svg" alt="">
                                </div>
                                <h5>LIVE CASINO</h5>
                            </div>
                            <div class="top-action">
                                <v-btn class="see-more" rounded x-small>SEE MORE</v-btn>
                            </div>
                            <div class="navigation navigation-prev navigation-prev--casino" slot="button-prev">
                                <v-icon small>fas fa-angle-left</v-icon>
                            </div>
                            <div class="navigation navigation-next navigation-next--casino" slot="button-next">
                                <v-icon small>fas fa-angle-right</v-icon>
                            </div>
                        </div>
                        <div class="provider-slide">
                            <swiper class="swiper casino-swiper" :options="casinoSwiperOption">
                                <swiper-slide v-for="(item, i) in casinoSwiper" :key="i">
                                    <div class="slide-item">
                                        <a :href="item.link">
                                            <div class="slide-img">
                                                <div class="skeleton-loading" v-show="skeletonLoading"></div>
                                                <img :src="item.providerImg" class="provider-img" alt="">
                                                <div class="provider-logo">
                                                    <img :src="item.providerLogo" alt="">
                                                </div>
                                                <div class="provider-status new">
                                                    <v-icon x-small>fas fa-fire</v-icon>
                                                    <h6>New</h6>
                                                </div>
                                                <div class="provider-status promo">
                                                    <v-icon x-small>fas fa-tag</v-icon>
                                                    <h6>Promo</h6>
                                                </div>
                                            </div>
                                            <h5 class="slide-title">{{ item.providerTitle }}</h5>
                                        </a>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col xl="6" lg="6">
                    <div class="provider-holder">
                        <div class="provider-top">
                            <div class="top-title">
                                <div class="icon">
                                    <img src="@/assets/img/navbar-icon/fishing.svg" alt="">
                                </div>
                                <h5>FISHING</h5>
                            </div>
                            <div class="top-action">
                                <v-btn class="see-more" rounded x-small>SEE MORE</v-btn>
                            </div>
                            <div class="navigation navigation-prev navigation-prev--fishing" slot="button-prev">
                                <v-icon small>fas fa-angle-left</v-icon>
                            </div>
                            <div class="navigation navigation-next navigation-next--fishing" slot="button-next">
                                <v-icon small>fas fa-angle-right</v-icon>
                            </div>
                        </div>
                        <div class="provider-slide">
                            <swiper class="swiper fishing-swiper" :options="fishingSwiperOption">
                                <swiper-slide v-for="(item, i) in fishingSwiper" :key="i">
                                    <div class="slide-item">
                                        <a :href="item.link">
                                            <div class="slide-img">
                                                <div class="skeleton-loading" v-show="skeletonLoading"></div>
                                                <img :src="item.providerImg" class="provider-img" alt="">
                                                <div class="provider-logo">
                                                    <img :src="item.providerLogo" alt="">
                                                </div>
                                                <div class="provider-status new">
                                                    <v-icon x-small>fas fa-fire</v-icon>
                                                    <h6>New</h6>
                                                </div>
                                            </div>
                                            <h5 class="slide-title">{{ item.providerTitle }}</h5>
                                        </a>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </v-col>
                <v-col xl="3" lg="3">
                    <div class="provider-holder">
                        <div class="provider-top">
                            <div class="top-title">
                                <div class="icon">
                                    <img src="@/assets/img/navbar-icon/poker.svg" alt="">
                                </div>
                                <h5>POKER</h5>
                            </div>
                            <div class="top-action">
                                <v-btn class="see-more" rounded x-small>SEE MORE</v-btn>
                            </div>
                            <div class="navigation navigation-prev navigation-prev--poker" slot="button-prev">
                                <v-icon small>fas fa-angle-left</v-icon>
                            </div>
                            <div class="navigation navigation-next navigation-next--poker" slot="button-next">
                                <v-icon small>fas fa-angle-right</v-icon>
                            </div>
                        </div>
                        <div class="provider-slide">
                            <swiper class="swiper poker-swiper" :options="pokerSwiperOption">
                                <swiper-slide v-for="(item, i) in pokerSwiper" :key="i">
                                    <div class="slide-item">
                                        <a :href="item.link">
                                            <div class="slide-img">
                                                <div class="skeleton-loading" v-show="skeletonLoading"></div>
                                                <img :src="item.providerImg" class="provider-img" alt="">
                                                <div class="provider-logo">
                                                    <img :src="item.providerLogo" alt="">
                                                </div>
                                                <div class="provider-status new">
                                                    <v-icon x-small>fas fa-fire</v-icon>
                                                    <h6>New</h6>
                                                </div>
                                            </div>
                                            <h5 class="slide-title">{{ item.providerTitle }}</h5>
                                        </a>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </v-col>
                <v-col xl="3" lg="3">
                    <div class="provider-holder">
                        <div class="provider-top">
                            <div class="top-title">
                                <div class="icon">
                                    <img src="@/assets/img/navbar-icon/lottery.svg" alt="">
                                </div>
                                <h5>Lottery</h5>
                            </div>
                            <div class="top-action">
                                <v-btn class="see-more" rounded x-small>SEE MORE</v-btn>
                            </div>
                            <div class="navigation navigation-prev navigation-prev--lottery" slot="button-prev">
                                <v-icon small>fas fa-angle-left</v-icon>
                            </div>
                            <div class="navigation navigation-next navigation-next--lottery" slot="button-next">
                                <v-icon small>fas fa-angle-right</v-icon>
                            </div>
                        </div>
                        <div class="provider-slide">
                            <swiper class="swiper lottery-swiper" :options="lotterySwiperOption">
                                <swiper-slide v-for="(item, i) in lotterySwiper" :key="i">
                                    <div class="slide-item">
                                        <a :href="item.link">
                                            <div class="slide-img">
                                                <div class="skeleton-loading" v-show="skeletonLoading"></div>
                                                <img :src="item.providerImg" class="provider-img" alt="">
                                                <div class="provider-logo">
                                                    <img :src="item.providerLogo" alt="">
                                                </div>
                                                <div class="provider-status new">
                                                    <v-icon x-small>fas fa-fire</v-icon>
                                                    <h6>New</h6>
                                                </div>
                                            </div>
                                            <h5 class="slide-title">{{ item.providerTitle }}</h5>
                                        </a>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.min.css'

    export default {
        name: 'ProviderSlider',

        components: {
            Swiper,
			SwiperSlide,
        },

        data() {
			return {
                skeletonLoading: true,
				sportsbookSwiper: [{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/sports-1.png'),
					providerTitle: 'AFB1188',
					link: '#',
				},
				{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/sports-2.png'),
					providerTitle: 'SBOBET',
					link: '#',
				},
				{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/sports-1.png'),
					providerTitle: 'AFB1188',
					link: '#',
				},],
                casinoSwiper: [{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/casino-1.png'),
					providerTitle: 'GD 88',
					link: '#',
				},
				{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/casino-2.png'),
					providerTitle: 'WM Casino',
					link: '#',
				},
				{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/casino-3.png'),
					providerTitle: 'Pragmatic LC',
					link: '#',
				},
                {
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/casino-4.png'),
					providerTitle: 'OG Casino',
					link: '#',
				},
                {
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/casino-1.png'),
					providerTitle: 'GD 88',
					link: '#',
				},],
                fishingSwiper: [{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/fishing-1.png'),
					providerTitle: 'GD 88',
					link: '#',
				},
				{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/fishing-2.png'),
					providerTitle: 'WM Casino',
					link: '#',
				},
				{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/fishing-3.png'),
					providerTitle: 'Pragmatic LC',
					link: '#',
				},
                {
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/fishing-1.png'),
					providerTitle: 'OG Casino',
					link: '#',
				},],
                pokerSwiper: [{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/poker-1.png'),
					providerTitle: 'WE1Poker',
					link: '#',
				},],
                lotterySwiper: [{
					providerLogo: require('@/assets/img/provider-img/afb_1.png'),
					providerImg: require('@/assets/img/provider-slide/lottery-1.png'),
					providerTitle: 'MPO4D',
					link: '#',
				},],
                sportsbookSwiperOption: {
					slidesPerView: 2,
					spaceBetween: 20,
                    navigation: {
                        nextEl: ".navigation-next--sportsbook",
                        prevEl: ".navigation-prev--sportsbook",
                    },
				},
				casinoSwiperOption: {
					slidesPerView: 3,
					spaceBetween: 20,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
                    breakpoints: {
                        1601: {
                            slidesPerView: 4,
                        },
                    },
                    navigation: {
                        nextEl: ".navigation-next--casino",
                        prevEl: ".navigation-prev--casino",
                    },
				},
                fishingSwiperOption: {
					slidesPerView: 2,
					spaceBetween: 20,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},

                    breakpoints: {
                        1601: {
                            slidesPerView: 3,
                        },
                    },
                    navigation: {
                        nextEl: ".navigation-next--fishing",
                        prevEl: ".navigation-prev--fishing",
                    },
				},
                pokerSwiperOption: {
					slidesPerView: 1,
					spaceBetween: 20,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
                    navigation: {
                        nextEl: ".navigation-next--poker",
                        prevEl: ".navigation-prev--poker",
                    },
				},
                lotterySwiperOption: {
					slidesPerView: 1,
					spaceBetween: 20,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
                    navigation: {
                        nextEl: ".navigation-next--lottery",
                        prevEl: ".navigation-prev--lottery",
                    },
				},
			}
		},

        mounted() {
            setTimeout(() => {
                this.skeletonLoadingState(false)
            }, 3000);
        },

        methods: {
            skeletonLoadingState (value) {
                this.skeletonLoading = value
            }
        },
    }
</script>