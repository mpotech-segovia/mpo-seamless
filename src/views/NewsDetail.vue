<template>
    <div class="post">
        <v-container>
            <div class="post__wrapper">
                <v-row>
                    <v-col xl="8" lg="7" md="7" sm="12" cols="12">
                        <div class="post-content">
                            <div class="post-img">
                                <img src="@/assets/img/promo-banner.jpg" alt="">
                            </div>
                            <div class="post-date">
                                <v-chip small>Slots</v-chip>
                                <div class="date">
                                    <v-icon small>far fa-clock</v-icon>
                                    <h5>05 November, 2021</h5>
                                </div>
                            </div>
                            <div class="post-title">BERITA TITLE</div>
                            <div class="post-info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum tempore, corrupti nulla veritatis ea praesentium aliquam adipisci dicta corporis! Totam officiis mollitia itaque suscipit natus accusantium repellendus saepe, deleniti ipsa vero possimus! Amet placeat officiis excepturi error nesciunt! Obcaecati, explicabo! Ab minima maxime placeat perspiciatis ex tempora autem aliquam consectetur error aperiam fugiat quas, fugit saepe enim. Vel asperiores nulla perspiciatis minima fuga, reiciendis mollitia. Consequatur qui natus, voluptas culpa voluptatibus mollitia eum rem delectus quia libero architecto. Optio placeat eius hic soluta alias nostrum velit, porro, et sint laudantium laborum nulla vitae autem iure repudiandae architecto incidunt. Libero.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque dolorem ab eius, eos labore eum quasi consectetur iure! Veniam tempore dolorum in eligendi iste ab aspernatur labore maxime excepturi, odit, iusto, corrupti rerum aliquam placeat. Cumque eligendi aliquid cum quae animi voluptatem sapiente et, ullam labore. Sed, aperiam maiores?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, doloremque. Cum at natus totam quisquam temporibus omnis blanditiis officiis repellat.</p>
                            </div>
                        </div>
                    </v-col>
                    <v-col xl="4" lg="5" md="5" sm="12" cols="12">
                        <div class="post-recent">
                            <h3 class="recent-title">Recent News</h3>
                            <a :href="item.link" v-for="(item, i) in recentNewsList" :key="i">
                                <div class="recent-item">
                                    <div class="item-img">
                                        <img :src="item.imgSrc" alt="">
                                    </div>
                                    <div class="item-content">
                                        <div class="content-date">
                                            <v-chip x-small>{{ item.category }}</v-chip>
                                            <div class="date">
                                                <v-icon x-small>far fa-clock</v-icon>
                                                <h6>{{ item.date }}</h6>
                                            </div>
                                        </div>
                                        <div class="content-title">
                                            <h4>{{ item.title }}</h4>
                                        </div>
                                        <div class="content-button">
                                            <v-btn x-small depressed rounded>READ MORE</v-btn>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div class="recent-button">
                                <v-btn small depressed to="/news">SHOW ALL NEWS <v-icon class="ml-1" x-small>fas fa-arrow-circle-right</v-icon></v-btn>
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
        name: 'NewsDetails',

        data() {
            return {
                recentNewsList: [{
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    category: 'Slots',
                    date: '05 November, 2021',
                    title: 'Be a part of TechCrunchs Digital Startup Alley',
                    link: '#/news',
                },
                {
                    imgSrc: require('@/assets/img/promo-banner.jpg'),
                    category: 'Sportsbook',
                    date: '05 November, 2021',
                    title: '88Pulsa Modal 10.000 Sudah Bisa Main Judi Online',
                    link: '#/news',
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/pages/_post.scss';
</style>