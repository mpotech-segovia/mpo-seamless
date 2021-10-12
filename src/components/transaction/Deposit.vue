<template>
    <div class="transaction__deposit">
        <v-row>
            <v-col xl="9" lg="9" md="7" sm="12">
                <div class="deposit-form">
                    <h2 class="form-title">Formulir Deposit</h2>
                    <v-form class="form-deposit">
                        <div class="form-group">
                            <v-row>
                                <v-col xl="3" lg="3" md="3" sm="12" cols="12" class="d-flex align-center py-1">
                                    <label class="label-textfield" for="">Nama Pengguna</label>
                                </v-col>
                                <v-col xl="9" lg="9" md="9" sm="12" cols="12" class="py-1">
                                    <v-text-field label="Nama Pengguna" type="text" hide-details="auto" solo rounded flat required></v-text-field>
                                </v-col>
                            </v-row>
                        </div>
                    </v-form>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Deposit'
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_deposit.scss';
</style>