<template>
    <div class="home__service">
        <v-container>
            <div class="service-holder">
                <v-row>
                    <v-col xl="4" lg="4" md="6" sm="6" cols="12">
                        <div class="service-item service-meter">
                            <div class="service-header">
                                <img src="@/assets/img/service-icon/service-meter.svg" alt="">
                                <h2>SERVICE METER</h2>
                            </div>
                        </div>
                    </v-col>
                    <v-col xl="4" lg="4" md="6" sm="6" cols="12">
                        <div class="service-item payment">
                            <div class="service-header">
                                <img src="@/assets/img/service-icon/payment.svg" alt="">
                                <h2>PAYMENT</h2>
                            </div>
                        </div>
                    </v-col>
                    <v-col xl="4" lg="4" md="12" sm="12" cols="12">
                        <div class="service-item help-support">
                            <div class="service-header">
                                <img src="@/assets/img/service-icon/help-support.svg" alt="">
                                <h2>HELP & SUPPORT</h2>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
		name: 'Service',

		data() {
			return {
				
			}
		},
	}
</script>