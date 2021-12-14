<template>
    <div class="memo-content">
        <div class="memo-list" v-if="!viewMemo">
            <v-list two-line>
                <v-list-item-group multiple>
                    <template v-for="(item, index) in memoList">
                        <v-list-item :key="item.title" @click="viewMemo = true">
                            <template>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.memoSubject"></v-list-item-title>
                                    <v-list-item-subtitle v-text="item.memoUser" class="memo-user">
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle v-text="item.memoContent" class="memo-content">
                                    </v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-list-item-action-text v-text="item.time"></v-list-item-action-text>
                                    <v-list-item-action-text>
                                        <v-chip x-small label :class="item.status">{{ item.status }}</v-chip>
                                    </v-list-item-action-text>
                                </v-list-item-action>
                            </template>
                        </v-list-item>
                        <v-divider v-if="index < item.length - 1" :key="index"></v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
        </div>
        <MemoView v-if="viewMemo"></MemoView>
    </div>
</template>

<script>
    import MemoView from '@/components/memo/MemoView.vue';

    export default {
        name: 'MemoList',

        components: {
            MemoView
        },

        data() {
            return {
                memoList: [{
                        time: '15 min',
                        status: 'New',
                        memoSubject: 'White Label Migrations',
                        memoUser: 'Programmer, CSIT',
                        memoContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo eligendi. Porro in, necessitatibus iste sed quis consectetur fuga eius recusandae veniam veritatis possimus cum aspernatur quas dicta illo ex!`,
                    },
                    {
                        time: 'Nov 5',
                        status: 'Read',
                        memoSubject: 'Alpha PhilIndo Rules',
                        memoUser: 'HR Department',
                        memoContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo eligendi. Porro in, necessitatibus iste sed quis consectetur fuga eius recusandae veniam veritatis possimus cum aspernatur quas dicta illo ex!`,
                    },
                    {
                        time: 'July 14',
                        status: 'Read',
                        memoSubject: 'Alpha PhilIndo Opening',
                        memoUser: 'CEO',
                        memoContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo eligendi. Porro in, necessitatibus iste sed quis consectetur fuga eius recusandae veniam veritatis possimus cum aspernatur quas dicta illo ex!`,
                    },
                ],
                viewMemo: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/components/memo/_memo-list.scss';
</style>