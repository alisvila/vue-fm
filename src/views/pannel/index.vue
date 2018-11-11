<template>
<div>
<TopMenu />
  <div class="container-fluid">
    <SideMenu />
    <div class="pannel-home">
    <HeadText title="" subtitle=""/>
    <div class="row">

        <div class="col-lg-4 col-sm-12 col-md-6">
            <card link="/pannel/app" status="در حال بررسی" :image="require('@/assets/logo.png')" name="سابین"/>
        </div>

        <div class="col-lg-4 col-sm-12 col-md-6">
            <card link="/pannel/new" status="افزودن برنامه جدید" :image="require('@/assets/finno-new.png')" name="جدید" isNew/>
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
  name: 'home',
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

h1, h2, h3, p, span {
  font-family: sabin
}

.pannel-home {
    padding: 80px 225px 0 10px;
    direction: rtl;
    margin: 0;
}

</style>
