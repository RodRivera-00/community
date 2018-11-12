<template>
    <div>
        <b-container class="wrapper">
            <div class="main-container">
                <div class="text-center">
                    <h3 class="page-title">Top 100 Cryptocurrency Exchanges by Trade Volume</h3>
                    <p class="text-white">(Beta)</p>
                </div>
            </div>

            <div class="tabs-wrapper pt-5">
                <div class="external-controls float-right">
                    <b-dropdown id="ddown1" text="USD" class="m-md-2">
                        <b-dropdown-item>USD</b-dropdown-item>
                        <b-dropdown-item>KRW</b-dropdown-item>
                        <b-dropdown-item>JPY</b-dropdown-item>

                    </b-dropdown>
                    <b-btn >Next 100&nbsp; <v-icon name="long-arrow-alt-right"></v-icon></b-btn>
                </div>
                <b-tabs>
                    <b-tab active>
                        <template slot="title">
                            Cryptocurrencies
                        </template>
                        <v-currencies></v-currencies>
                    </b-tab>
                    <b-tab>
                        <template slot="title">
                            Exchanges
                        </template>
                        <v-exchange></v-exchange>
                    </b-tab>
                </b-tabs>
            </div>
        </b-container>
    </div>
</template>
<script>
    import Icon from 'vue-awesome/components/Icon.vue';
    import Currencies from '@/components/partials/volume/Currencies.vue';
    import Exchange from '@/components/partials/volume/Exchange.vue';

    export default {
        components: {
            'v-icon' : Icon,
            'v-currencies' : Currencies,
            'v-exchange' : Exchange
        }
    }
</script>

<style>
    .page-title {
        color: #fff;
    }

    .custom-bg {
        background: #2C2F38;
        line-height: 31px;
        color: #fff;
    }

    .external-controls {
        margin-top: -20px;
    }

</style>