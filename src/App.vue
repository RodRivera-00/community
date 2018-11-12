
<template>
    <div>
      <b-navbar toggleable="md">
           <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand class="">Cryptofuse</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
              <b-navbar-nav class="">
                <b-nav-item>Charting</b-nav-item>
                <b-nav-item :to="{path: '/news'}">News</b-nav-item>
                <b-nav-item :to="{path: '/ico'}">ICO</b-nav-item>
                <b-nav-item :to="{path: '/volume'}">Volume</b-nav-item>
                <b-nav-item :to="{path: '/coin-information'}">Coin Information</b-nav-item>
                <b-nav-item :to="{path: '/p2p'}">P2P</b-nav-item>
                <b-nav-item>Announcements</b-nav-item>
                
              </b-navbar-nav>

              <b-navbar-nav class="ml-auto right-nav-bg">
                  <b-nav-item v-b-modal.loginModal>Login</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        
        <router-view></router-view>
        <!-- <footer>
        
        </footer> -->

        <b-modal id="loginModal" size="sm">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
    </div>
</template>
<style scoped>
 
  .header-wrapper {
    background:#000;
  }
  .navbar {
    background: #000;
    padding: 0px;
  }
  .navbar-nav .nav-item a {
    color: #fff;
    margin: 0;
    height: 100%;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 400;
  }

  .navbar-light .navbar-brand {
    color: #fff;
    background: #8d2663;
    padding:10px 15px 10px 15px;
   
  }

   .right-nav-bg {
    background: #fff;
    padding: 10px 15px 5px 15px;
   
  }

    .right-nav-bg .nav-item a {
     color: #000;
     font-weight: 500;
     color: #8d2663;
  }
 

  footer {
    height: 10vh;
    background: #000;
  }
</style>

<script>
    export default {
        
    }
</script>
