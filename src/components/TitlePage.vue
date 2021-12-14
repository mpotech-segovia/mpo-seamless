<template>
    <div class="title-page text-center">
        <h4>{{ titlePage }}</h4>
    </div>
</template>

<script>
    export default {
        name: 'TitlePage',

        props: {
            titlePage: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title-page {
        background: #203A7D;
        padding: 15px 10px;

        h4 {
            font-weight: 600;
            margin-bottom: 0;
        }
    }
</style>