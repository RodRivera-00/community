<template>
  <div class="layout">
    <b-container fluid class="home_bg text-center">
           <b-row>
             <b-col align-self="center" class="bottom-underline">
               <h1 class="pb-1">Cryptofuse</h1>
               <label class="pt-2">
                 Cryptocurrency information service channel.
               </label>
             </b-col>
           </b-row>
        </b-container>

        <b-container fluid  class="bottom-content">
           <b-row>
             <b-col class="p-4 crypt-col">
               <h5>Cryptocurrencies</h5>
               <b-table small dark :items="items" head-variant="light"></b-table>
             </b-col>
             <b-col class="p-4 crypt-col">
              <h5>Company Announcements</h5>
              
                  
                    <b-list-group>
                      <b-list-group-item active class="flex-column align-item-start">
                         <div class="d-flex w-100 justify-content-between">
                          <h6 class="mb-1">List group item heading</h6>
                          <small>3 days ago</small>
                          
                        </div>
                        <small>Donec id elit non mi porta.</small>
                      </b-list-group-item>
                       <b-list-group-item class="flex-column align-item-start">
                         <div class="d-flex w-100 justify-content-between">
                          <h6 class="mb-1">List group item heading</h6>
                          <small>3 days ago</small>
                          
                        </div>
                        <small>Donec id elit non mi porta.</small>
                      </b-list-group-item>
                    </b-list-group>
                  
                
             </b-col>
             <b-col class="p-4 crypt-col">
               <h5>Coins News</h5>
                <b-list-group>
                      <b-list-group-item active class="flex-column align-item-start">
                         <div class="d-flex w-100 justify-content-between">
                          <h6 class="mb-1">List group item heading</h6>
                          <small>3 days ago</small>
                          
                        </div>
                        <small>Donec id elit non mi porta.</small>
                      </b-list-group-item>
                       <b-list-group-item class="flex-column align-item-start">
                         <div class="d-flex w-100 justify-content-between">
                          <h6 class="mb-1">List group item heading</h6>
                          <small>3 days ago</small>
                          
                        </div>
                        <small>Donec id elit non mi porta.</small>
                      </b-list-group-item>
                    </b-list-group>
             </b-col>
           </b-row>
        </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
const items = [
  {
    Name: "Bitcoin", MarketCap: "$1000", Price: "$400000", 
  }
]
export default {
  data() {
    return {
      items: items
    }
  }
};
</script>

<style scoped>




  .home_bg {
    padding-top: 70px;
    height:250px;
    
    background-image: url('../../src/assets/images/home_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    
  }

  .home_bg h1 {
    color: #fff;
    border-bottom: 2px solid #fff;
    width: 400px;
    margin: 0 auto;
    font-weight: 500;
    font-size: 60px;
  
  }

   .home_bg label {
     color: #fff;
     
   }



  .bottom-content {
    height: 50vh;
    background: #2d2d2d;
  }

  .crypt-col > h5 {
    color: #fff;
  }

</style>
