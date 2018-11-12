<template>
    <div>
        <b-container fluid class="wrapper">
            <b-row>
                <b-col cols="4" class="sidebar-wrapper">

                    <sidebar></sidebar>
                </b-col>
                <b-col cols="8" class="main-container">
                    <div class="info-header">
                       <b-row>
                           <b-col>
                               <h5 class="title-header">Gentarium &nbsp;<b-badge>GTM</b-badge></h5>
                               <span class="text-white">0.00015 BTC / 0.93 $
                               </span><label for="" class="m-3 text-success"><v-icon name="chart-line"></v-icon>&nbsp;+0.2 %</label>

                           </b-col>
                           <b-col>

                                <b-nav>
                                    <b-nav-item class="coin-info-link">
                                        <v-icon name="globe-asia"></v-icon>
                                    </b-nav-item>
                                </b-nav>
                               <b-badge class="float-right" variant="danger"><small>ROI</small>&nbsp;401%</b-badge>
                           </b-col>
                       </b-row>
                        <b-row>

                            <b-col cols="1">
                                <v-icon name="align-left" class="text-white"></v-icon>
                            </b-col>
                            <b-col cols="11">
                                <small class="text-white">
                                    New plaform for crypto-enthusiasts which provides the opportunity of an automatic masternodes, shared mn, and the ability to manage asics and gpu rigs.
                                </small>
                            </b-col>
                        </b-row>
                        <b-row class="pt-5">

                            <b-col>
                                <h5 class="title-header">Coin Detail</h5>
                                <b-row>
                                    <b-col>
                                        <b-card no-body>
                                            <b-list-group>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">
                                                    Ticker <label for="">GTM</label>
                                                </b-list-group-item>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">
                                                    Type <label for="">Pow/MN</label>
                                                </b-list-group-item>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">
                                                    Algo <label for="">Lyrazz</label>
                                                </b-list-group-item>
                                            </b-list-group>
                                        </b-card>
                                    </b-col>
                                    <b-col>
                                        <b-card no-body>
                                            <b-list-group>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">
                                                    Blocktime <label for="">2 min</label>
                                                </b-list-group-item>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">
                                                    Genesis Block <label for="">19.07.2018 19:00</label>
                                                </b-list-group-item>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">
                                                    Block Reward <label for="">21 GTM</label>
                                                </b-list-group-item>
                                            </b-list-group>
                                        </b-card>
                                    </b-col>
                                    <b-col>
                                        <b-card no-body>
                                            <b-list-group>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">
                                                    Pre-mine <label for="">400000 GTM</label>
                                                </b-list-group-item>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">
                                                    Dev Reward <label for="">1 GTM per block</label>
                                                </b-list-group-item>
                                                <b-list-group-item class="d-flex justify-content-between align-items-center">
                                                    Supply <label for="">14191200</label>
                                                </b-list-group-item>
                                            </b-list-group>
                                        </b-card>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>

                        <b-row class="pt-5">
                            <b-col>
                                <b-tabs>
                                    <b-tab title="Announcements" active></b-tab>
                                    <b-tab title="Tweet"></b-tab>
                                    <b-tab title="Coins Schedule"></b-tab>
                                    <b-tab title="Exchange"></b-tab>
                                </b-tabs>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    import Icon from 'vue-awesome/components/Icon.vue';
    import sidebar from '@/components/Sidebar.vue';
    import Announcements from '@/components/partials/Announcements.vue';
    import News from '@/components/partials/News.vue';
    import CoinsInfo from '@/components/partials/CoinsInfo.vue';
    import P2P from '@/components/partials/P2P.vue';


    export default {
        components : {
            'sidebar' : sidebar,
            'v-announcements' : Announcements,
            'v-news'   : News,
            'v-info'   : CoinsInfo,
            'v-p2p'   : P2P,
            'v-icon' : Icon

        }
    }
</script>

<style scoped>

    .title-header {
        color: #fff;
    }

    .coin-info-link > a {
        color: #fff;
    }

    .list-group-item {
        font-size: 11px;
    }

</style>
