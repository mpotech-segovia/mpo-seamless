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
                            <div class="meter-item">
                                <div class="meter-content">
                                    <div class="meter-title">
                                        <h3>Deposit</h3>
                                        <h5>Waktu</h5>
                                    </div>
                                    <div class="meter-time">
                                        <h4>2</h4>
                                        <h5>Menit</h5>
                                    </div>
                                </div>
                                <div class="meter-progress">
                                    <v-progress-linear rounded height="15" value="20" class="mb-7"></v-progress-linear>
                                </div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-content">
                                    <div class="meter-title">
                                        <h3>Withdraw</h3>
                                        <h5>Waktu</h5>
                                    </div>
                                    <div class="meter-time">
                                        <h4>8</h4>
                                        <h5>Menit</h5>
                                    </div>
                                </div>
                                <div class="meter-progress">
                                    <v-progress-linear rounded height="15" value="80"></v-progress-linear>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col xl="4" lg="4" md="6" sm="6" cols="12">
                        <div class="service-item payment">
                            <div class="service-header">
                                <img src="@/assets/img/service-icon/payment.svg" alt="">
                                <h2>PAYMENT METHOD</h2>
                            </div>
                        </div>
                    </v-col>
                    <v-col xl="4" lg="4" md="12" sm="12" cols="12">
                        <div class="service-item help-support">
                            <div class="service-header">
                                <img src="@/assets/img/service-icon/help-support.svg" alt="">
                                <h2>HELP & SUPPORT</h2>
                            </div>
                            <a href="">
                                <div class="support-item">
                                    <img src="@/assets/img/service-icon/contact.svg" alt="">
                                    <h4>085860008528</h4>
                                </div>
                            </a>
                            <a href="">
                                <div class="support-item">
                                    <img src="@/assets/img/service-icon/line.svg" alt="">
                                    <h4>@mpoplay</h4>
                                </div>
                            </a>
                            <a href="">
                                <div class="support-item">
                                    <img src="@/assets/img/service-icon/messenger.svg" alt="">
                                    <h4>081266608528</h4>
                                </div>
                            </a>
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