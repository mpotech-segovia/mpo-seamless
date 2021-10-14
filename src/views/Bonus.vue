<template>
    <div class="bonus">
        <v-container>
            <v-tabs grow hide-slider v-model="bonusTab">
                <v-tab class="mr-3">
                    <v-icon class="mr-3">fas fa-exchange-alt</v-icon>Klaim Bonus
                </v-tab>
                <v-tab class="mx-3">
                    <v-icon class="mr-3">fas fa-percentage</v-icon>Promo Gabungan
                </v-tab>
                <v-tab class="ml-3">
                    <v-icon class="mr-3">fas fa-history</v-icon>History Klaim
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="bonusTab">
                <v-tab-item>
                    <ClaimBonus></ClaimBonus>
                </v-tab-item>
                <v-tab-item>
                    <h1>THIS IS PROMO GABUNGAN</h1>
                </v-tab-item>
                <v-tab-item>
                    <h1>THIS IS HISTORY KLAIM</h1>
                </v-tab-item>
            </v-tabs-items>
        </v-container>
        <Seo class="mt-5"></Seo>
    </div>
</template>

<script>
    import ClaimBonus from '@/components/bonus/ClaimBonus.vue'
    import Seo from '@/components/home/Seo.vue'

    export default {
        name: 'Bonus',

        components: {
            ClaimBonus,
            Seo,
        },

        data() {
            return {
                bonusTab: null,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_bonus.scss';
</style>

