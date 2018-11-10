<template>
  <div class="home">
    <HelloWorld msg="سامانه صدور و پرداخت قبوض"/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/Card.vue'


export default {
  name: 'apps',
  components: {
    HelloWorld,
    Card
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
