<template>
    <div v-bar>
        
        <div class="search-wrapper">
            <b-form-input></b-form-input>
        </div>
       
            <b-tabs small class="custom-tabs">
                <b-tab title="USD" :title-link-class="'custom-tab-color'">
                    <br/>
                     <div class="table-container" v-bar>
                        <usd-table></usd-table>
                     </div>
                </b-tab>
                <b-tab title="JPY" :title-link-class="'custom-tab-color'">
                    <br/>
                    dsd
                </b-tab>
                <b-tab title="KRW" :title-link-class="'custom-tab-color'">
                    <br/>
                    dsd
                </b-tab>
                <b-tab title="EUR" :title-link-class="'custom-tab-color'" >
                    <br/>
                    dsd
                </b-tab>
                <b-tab title="YEN" :title-link-class="'custom-tab-color'">
                    <br/>
                    dsd
                </b-tab>
                
            </b-tabs>
       
    </div>
</template>
<script>
import usdTable from "@/components/tables/Usd.vue";
export default {
    components: {
        'usd-table': usdTable
    }

  
}
</script>
<style scoped>
  .table-container {
        overflow: auto;
        height: 65vh;
    }
</style>


