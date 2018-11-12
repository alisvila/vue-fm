<template>
<div>
<TopMenu />
  <div class="container-fluid">
    <SideMenu />
    <div class="pannel-home">
    <HeadText title="" subtitle=""/>
    <div class="row">

        <div class="col-lg-4 col-sm-12 col-md-6" v-for="(i, index) in services" :key="index">
            <card link="/pannel/app" status="در حال بررسی" :image="require('@/assets/logo.png')" name="i.Id"/>
        </div>

        <div class="col-lg-4 col-sm-12 col-md-6">
            <card link="/pannel/new" status="افزودن برنامه جدید" :image="require('@/assets/finno-new.png')" name="جدید" isNew/>
        </div>
    </div>
    <div class="row">
              <div class="col-lg-4 col-sm-12 col-md-6">

          <a class="btn btn-block" @click="getServices" style="color: red;!important">getServices</a>
          <a class="btn btn-block" @click="getUser" style="color: red;!important">getUser</a>
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
import {getAdmin} from '@/_helper/api'



export default {
  name: 'pannelIndex',
  components: {
    HeadText,
    Apps,
    SideMenu,
    Card,
    TopMenu
  },
  data() {
      return {
          services: ''

      }
  },
  methods: {
          getAdmin: function() {
            this.axios({
            method: 'post',
            url: 'http://service.sirang.sabinarya.com/api/account/login', 
            data: `grant_type=password&username=aliam&password=123456&client_id=ngAuthApp`,
            headers: { 
                "content-type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method", 
                'Accept': '*/*'
                }
            })
            .then (function(response) {
                let token = response.data.access_token
                localStorage.setItem('admin-token', token)
                console.log(token)

            })
            .catch( function(err) {
                console.log(err)
            })
        },
        getServices: function() {

        let Id = this.$store.state.jwt.nameid

        console.log(localStorage.getItem('user-id'), 'sda')
        let user = JSON.parse(localStorage.getItem('user'))
        let desc = JSON.parse(user.Description)
        this.services = desc;
        for (let i=0; i < desc.length; i++) {
            console.log(desc[i].id)
        }
    
        console.log(desc.length, 'wtf') 

          },

          getUser: function(id) {
              console.log(localStorage.getItem('admin-token'))
              console.log('get user' + id)
            let apiUrl = "http://service.sirang.sabinarya.com"
               
            this.axios({
                method: 'get',
                url: apiUrl + '/api/UserManagement/' + id,
                headers: { 
                    "Authorization": "bearer " + localStorage.getItem('admin-token'),
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    'Accept': '*/*'
                }
            })
            .then (function(response) {
              console.log(response.data)
                localStorage.setItem('user', JSON.stringify(response.data))
            })
            .catch( function(err) {
                console.log(err)
            })
           },
          },
          beforeMount: function() {
                this.getAdmin()
          },
          mounted: function() {
              let Id = JSON.parse(localStorage.getItem('jwt')).nameid
              this.getUser(Id)
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
