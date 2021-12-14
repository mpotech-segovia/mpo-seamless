<template>
    <div class="transaction__withdraw">
        <v-row>
            <v-col xl="9" lg="8" md="8" sm="12" cols="12">
                <div class="withdraw-form">
                    <h2 class="form-title">Formulir Withdraw</h2>
                    <v-form class="form-withdraw">
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Nama Bank</label>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1">
                                    <h3 for="">BCA</h3>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Nomor Rekening</label>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1">
                                    <h4>JACK THE RIPPER</h4>
                                    <h5 class="font-weight-medium" for="">2891 7431 02</h5>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Dompet Tujuan</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1">
                                    <v-select :items="wallet" label="Dompet Tujuan" solo hide-details="auto" flat
                                        rounded></v-select>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Jumlah Withdraw</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1 withdraw-conversion">
                                    <v-text-field label="0.00" type="number" solo rounded hide-details="auto" flat
                                        required v-model="withdraw_amount" @keyup="calculateCurrency()"></v-text-field>
                                    <span class="mx-4">
                                        <v-icon small>fas fa-equals</v-icon>
                                    </span>
                                    <v-text-field label="IDR" solo rounded hide-details="auto" flat
                                        required v-model="withdraw_currency"></v-text-field>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1">
                                    <label class="label-textfield-caption" for="">Contoh: setoran deposit 50.000, tulis Rp 50 (
                                        3 digit dihilangkan )</label>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="withdraw-button">
                            <v-btn class="withdraw" rounded block large>Withdraw</v-btn>
                        </div>
                    </v-form>
                </div>
            </v-col>
            <v-col xl="3" lg="4" md="4" sm="12" cols="12">
                <BankTransaction></BankTransaction>
            </v-col>
        </v-row>
        <div class="withdraw-info">
            <div class="info-header">
                <v-icon>fas fa-info-circle</v-icon>
                <h3>Informasi</h3>
            </div>
            <div class="info-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sollicitudin mauris, pulvinar
                integer. Arcu duis vel dolor ipsum, quam lectus amet, ipsum rhoncus. Egestas nibh fringilla amet
                maecenas. Id eu vulputate egestas diam, sed. Nunc elit nibh ultricies laoreet aenean odio posuere
                egestas nibh. Scelerisque ut tincidunt tincidunt sed. Enim enim pellentesque etiam maecenas condimentum
                adipiscing duis curabitur. Euismod phasellus quam amet eu aliquam arcu malesuada mauris scelerisque.
                Tortor ac nulla malesuada elementum ut. Mauris, eu nullam risus, tellus amet ornare. Scelerisque et
                potenti quis ut sollicitudin purus. Dapibus lectus mus rhoncus a amet, odio faucibus elementum sit.
                Vitae varius metus eu cras adipiscing sem. Nec augue augue dignissim non, vel nunc, sed risus. Commodo
                molestie pretium scelerisque tempus dignissim porttitor. Lectus ut aliquet morbi diam. Et diam neque
                gravida viverra aliquet cras fringilla. Scelerisque velit maecenas vel non ac egestas viverra tortor
                erat. Arcu, ullamcorper nullam elementum viverra.
            </div>
        </div>
        <div class="withdraw-history">
            <div class="history-header">
                <h3>Riwayat Withdraw</h3>
            </div>
            <v-data-table :headers="headers" :items="withdrawData" :items-per-page="5" mobile-breakpoint="0" hide-default-footer></v-data-table>
        </div>
    </div>
</template>

<script>
    import BankTransaction from '@/components/transaction/BankTransaction.vue'

    export default {
        name: 'Deposit',

        components: {
            BankTransaction,
        },

        data() {
            return {
                wallet: ['Dompet Utama', 'Dompet Porker'],
                proofPayment: [],
                withdraw_amount: "",
                withdraw_currency: "",
                headers: [{
                    text: 'Nomor',
                    align: 'start',
                    sortable: false,
                    divider: true,
                    value: 'number',
                }, 
                { 
                    text: 'Tanggal', 
                    sortable: false,
                    divider: true,
                    value: 'date',
                }, 
                { 
                    text: 'Jumlah', 
                    sortable: false,
                    divider: true,
                    value: 'amount',
                },
                { 
                    text: 'Status', 
                    sortable: false,
                    divider: true,
                    value: 'status',
                },],
                withdrawData: [{
                    number: '1',
                    date: 'October 13, 2021',
                    amount: '999.99',
                    status: 'Approved',
                },
                {
                    number: '2',
                    date: 'October 14, 2021',
                    amount: '999.99',
                    status: 'Pending',
                },
                {
                    number: '3',
                    date: 'October 15, 2021',
                    amount: '999.99',
                    status: 'Rejected',
                },
                {
                    number: '1',
                    date: 'October 16, 2021',
                    amount: '999.99',
                    status: 'Approved',
                },
                {
                    number: '2',
                    date: 'October 17, 2021',
                    amount: '999.99',
                    status: 'Pending',
                },
                {
                    number: '3',
                    date: 'October 18, 2021',
                    amount: '999.99',
                    status: 'Rejected',
                },],
            }
        },

        methods: {
            calculateCurrency() {
                var currencyResult = this.withdraw_amount*1000
                this.withdraw_currency = ("IDR: " + currencyResult)
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/transaction/_withdraw.scss';
</style>