<template>
    <div class="memo-view">
        <div class="view-header">
            <div class="view-subject">
                <h4>White Label Migrations</h4>
                <h6>Memo Type</h6>
            </div>
            <div class="back-to-list">
                <v-btn fab x-small depressed @click="viewMemo = false">
                    <v-icon x-small>fas fa-arrow-left</v-icon>
                </v-btn>
            </div>
        </div>
        <div class="view-content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis unde at aliquam quo
                commodi. Incidunt tempora adipisci quaerat, expedita, praesentium totam a optio magnam magni ipsum
                quos quas similique.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae saepe reiciendis illo. Quidem,
                maiores repellendus dolorem exercitationem consequatur iusto quasi sunt quam? Quasi, odio autem
                ipsum suscipit nesciunt modi cupiditate!</p>
        </div>
        <div class="view-reply" v-if="replyMemo">
            <div class="reply-header">
                <div class="header-avatar">
                    <v-icon small>fas fa-user-alt</v-icon>
                </div>
                <div class="header-info">
                    <h5>mpo_player_001</h5>
                    <h6><v-icon x-small>far fa-clock</v-icon> Nov 5, 2021, 4:02 PM (4 days ago)</h6>
                </div>
            </div>
            <div class="reply-content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis unde at aliquam quo commodi. Incidunt tempora adipisci quaerat, expedita, praesentium totam a optio magnam magni ipsum quos quas similique.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis unde at aliquam quo commodi. Incidunt tempora adipisci quaerat, expedita, praesentium totam a optio magnam magni ipsum quos quas similique.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis unde at aliquam quo commodi. Incidunt tempora adipisci quaerat, expedita, praesentium totam a optio magnam magni ipsum quos quas similique.</p>
            </div>
        </div>
        <div class="view-form">
            <v-textarea solo flat hide-details="auto" label="Type here..."></v-textarea>
            <div class="form-captcha">
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
                        <v-btn small block depressed @click="replyMemo = true">Reply Memo</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MemoView',

        data() {
            return {
                replyMemo: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/memo/_memo-view.scss';
</style>