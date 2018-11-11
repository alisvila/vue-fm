
<template>
<div>
    <TopMenu />
    <SideMenu />
    <div class="container-fluid">
        <SideMenu />
        <div class="pannel-home">
            <div class="wrapper">
              <div class="inside">
              <h3>
                دریافت نمونه کد و اینا
              </h3>
              <p>
                به زودی نمونه کد قرار داده می شود
              </p>
              </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import HeadText from '@/components/HeadText.vue'
import Apps from '@/views/pannel/Apps.vue'
import SideMenu from '@/components/SideMenu.vue'
import Card from '@/components/Card.vue'
import TopMenu from '@/components/TopMenu.vue'



export default {
  name: 'example',
  components: {
    HeadText,
    Apps,
    SideMenu,
    Card,
    TopMenu
  }
}
</script>

<style>
.pannel-home {
    padding: 80px 225px 0 10px;
    direction: rtl;
    margin: 0;
}

.inside {
  padding: 19px;
  text-align: right;
}
</style>
