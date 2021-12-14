<template>
    <div class="memo-create">
        <v-form class="create-form">
            <div class="form-group">
                <label class="label-textfield">Title*</label>
                <v-text-field label="Memo Title" type="text" v-model="title" :rules="textFieldRules" hide-details="auto" solo flat required></v-text-field>
            </div>
            <div class="form-group">
                <label class="label-textfield">Type*</label>
                <v-text-field label="Memo Type" type="text" v-model="type" :rules="textFieldRules" hide-details="auto" solo flat required></v-text-field>
            </div>
            <div class="form-group">
                <label class="label-textfield">Message*</label>
                <v-textarea solo flat v-model="message" :rules="textFieldRules" hide-details="auto" label="Type here..."></v-textarea>
            </div>
        </v-form>
        <div class="create-captcha">
            <h5>Code Verification</h5>
            <div class="img-holder">
                <div class="captcha-img">
                    <img src="https://52.220.214.91/captcha/default?H3jvAmqK" alt="">
                </div>
                <div class="captcha-refresh">
                    <v-btn small block depressed><v-icon x-small>fas fa-sync-alt</v-icon></v-btn>
                </div>
            </div>
            <div class="sent-holder">
                <div class="captcha-input">
                    <v-text-field label="Kode Verifikasi" solo hide-details flat dense></v-text-field>
                </div>
                <div class="captcha-reply">
                    <v-btn small block depressed>Reply Memo</v-btn>
                </div>
            </div>
        </div>
        <div class="create-notice">
            <p>** Harap untuk selalu bersabar menunggu jawaban tiket dari operator, untuk masalah yang urgent sekali bisa langsung menghubungi via livechat</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MemoCreate',

        data() {
            return {
                title: '',
                type: '',
                message: '',
                textFieldRules: [
                    v => !!v || 'This field is required',
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/memo/_memo-create.scss';
</style>