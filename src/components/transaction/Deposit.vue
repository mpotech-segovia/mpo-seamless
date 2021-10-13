<template>
    <div class="transaction__deposit">
        <v-row>
            <v-col xl="9" lg="8" md="8" sm="12" cols="12">
                <div class="deposit-form">
                    <h2 class="form-title">Formulir Deposit</h2>
                    <v-form class="form-deposit">
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Pilih Bank Anda</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1">
                                    <v-select :items="bank" label="Bank" solo hide-details="auto" flat rounded>
                                    </v-select>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1">
                                    <div class="label-textfield font-weight-medium" for="">JACK THE RIPPER</div>
                                    <div class="label-textfield" for="">2891 7431 02</div>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Pilih Bank Tujuan</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1">
                                    <v-select :items="bank" label="Bank" solo hide-details="auto" flat rounded>
                                    </v-select>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group show-bank">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12"></v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1">
                                    <div class="bank-item">
                                        <div class="bank-img">
                                            <img src="@/assets/img/payment/bca.png" alt="">
                                        </div>
                                        <div class="bank-account">
                                            <ul>
                                                <li>Nama Tujuan Akun : JACK THE RIPPER</li>
                                                <li>Nomor Akun Tujuan : 082123872048</li>
                                                <li>Minimum Deposit : IDR 10</li>
                                                <li>Maximum Deposit : IDR 20,000</li>
                                            </ul>
                                        </div>
                                    </div>
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
                                    <label class="label-textfield" for="">Jumlah Deposit</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1 deposit-conversion">
                                    <v-text-field label="0.00" type="number" solo rounded hide-details="auto" flat
                                        required></v-text-field>
                                    <span class="mx-4">
                                        <v-icon small>fas fa-equals</v-icon>
                                    </span>
                                    <v-text-field label="RP" type="number" solo rounded hide-details="auto" flat
                                        required></v-text-field>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1">
                                    <label class="label-textfield" for="">Contoh: setoran deposit 50.000, tulis Rp 50 (
                                        3 digit dihilangkan )</label>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Serial Number</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1 d-flex align-center py-1">
                                    <v-text-field label="Serial Number" type="number" solo rounded hide-details="auto"
                                        flat required></v-text-field>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1 d-flex align-center py-1">
                                    <label class="label-textfield" for="">Maksimal 32 Karakter</label>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="form-group">
                            <v-row>
                                <v-col xl="2" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Bukti Pembayaran</label>
                                </v-col>
                                <v-col xl="6" lg="6" md="6" sm="12" cols="12" class="py-1 d-flex align-center py-1">
                                    <v-file-input label="Choose File" solo rounded hide-details="auto"
                                        accept="image/png, image/jpeg" :clearable="false" v-model="proofPayment" flat
                                        :show-size="1000" prepend-inner-icon="fas fa-camera" prepend-icon="">
                                        <template v-slot:selection="{ text }">
                                            <v-chip color="primary" dark label>{{ text }}</v-chip>
                                        </template>
                                    </v-file-input>
                                </v-col>
                                <v-col xl="4" lg="3" md="3" sm="12" cols="12" class="py-1 d-flex align-center py-1">
                                    <label class="label-textfield" for="">Hanya format *.jpg, *.jpeg, dan *.png yang
                                        diperbolehkan, maksimal 1 MB</label>
                                </v-col>
                            </v-row>
                        </div>
                        <div class="deposit-button">
                            <v-btn class="deposit" rounded block large>Deposit</v-btn>
                        </div>
                    </v-form>
                </div>
            </v-col>
            <v-col xl="3" lg="4" md="4" sm="12" cols="12">
                <BankTransaction></BankTransaction>
            </v-col>
        </v-row>
        <div class="deposit-info mt-12">
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
        <div class="deposit-history mt-12">
            <div class="history-header">
                <h3>Riwayat Deposit</h3>
                <v-btn class="delete" rounded>
                    <v-icon small class="mr-2">fas fa-trash</v-icon> Delete Selected
                </v-btn>
            </div>
            <v-data-table :headers="headers" :items="depositData" :items-per-page="5" mobile-breakpoint="0"
            :footer-props="{
                prevIcon: 'fas fa-angle-left',
                nextIcon: 'fas fa-angle-right'
            }"></v-data-table>
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
                bank: ['BCA', 'BRI', 'BNI', 'Mandiri', 'Bank Lain', ],
                wallet: ['Dompet Utama', 'Dompet Porker'],
                proofPayment: [],
                headers: [{
                    text: 'Nomor',
                    align: 'start',
                    sortable: false,
                    divider: true,
                    value: 'number',
                }, 
                { 
                    text: 'Tanggal', 
                    divider: true,
                    value: 'date',
                }, 
                { 
                    text: 'Jumlah', 
                    divider: true,
                    value: 'amount',
                },
                { 
                    text: 'Status', 
                    divider: true,
                    value: 'status',
                },],
                depositData: [{
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
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_deposit.scss';
</style>