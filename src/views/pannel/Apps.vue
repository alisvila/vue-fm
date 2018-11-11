<template>
  <div class="home">
    <HeadText title="سامانه صدور و پرداخت قبوض"/>
  </div>
</template>

<script>

import HeadText from '@/components/HeadText.vue'
import Card from '@/components/Card.vue'


export default {
  name: 'apps',
  components: {
    HeadText,
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
