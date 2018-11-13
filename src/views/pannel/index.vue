<template>
<div>
<TopMenu />
  <div class="container-fluid">
    <SideMenu />
    <div class="pannel-home">
    <HeadText title="" subtitle=""/>
    <div class="row">

        <div class="col-lg-4 col-sm-12 col-md-6" v-for="(i, index) in services" :key="index">
            <card :link="`/pannel/app/${index}`" status="در حال بررسی" :image="require('@/assets/feature.png')" :name="i[0].appName" :id="index"/>
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

  <div>
    <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-btn class="mt-3" variant="outline-secendory" @click="hideModal">بله</b-btn>
        <b-btn class="mt-3" variant="outline-success" @click="hideModal">خیر</b-btn>
    </b-modal>
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
          apiUrl: 'http://service.sirang.sabinarya.com',
          services: ''
      }
  },
  methods: {
      SendService: function(serviceId){
          console.log("trriger")
          console.log(this.services[serviceId][0])
          localStorage.setItem("service-detail", this.services[serviceId][0] )
      },
      updateUser: function(desc) {
            let user =  JSON.parse(localStorage.getItem('user'))
            console.log(user)

            this.axios({
                method: 'put',
                url: this.apiUrl + '/api/UserManagement', 
                data: JSON.stringify({
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
                }),
                headers: { 
                    "Authorization": "bearer " + localStorage.getItem('admin-token'),
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    'Accept': '*/*'
                    }
            })
            .then (function(response) {
                console.log(response)               
                localStorage.setItem('user', JSON.stringify(response.data))
            })
            .catch( function(err) {
                console.log(err)
            })
      },

    hideModal () {
      this.$refs.myModalRef.hide()
    },
      deleteService: function(id) {
          console.log(this.services[id][0].appName)
          let alert = confirm(`آیا از حذف سرویس ${this.services[id][0].appName} مطمعن هستید؟ `)
          if (alert) {
              console.log(id)
              let newServ = this.services.splice(id, 1)

            let chert = new Array
            for (let i=0; i < newServ.length; i++) {
                chert.push(JSON.stringify(newServ[i]))
            }
            newServ = chert
              let log = JSON.stringify(newServ)
              this.updateUser(JSON.stringify(newServ))

              console.log(JSON.parse(log))
          }
          else {
              console.log("no")
          }
        // this.$refs.myModalRef.show()

      },
          getAdmin: function() {
            this.axios({
            method: 'post',
            url: 'http://service.sirang.sabinarya.com/api/account/login', 
            data: `grant_type=password&username=filan&password=123456&client_id=ngAuthApp`,
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
        let chert = new Array
        // this.services = desc;
        console.log(desc.length)
        // desc.splice(0,1)
        console.log(user)
        for (let i=0; i < desc.length; i++) {
            chert.push(JSON.parse(desc[i]))
        }
    
        this.services = chert
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
                // this.getAdmin()
              let Id = JSON.parse(localStorage.getItem('jwt')).nameid
              this.getUser(Id)
          },

          mounted: function() {
              this.getServices()
            },
         created: function() {
                this.getAdmin()
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
