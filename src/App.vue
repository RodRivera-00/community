<template>
  <div id="app">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1">
        Charting
      </MenuItem>
    </Menu>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
    export default {
        data () {
            return {
                theme1: 'dark'
            }
        }
    }
</script>