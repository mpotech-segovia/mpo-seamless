<template>
    <div class="transaction">
        <v-container>
            <div class="tabs-button">
                <div class="tabs-button-item" :class="{ active : depositTabs }" @click="showDeposit()" :disabled="depositWasClick" depressed>
                    <v-icon class="mr-3">fas fa-wallet</v-icon>Tambah Dana
                </div>
                <div class="tabs-button-item" :class="{ active : withdrawTabs }" @click="showWithdraw()" :disabled="withdrawtWasClick" depressed>
                    <v-icon class="mr-3">fas fa-coins</v-icon>Tarik Dana
                </div>
            </div>
            <div class="tabs-container">
                <transition name="fade" mode="out-in">
                    <div class="tabs-item" v-if="depositTabs">
                        <Deposit></Deposit>
                    </div>
                </transition>
                <transition name="fade" mode="out-in">
                    <div class="tabs-item" v-if="withdrawTabs">
                        <Withdraw></Withdraw>
                    </div>
                </transition>
            </div>
        </v-container>
        <Seo class="mt-5"></Seo>
    </div>
</template>

<script>
    import Deposit from '@/components/transaction/Deposit.vue'
    import Withdraw from '@/components/transaction/Withdraw.vue'
    import Seo from '@/components/home/Seo.vue'

    export default {
        name: 'Transaction',

        components: {
            Deposit,
            Withdraw,
            Seo,
        },

        data() {
            return {
                depositTabs: true,
                withdrawTabs: false,
                depositWasClick: true,
                withdrawtWasClick: false,
            }
        },

        methods: {
            showDeposit() {
                if (this.withdrawTabs == true) {
                    this.depositTabs = true
                    this.withdrawTabs = false

                    this.depositWasClick = true
                    this.withdrawtWasClick = false
                }
            }, 
            showWithdraw() {
                if (this.depositTabs == true) {
                    this.depositTabs = false
                    this.withdrawTabs = true

                    this.depositWasClick = false
                    this.withdrawtWasClick = true
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_transaction.scss';
</style>