<template>
    <div class="provider-select">
        <div class="select-provider">
            <div class="select-provider__wrapper" @click="toggleProvider = !toggleProvider" :class="{ active: toggleProvider }">
                <div class="select-provider__placeholder">
                    <span>Choose Provider</span>
                    <div class="select-arrow__container">
                        <div class="select-provider__arrow">&nbsp;</div>
                    </div>
                </div>
            </div>
            <div class="select-provider__list-dropdown-container" v-if="toggleProvider">
                <div class="select-provider-list">
                    <v-btn small icon class="close-provider-list" @click="toggleProvider = false">
                        <v-icon x-small >fas fa-times</v-icon>
                    </v-btn>
                    <a class="list-item" :href="item.link" v-for="(item, i) in selectProvider" :key="i">
                        <div class="list-item-content">
                            <div class="provider-icon">
                                <img :src="item.imgSrc" alt="">
                            </div>
                            <div class="provider-name">{{ item.providerName }}</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProviderSelect',

    data() {
        return {
            toggleProvider: false,
            selectProvider: [{
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/isoftbet.svg',
                providerName: 'ISoftBet',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/isoftbet.svg',
                providerName: 'ISoftBet',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/playngo.svg',
                providerName: 'Play N GO',
                link: '',
            },
            {
                imgSrc: 'https://dwmu1hf7ovvid.cloudfront.net/logos/providers_small/color/yggdrasil.svg',
                providerName: 'Yggdrasil',
                link: '',
            },],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/components/provider-wrapper/_provider-select.scss";
</style>