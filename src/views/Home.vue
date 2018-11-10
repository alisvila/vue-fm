<template>
<div>

  <Menu />

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="سامانه صدور و پرداخت قبوض"/>
  </div>
</div>

</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Apps from '@/views/pannel/Apps.vue'
import Menu from '@/components/menu.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
    Apps,
    Menu
  }
}
</script>

<style>

.home {
  position: absolute;
  top: 35%;
  left: 35%;
}

</style>
