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
                              <v-announcements></v-announcements>
                           </b-col>
                           <b-col>
                               <v-news></v-news>
                           </b-col>
                       </b-row>
                   </b-container>
                    <b-container fluid>
                       <b-row>
                           <b-col>
                             <v-info></v-info>
                           </b-col>
                           <b-col>
                               <v-p2p></v-p2p>
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
         
     }
}
</script>

<style >
   
</style>
