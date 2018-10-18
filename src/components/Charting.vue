<template>
    <div>
       <b-container fluid class="wrapper">
           <b-row>
               <b-col cols="4" class="sidebar-wrapper">
                   <sidebar></sidebar>
               </b-col>
               <b-col cols="8" class="main-container">
                    <b-card h
                    class="">
                        <h2 class="custom-card-header">Bitcoin <small>EOS/KRW</small></h2>
                       <b-card-body>
                           <b-container fluid>
                               <b-row>
                                   <b-col cols="4">
                                       <h2 class="charting-coin-name">355000 <small>USD</small></h2>
                                       <small class="text-white">Percent Change: <small class="text-danger">-2.35%</small>&nbsp;<v-icon name="caret-down" class="text-danger"></v-icon>&nbsp;<span class="text-danger">-135</span></small>
                                   </b-col>
                                    <b-col cols="8">
                                       <b-list-group>
                                           <b-list-group-item>
                                               <b-row class="text-white">
                                                   <b-col cols="4">
                                                       <h3>High</h3>
                                                   </b-col>
                                                   <b-col cols="4">
                                                       <label for=""><small class="unit-price">46,300</small> <small> Volume</small></label>
                                                   </b-col>
                                                   <b-col cols="4">
                                                        <label for=""><small class="unit-price">46,300</small> <small class="unit-deno">EOS</small></label>
                                                   </b-col>
                                               </b-row>
                                           </b-list-group-item>
                                            <b-list-group-item>
                                               <b-row class="text-white">
                                                   <b-col>
                                                       <h3>Low</h3>
                                                   </b-col>
                                                   <b-col>
                                                       <label for=""><small class="unit-price">46,300</small> <small> Volume</small></label>
                                                   </b-col>
                                                   <b-col>
                                                        <label for=""><small class="unit-price">46,300</small> <small class="unit-deno">KRW</small></label>
                                                   </b-col>
                                               </b-row>
                                           </b-list-group-item>
                                       </b-list-group>
                                   </b-col>
                               </b-row>
                               <b-row class="pt-4">
                                  
                                   <b-col>
                                       <h3>Chart goes here</h3>
                                   </b-col>
                               </b-row>
                           </b-container>
                       </b-card-body>
                    </b-card>
               </b-col>
           </b-row>
       </b-container>
    </div>
</template>
<script>
 import sidebar from '@/components/Sidebar.vue';
import Icon from 'vue-awesome/components/Icon.vue';
 
export default {
     components : {
         'sidebar' : sidebar,
         'v-icon'   : Icon
     }
}
</script>

<style scoped>
    .card {
        border: none;
    }

    .card-body {
        background: rgba(19,19,19,1);
    }

    .card-header {
        background: rgba(19,19,19,1);
        color: #fff;
        border-top: 3px solid #6c757d;
        font-size: 30px;
        font-weight: 500;
        border-bottom: 1px solid #ccc;
    }

    .custom-card-header {
        color: #fff;
    }

    .custom-card-header > small {
        font-size: 15px;
    }

    .charting-coin-name {
        color:  #fff;
    }

    .charting-coin-name > small {
     
        font-size: 15px;
    }

    .list-group-item {
        background: none;
        color: #6c757d;
    }

    .unit-deno {
        font-size: 10px;
    }

    .unit-price {
        font-size: 18px;
    }
</style>
