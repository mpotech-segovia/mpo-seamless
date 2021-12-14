<template>
    <div class="provider-list-wrapper">
        <div class="provider-list-icon">
            <div class="provider-item" v-for="(item, i) in providerList" :key="i">
                <a :href="item.link">
                    <div class="provider-icon">
                        <img :src="item.imgSrc" alt="">
                    </div>
                    <h6>{{ item.name }}</h6>
                </a>
            </div>
        </div>
        <div class="provider-select-wrapper">
            <ProviderSelect></ProviderSelect>
        </div>
    </div>
</template>

<script>
    import ProviderSelect from '@/components/provider-wrapper/ProviderSelect.vue'

    export default {
        name: 'ProviderListWrapper',

        components: {
            ProviderSelect
        },

        data() {
            return {
                providerList: [{
                    imgSrc: require('@/assets/img/navbar-icon/popular.svg'),
                    name: 'Popular',
                    link: '#/popular-mobile',
                },
                {
                    imgSrc: require('@/assets/img/navbar-icon/slots.svg'),
                    name: 'Slots',
                    link: '#/provider-mobile',
                },
                {
                    imgSrc: require('@/assets/img/navbar-icon/sportsbook.svg'),
                    name: 'Sports',
                    link: '#/provider-mobile',
                },
                {
                    imgSrc: require('@/assets/img/navbar-icon/fishing.svg'),
                    name: 'Fishing',
                    link: '#/provider-mobile',
                },
                {
                    imgSrc: require('@/assets/img/navbar-icon/game-lain.svg'),
                    name: 'Others',
                    link: '#/provider-mobile',
                },
                {
                    imgSrc: require('@/assets/img/navbar-icon/casino.svg'),
                    name: 'Casino',
                    link: '#/provider-mobile',
                },
                {
                    imgSrc: require('@/assets/img/navbar-icon/lottery.svg'),
                    name: 'Lottery',
                    link: '#/lottery',
                },
                {
                    imgSrc: require('@/assets/img/navbar-icon/poker.svg'),
                    name: 'Poker',
                    link: '#/provider-mobile',
                },],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/components/provider-wrapper/_provider-list-wrapper.scss";
</style>