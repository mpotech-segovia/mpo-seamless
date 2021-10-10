<template>
    <div class="lottery">
        <v-container>
            <div class="lottery__header">
                <h1>Lottery</h1>
            </div>
            <div class="lottery__list">
                <v-row>
                    <v-col xl="2" lg="3" md="3" sm="4" cols="6" v-for="(item, i) in lotteryList" :key="i">
                        <a :href="item.link">
                            <div class="lottery-item">
                                <div class="lottery-flag">
                                    <img :src="item.imgSrc" alt="">
                                </div>
                                <div class="lottery-content">
                                    <h3 class="country">{{ item.country }}</h3>
                                    <h5 class="date">{{ item.date }}</h5>
                                    <h1 class="result">{{ item.result }}</h1>
                                </div>
                            </div>
                        </a>
                    </v-col>
                </v-row>
            </div>
        </v-container>
        <Seo class="mt-5"></Seo>
    </div>
</template>

<script>
import Seo from '@/components/home/Seo.vue'

export default {
    name: 'Lottery',

    components: {
        Seo,
    },

    data() {
        return {
            lotteryList: [{
                imgSrc: require('@/assets/img/flags/1.jpg'),
                country: 'Tokyo',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/2.jpg'),
                country: 'Seoul',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/3.jpg'),
                country: 'Singapore',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/4.jpg'),
                country: 'Manila',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/5.jpg'),
                country: 'Barcelona',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/6.jpg'),
                country: 'Hongkong',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/7.jpg'),
                country: 'Bangkok',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/8.jpg'),
                country: 'Berlin',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/9.jpg'),
                country: 'Milan',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/10.jpg'),
                country: 'Beijing',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/11.jpg'),
                country: 'Singapore45',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/12.jpg'),
                country: 'Timor',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/13.jpg'),
                country: 'Bullseye',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/14.jpg'),
                country: 'Hongkong49',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/15.jpg'),
                country: 'Hongkong47',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/16.jpg'),
                country: 'Sydneypools',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/17.jpg'),
                country: 'Magnum4D',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/18.jpg'),
                country: 'PCSO',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/19.png'),
                country: 'Amsterdam',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/20.png'),
                country: '4DRome',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },
            {
                imgSrc: require('@/assets/img/flags/21.png'),
                country: 'Siberiapools',
                date: 'Rabu, 2021-09-22',
                result: '1239',
                link: '',
            },],
        }
    }
}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/pages/_lottery.scss';
</style>