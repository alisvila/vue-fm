<template>
<div>
<TopMenu />
  <div class="container-fluid">
    <SideMenu />
    <div class="pannel-home">
    <HeadText title="" subtitle=""/>
    <div class="row">

        <div class="col-lg-4 col-sm-12 col-md-6" v-for="(i, index) in services" :key="index">
            <card :link="`/pannel/app/${index}`" status="در حال بررسی" :image="require('@/assets/feature.png')" :name="i.appName" :id="index"/>
        </div>

        <div class="col-lg-4 col-sm-12 col-md-6">
            <card link="/pannel/new" status="افزودن برنامه جدید" :image="require('@/assets/finno-new.png')" name="جدید" isNew/>
        </div>
    </div>
    <div class="row">
              <div class="col-lg-4 col-sm-12 col-md-6">
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
import { page } from 'vue-analytics'
import api from '@/_helper/api'


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
        track() {
            page('/pannel')
        },
        SendService: function (serviceId) {
            localStorage.setItem("service-detail", this.services[serviceId][0])
        },
        updateUser: function (desc) {
            let user = JSON.parse(localStorage.getItem('user'))

            this.axios({
                method: 'put',
                // url: this.apiUrl + '/api/UserManagement',
                url: 'http://127.0.0.1/api/updateUser',
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
                    "Content-Type": "application/json",
                }
            })
                .then(function (response) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                })
                .catch(function (err) {
                    console.log(err)
                })
        },

        hideModal() {
            this.$refs.myModalRef.hide()
        },
        deleteService: function (id) {
            let alert = confirm(`آیا از حذف سرویس ${this.services[id].appName} مطمعن هستید؟ `)
            if (alert) {
                this.services.splice(id, 1)

                this.updateUser(JSON.stringify(this.services))

            }
            else {
                console.log("no")
            }

        },

        getServices: function () {

            let Id = this.$store.state.jwt.nameid

            let user = JSON.parse(localStorage.getItem('user'))
            // let desc = JSON.parse(user.Description)
            // let chert = new Array
            // this.services = desc;
            // desc.splice(0,1)
            // for (let i = 0; i < desc.length; i++) {
            //     chert.push(JSON.parse(desc[i]))
            // }

            this.services = JSON.parse(user.Description)
        },

           getUser: function(id) {
               
            this.axios({
                method: 'get',
                url: 'http://127.0.0.1:4000/api/getUser/' + localStorage.getItem('user-id'),
                headers: { 
                    "Content-Type": "application/json",
                    'Accept': '*/*'
                }
            })
            .then (function(response) {
                localStorage.setItem('user', JSON.stringify(response.data))
                // console.log(response.data)
            })
            .catch( function(err) {
                console.log(err)
            })
           },
    },

    beforeMount: function () {
        let Id = JSON.parse(localStorage.getItem('jwt')).nameid
          this.getUser(Id)
    },

    mounted: function () {
        this.getServices()
    },
    created: function () {
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

@media screen and (max-width: 575px) {
    .pannel-home {
        padding: 80px 75px 0 10px;
    }
}
</style>
