<template>
    <div class="memo">
        <v-container>
            <div class="memo__wrapper">
                <v-row>
                    <v-col xl="9" lg="8" md="8" sm="12" cols="12">
                        <div class="memo-panel" v-if="!createMemo">
                            <div class="memo-empty" v-if="emptyMemo">
                                <v-icon x-large class="mb-3">fas fa-inbox</v-icon>
                                <h1>Your List is Empty</h1>
                                <h4>No memo in your list, yet! Relax and enjoy the moment!</h4>
                            </div>
                            <MemoList v-if="!emptyMemo"></MemoList>
                        </div>
                        <div class="memo-panel" v-if="createMemo">
                            <MemoCreate></MemoCreate>
                        </div>
                    </v-col>
                    <v-col xl="3" lg="4" md="4" sm="12" cols="12">
                        <div class="memo-tab">
                            <v-btn block depressed large class="mb-3" :class="{ active : isAllMemoActive }" :disabled="isAllMemoActive" @click="showAllMemo()">
                                <v-icon class="mr-2" small>fas fa-list-alt</v-icon> All Memo
                            </v-btn>
                            <v-btn block depressed large :class="{ active : isCreateMemoActive }" :disabled="isCreateMemoActive" @click="showCreateMemo()">
                                <v-icon class="mr-2" small>fas fa-edit</v-icon> Create Memo
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
    import MemoList from '@/components/memo/MemoList.vue';
    import MemoCreate from '@/components/memo/MemoCreate.vue';

    export default {
        name: 'Memo',

        components: {
            MemoList,
            MemoCreate
        },

        data() {
            return {
                emptyMemo: false,
                createMemo: false,
                isAllMemoActive: true,
                isCreateMemoActive: false,
            }
        },

        methods: {
            showAllMemo() {
                this.createMemo = !this.createMemo
                this.isCreateMemoActive = !this.isCreateMemoActive
                this.isAllMemoActive = !this.isAllMemoActive
            },
            showCreateMemo() {
                this.createMemo = !this.createMemo
                this.isCreateMemoActive = !this.isCreateMemoActive
                this.isAllMemoActive = !this.isAllMemoActive
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_memo.scss';
</style>