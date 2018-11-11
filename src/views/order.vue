<template>
  <div class="container" style="padding-top: 77px;">
    <div class="order-list">
        <singleOrder msg="filan"/>
        <singleOrder msg="filan"/>
        <singleOrder msg="filan"/>
    </div>
  </div>
</template>

<script>

import HeadText from '@/components/HeadText.vue'
import singleOrder from '@/components/single-order.vue'

export default {
  name: 'home',
  components: {
    singleOrder,
    HeadText
  }
}
</script>

<style scoped>

.order-list {
    margin-top: 20px;
}

</style>