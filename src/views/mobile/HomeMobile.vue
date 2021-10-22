<template>
    <div class="mobile-home">
        <h1>THIS IS MOBILE HOME</h1>
    </div>
</template>

<script>

    export default {
        name: 'HomeMobile',

        components: {
        },

        methods: {
            isMobile() {
                if( screen.width <= 906 ) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },

        created() {
            if (this.isMobile()) {
                this.$router.push('/mobile-home');
            }
            else {
                this.$router.push('/');
            }
        }
    }
</script>