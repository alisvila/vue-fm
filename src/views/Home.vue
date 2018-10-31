<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="سامانه صدور و پرداخت قبوض"/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  }
}
</script>

<style>
@font-face {              
     font-family: sabin;
     src: url('../assets/fonts/Yekan.ttf');
}

h1, h2, h3, p, span {
  font-family: sabin
}

.home {
  position: absolute;
  top: 35%;
  left: 35%;
}

</style>
