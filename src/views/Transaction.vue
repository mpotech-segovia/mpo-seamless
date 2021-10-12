<template>
    <div class="transaction">
        <v-container>
            <v-tabs grow hide-slider>
                <v-tab class="mr-3">
                    <v-icon class="mr-3">fas fa-wallet</v-icon>Deposit
                </v-tab>
                <v-tab class="ml-3">
                    <v-icon class="mr-3">fas fa-coins</v-icon>Withdraw
                </v-tab>
                <v-tab-item>
                    <Deposit></Deposit>
                </v-tab-item>
                <v-tab-item>
                    <Withdraw></Withdraw>
                </v-tab-item>
            </v-tabs>
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
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_transaction.scss';
</style>