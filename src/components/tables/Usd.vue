<template>
    <div>
        
        <b-row>
            <b-col class="text-white text-right table-header">
                Name
            </b-col>
            <b-col class="text-white  text-right table-header">
                Market Cap
            </b-col>
            <b-col class="text-white  text-right table-header">
                Price
            </b-col>
            <b-col class="text-white  text-right table-header">
                % Change
            </b-col>
        </b-row>
      <b-list-group>
      
        <b-list-group-item :to="{path: 'charting/bitcoin'}">
            <b-row>
                
                <b-col class=" text-left">
                    <small>-</small>
                     <small>Bitcoin</small>
                </b-col>
                <b-col class=" text-left">
                    500000
                </b-col>
                <b-col class=" text-right">
                    3555
                </b-col>
                <b-col class=" text-right">
                    10%
                </b-col>
            </b-row>
        </b-list-group-item>
        <b-list-group-item :to="{path: 'charting/bitcoin'}">
            <b-row>
                
                <b-col class=" text-left">
                    <small>-</small>
                    <small>Bitcoin</small>
                </b-col>
                <b-col class=" text-left">
                    500000
                </b-col>
                <b-col class=" text-right">
                    3555
                </b-col>
                <b-col class=" text-right">
                    10%
                </b-col>
            </b-row>
        </b-list-group-item>
        <b-list-group-item :to="{path: 'charting/bitcoin'}">
            <b-row>
                
                <b-col class=" text-left">
                    <small>-</small>
                    <small>Bitcoin</small>
                </b-col>
                <b-col class=" text-left">
                    500000
                </b-col>
                <b-col class=" text-right">
                    3555
                </b-col>
                <b-col class=" text-right">
                    10%
                </b-col>
            </b-row>
        </b-list-group-item>
        <b-list-group-item :to="{path: 'charting/bitcoin'}">
            <b-row>
                
                <b-col class=" text-left">
                    <small>-</small>
                    <small>Bitcoin</small>
                </b-col>
                <b-col class=" text-left">
                    500000
                </b-col>
                <b-col class=" text-right">
                    3555
                </b-col>
                <b-col class=" text-right">
                    10%
                </b-col>
            </b-row>
        </b-list-group-item>
        <b-list-group-item :to="{path: 'charting/bitcoin'}">
            <b-row>
                
                <b-col class=" text-left">
                    <small>-</small>
                    <small>Bitcoin</small>
                </b-col>
                <b-col class=" text-left">
                    500000
                </b-col>
                <b-col class=" text-right">
                    3555
                </b-col>
                <b-col class=" text-right">
                    10%
                </b-col>
            </b-row>
        </b-list-group-item>
        <b-list-group-item :to="{path: 'charting/bitcoin'}">
            <b-row>
                
                <b-col class=" text-left">
                    <small>-</small>
                    <small>Bitcoin</small>
                </b-col>
                <b-col class=" text-left">
                    500000
                </b-col>
                <b-col class=" text-right">
                    3555
                </b-col>
                <b-col class=" text-right">
                    10%
                </b-col>
            </b-row>
        </b-list-group-item>
        <b-list-group-item :to="{path: 'charting/bitcoin'}">
            <b-row>
                
                <b-col class=" text-left">
                    <small>-</small>
                    <small>Bitcoin</small>
                </b-col>
                <b-col class=" text-left">
                    500000
                </b-col>
                <b-col class=" text-right">
                    3555
                </b-col>
                <b-col class=" text-right">
                    10%
                </b-col>
            </b-row>
        </b-list-group-item>
        <b-list-group-item :to="{path: 'charting/bitcoin'}">
            <b-row>
                
                <b-col class=" text-left">
                    <small>-</small>
                    <small>Ethereum</small>
                </b-col>
                <b-col class=" text-left">
                    500000
                </b-col>
                <b-col class=" text-right">
                    3555
                </b-col>
                <b-col class=" text-right">
                    10%
                </b-col>
            </b-row>
        </b-list-group-item>
        
     </b-list-group>
    </div>
</template>
<script>

const data = {
    "coins" : [
        {
            "name" : "Bitcoin",
            "market_cap" : "4,000",
            "price" : "600,0000",
            "percent_change" : "10.33"
        },
        {
            "name" : "Ethereum",
            "market_cap" : "4,000",
            "price" : "600,0000",
            "percent_change" : "10.33"
        }
    ]
}
export default {
   data() {
       return {
         
       }
   },
    cretead : function() {
      console.log(data);
    }
}
</script>

<style scoped>
  .list-group-item {
      background: none;
      color: #fff;
      border: none;
  }

  .table-header {
      font-size: 12px;
  }
</style>