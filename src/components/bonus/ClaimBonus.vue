<template>
    <div class="bonus__claim">
        <div class="claim-info">
            <p>
                CATATAN: promosi ini tidak bisa dikombinasikan dengan promosi lainnya dan promosi ini bisa kedaluarsa. <br>
                Cek progress promosi dan klaim tidak tersedia dari jam 12 siang - 2 sore! <br>
                Bonus is being cached for 30 minutes from 30-Sep-2021 11:30:51 AM <br>
            </p>
        </div>
        <div class="claim-list">
            <v-row>
                <v-col xl="3" lg="4" md="4" sm="6" cols="12">
                    <div class="claim-item">
                        <h3 class="claim-title">Bonus Harian</h3>
                        <div class="claim-content" v-if="claimDailyBonus">
                            <swiper class="swiper claim-swiper" :options="claimSwiperOption">
                                <swiper-slide class="d-flex align-center justify-center" v-for="(item, i) in claimSwiperList" :key="i">
                                    <img :src="item.imgSrc" alt="">
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                            </swiper>
                            <div class="claim-button">
                                <v-btn class="information" rounded>Info</v-btn>
                                <v-btn class="claim" rounded @click="claimDailyBonus = !claimDailyBonus">Claim</v-btn>
                            </div>
                        </div>
                        <div class="claim-progress d-flex justify-center align-center" v-else>
                            <v-progress-circular :rotate="-90" :size="170" :width="15" value="83">83%</v-progress-circular>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.min.css'
    
    export default {
        name: 'ClaimBonus',
        
        components: {
            Swiper,
            SwiperSlide,
        },

        data() {
            return {
                claimDailyBonus: true,
                claimSwiperList: [{
                    imgSrc: require('@/assets/img/provider/pp.png'),
                },
                {
                    imgSrc: require('@/assets/img/provider/isb.png'),
                },
                {
                    imgSrc: require('@/assets/img/provider/ygg.png'),
                },
                {
                    imgSrc: require('@/assets/img/provider/spade.png'),
                },
                {
                    imgSrc: require('@/assets/img/provider/png.png'),
                },
                {
                    imgSrc: require('@/assets/img/provider/cq9.png'),
                },],
                claimSwiperOption: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    spaceBetween: 10,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        1920: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '@/assets/scss/pages/_claim-bonus.scss';
</style>