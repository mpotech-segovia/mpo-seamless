<template>
    <div class="transaction">
        <v-container>
            <v-tabs grow hide-slider background-color="indigo">
                <v-tab>
                    <v-icon>fas fa-wallet</v-icon>Deposit
                </v-tab>
                <v-tab>
                    <v-icon>fas fa-coins</v-icon>Withdraw
                </v-tab>
                <v-tab-item>
                    <Deposit></Deposit>
                </v-tab-item>
                <v-tab-item>
                    <h1>THIS IS WITHDRAW</h1>
                </v-tab-item>
            </v-tabs>
        </v-container>
        <Seo class="mt-5"></Seo>
    </div>
</template>

<script>
    import Deposit from '@/components/transaction/Deposit.vue'
    import Seo from '@/components/home/Seo.vue'

    export default {
        name: 'Transaction',

        components: {
            Deposit,
            Seo,
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_transaction.scss';
</style>