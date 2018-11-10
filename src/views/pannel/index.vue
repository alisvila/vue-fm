<template>
<div>
<TopMenu />
  <div class="container-fluid">
    <SideMenu />
    <div class="pannel-home">
    <HelloWorld msg="سامانه صدور و پرداخت قبوض"/>
    <div class="row">

        <div class="col-lg-4 col-sm-12 col-md-6">
            <card msg="filan o bisar"/>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
            <card msg="filan o bisar"/>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
            <card msg="filan o bisar"/>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
            <card msg="filan o bisar"/>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
            <card msg="filan o bisar"/>
        </div>
    </div>

  </div>
</div>
</div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Apps from '@/views/pannel/Apps.vue'
import SideMenu from '@/components/SideMenu.vue'
import Card from '@/components/Card.vue'
import TopMenu from '@/components/TopMenu.vue'



export default {
  name: 'home',
  components: {
    HelloWorld,
    Apps,
    SideMenu,
    Card,
    TopMenu
  }
}
</script>

<style>

h1, h2, h3, p, span {
  font-family: sabin
}

.pannel-home {
    padding: 80px 215px 0 10px;
    direction: rtl;
    margin: 0;
}

</style>
