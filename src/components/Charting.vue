<template>
    <div>
       <b-container fluid class="wrapper">
           <b-row>
               <b-col cols="4" class="sidebar-wrapper">
                   <sidebar></sidebar>
               </b-col>
               <b-col cols="8" class="main-container">
                    <b-card header="Bitcoin"
                    class="">
                       <b-card-body>
                           <b-container fluid>
                               <b-row>
                                   <b-col>
                                       <h2 class="charting-coin-name">355000 <small>USD</small></h2>
                                   </b-col>
                                    <b-col>
                                       <b-list-group>
                                           <b-list-group-item>
                                               <b-row>
                                                   <b-col>
                                                       <h3>High</h3>
                                                   </b-col>
                                                   <b-col>
                                                       <label for="">46,300 <small>Volume</small></label>
                                                   </b-col>
                                                   <b-col>
                                                        <label for="">46,300 USD <small>Price</small></label>
                                                   </b-col>
                                               </b-row>
                                           </b-list-group-item>
                                            <b-list-group-item>
                                               <b-row>
                                                   <b-col>
                                                       <h3>Low</h3>
                                                   </b-col>
                                                   <b-col>
                                                       <label for="">46,300 <small>Volume</small></label>
                                                   </b-col>
                                                   <b-col>
                                                        <label for="">46,300 USD <small>Price</small></label>
                                                   </b-col>
                                               </b-row>
                                           </b-list-group-item>
                                       </b-list-group>
                                   </b-col>
                               </b-row>
                               <b-row>
                                  
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

 
export default {
     components : {
         'sidebar' : sidebar,
        
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
        color: #8d2663;
        border-top: 3px solid #6c757d;
        font-size: 30px;
        font-weight: 500;
    }

    .charting-coin-name {
        color:  rgba(48, 121, 244,.4);
    }

    .charting-coin-name > small {
     
        font-size: 15px;
    }

    .list-group-item {
        background: none;
        color: #6c757d;
    }
</style>
