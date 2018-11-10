<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'


export default {
  components: {
    SideMenu
  } 
}

</script>

<style>
@font-face {              
     font-family: sabin;
     src: url('assets/fonts/Yekan.ttf');
}

body, div, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, p, span {
  font-family: sabin
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn-finno {
    border: 1px solid #ff9900;
    background-color: #ff9900;
}

.btn-finno:hover {
background-color: #f58220
}
</style>
