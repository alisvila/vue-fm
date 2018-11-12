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

      }
  },
  methods: {
    getServices: function() {

        let aapps = `"apps": [{
                        "Id": localStorage.getItem('user-id'),
                        "Name": user.DisplayName,
                        "Description": desc,
                        "Photo": null,
                        "UserName": user.UserName,
                        "Email": null,
                        "JoinDate": user.JoinDate,
                        "EmailConfirmed": false,
                        "IsActive": true,
                        "SendSMS": true
                },{
                        "Id": localStorage.getItem('user-id'),
                        "Name": user.DisplayName,
                        "Description": desc,
                        "Photo": null,
                        "UserName": user.UserName,
                        "Email": null,
                        "JoinDate": user.JoinDate,
                        "EmailConfirmed": false,
                        "IsActive": true,
                        "SendSMS": true
                }]`
                let apps =  JSON.parse(aapps)
                for (let app in apps) {
                    console.log(app)
                }
        let Id = this.$store.state.jwt.nameid
        console.log(Id, "this is id")
      console.log(localStorage.getItem('user-id'), 'sda')
      let user = localStorage.getItem('user')
      let desc = user.Description
    
      console.log(desc, 'wtf') 
            this.axios({
                method: 'get',
                url: this.apiUrl + '/account/login', 
                headers: { 
                    "Authorization": this.$store.state.admin,
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method", 
                    'Accept': '*/*'
                }
                
            })
            .then (function(response) {
              var numberOfService
                console.log(response)
                // get number of service
                this.$store.state.servicNo = numberOfService
            })
            .catch( function(err) {
                console.log(err)
            })
          },
          getUser: function(id) {
            let apiUrl = "http://service.sirang.sabinarya.com"
               
            this.axios({
                method: 'get',
                url: apiUrl + '/api/UserManagement/' + id,
                headers: { 
                    "Authorization": this.$store.state.admin,
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
          mounted: function() {
              let Id = this.$store.state.jwt.nameid
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
