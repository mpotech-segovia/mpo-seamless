<template>
    <div class="bonus">
        <v-container>
            <div class="tabs-button">
                <div class="tabs-button-item" :class="{ active : claimTabs }" @click="showClaim()" :disabled="claimWasClick" depressed>
                    <v-icon class="mr-3">fas fa-exchange-alt</v-icon>Klaim Bonus
                </div>
                <div class="tabs-button-item" :class="{ active : promoTabs }" @click="showPromo()" :disabled="promoWasClick" depressed>
                    <v-icon class="mr-3">fas fa-percentage</v-icon>Promo Gabungan
                </div>
                <div class="tabs-button-item" :class="{ active : historyTabs }" @click="showHistory()" :disabled="historyWasClick" depressed>
                    <v-icon class="mr-3">fas fa-history</v-icon>History Klaim
                </div>
            </div>
            <div class="tabs-container">
                <transition name="fade" mode="out-in">
                    <div class="tabs-item" v-if="claimTabs">
                        <ClaimBonus></ClaimBonus>
                    </div>
                </transition>
                <transition name="fade" mode="out-in">
                    <div class="tabs-item" v-if="promoTabs">
                        <h1>THIS IS PROMO GABUNGAN</h1>
                    </div>
                </transition>
                <transition name="fade" mode="out-in">
                    <div class="tabs-item" v-if="historyTabs">
                        <h1>THIS IS HISTORY KLAIM</h1>
                    </div>
                </transition>
            </div>
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
                claimTabs: true,
                promoTabs: false,
                historyTabs: false,
                claimWasClick: true,
                promoWasClick: false,
                historyWasClick: false,
            }
        },

        methods: {
            showClaim() {
                if (this.promoTabs == true || this.historyTabs == true) {
                    this.claimTabs = true
                    this.promoTabs = false
                    this.historyTabs = false

                    this.claimWasClick = true
                    this.promoWasClick = false
                    this.historyWasClick = false
                }
            },

            showPromo() {
                if (this.claimTabs == true || this.historyTabs == true) {
                    this.claimTabs = false
                    this.promoTabs = true
                    this.historyTabs = false

                    this.claimWasClick = false
                    this.promoWasClick = true
                    this.historyWasClick = false
                }
            },

            showHistory() {
                if (this.claimTabs == true || this.promoTabs == true) {
                    this.claimTabs = false
                    this.promoTabs = false
                    this.historyTabs = true

                    this.claimWasClick = false
                    this.promoWasClick = false
                    this.historyWasClick = true
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_bonus.scss';
</style>

