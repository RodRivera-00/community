<template>
    <div>
        <b-container fluid class="wrapper">
            <b-row>
                <b-col cols="4" class="sidebar-wrapper">
                    <sidebar></sidebar>
                </b-col>
                <b-col cols="8" class="main-container">
                    <b-container fluid>
                        <b-row>
                            <b-col>
                                <b-form-select :options="options" size="sm" v-model="selected" class="modified-select"></b-form-select>
                            </b-col>
                            <b-col>
                                <b-form-input size="sm" class="modified-text"></b-form-input>
                            </b-col>
                            <b-col class="dark-bg pl-2 pt-1">
                                <b-form-checkbox id="checkbox1"
                                                 class="modified-checkbox"
                                                 value="accepted"
                                                 unchecked-value="not_accepted">
                                    News
                                </b-form-checkbox>
                                <b-form-checkbox id="checkbox2"
                                                 class="modified-checkbox"
                                                 value="accepted"
                                                 unchecked-value="not_accepted">
                                    Blogs
                                </b-form-checkbox>
                            </b-col>
                        </b-row>
                    </b-container>
                    <b-container fluid>
                        <b-row class="news-container p-2">

                            <b-col cols="2" class="r" style="font-size: 12px;">
                                <span class="" style="color: #ddd;">3m</span>&nbsp;&nbsp;&nbsp;
                                <span class="text-light"><v-icon name="thumbs-down" flip="horizontal" size="xs"></v-icon>&nbsp;0</span>&nbsp;
                                <span class="text-success"><v-icon name="thumbs-up" size="xs"></v-icon>&nbsp;1</span>
                            </b-col>
                            <b-col cols="8" class="news-text" >
                                Blockchain, One of World's Largest Wallet Providers, Launches OTC Trading Desk - <span class="news-author">CryptoGlobe</span>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import sidebar from '@/components/Sidebar.vue';
    import Icon from 'vue-awesome/components/Icon.vue';

    export default {


        data () {
            return {
                options: [
                    { value: null, text: 'Latest News' },
                    { value: 'test1', text: 'What up'}
                ],
                selected: null
            }
        },

        components : {
            'sidebar' : sidebar,
            'v-icon': Icon

        }

    }
</script>

<style scoped>
    .modified-select {
        background-color: #2C2F38;
        color: #fff;
        border-color: #2C2F38;
        border-radius: 0px;
    }

    .modified-text {
        background-color: #2C2F38;
        color: #fff;
        border-color: #2C2F38;
        border-radius: 0px;
    }

    .modified-checkbox {
        color: #fff;
        font-weight: 200;
        font-size: 14px;
    }

    .dark-bg {
        background-color: #2C2F38   ;
    }

    .news-container {
        background-color: #2C2F38;
    }

    .news-text {
        font-size: 12px;
        color: #fff;
    }

    .news-author {
        font-size: 9px;
    }
</style>