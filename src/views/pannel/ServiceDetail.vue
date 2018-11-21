<template>
<div>
    <TopMenu />
    <SideMenu />
    <div class="container-fluid">
        <SideMenu />
        <div class="pannel-home">
            <div class="">
                        
        <div class="summary">
            <div class="service-summary wrapper">
            <h3>مشخصات عمومی</h3>
            <table class="table">
                <tbody>
                <tr>
                    <td>نام اپلیکیشن:</td>
                    <td class="dir-ltr">{{formInput.appName}}</td>
                    <td><i class="fa fa-check"></i></td>
                    <td></td>
                </tr>
                <tr>
                    <td>نام شرکت:</td>
                    <td class="dir-ltr">{{formInput.companyName}}</td>
                    <td><i class="fa fa-check"></i></td>
                    <td><i class="fa fa-check"></i></td>
                </tr>
                <tr>
                    <td>نوع فعالیت:</td>
                    <td class="dir-ltr">{{formInput.activityType}}</td>
                    <td><i class="fa fa-check"></i></td>
                    <td><i class="fa fa-check"></i></td>
                </tr>
                <tr>
                    <td>آدرس وبسایت برنامه:</td>
                    <td class="dir-ltr">{{formInput.webAddress}}</td>
                    <td></td>
                    <td><i class="fa fa-check"></i></td>
                </tr>
                <tr>
                    <td>آدرس برگشت داده:</td>
                    <td class="dir-ltr">{{formInput.callBack}}</td>
                    <td></td>
                    <td><i class="fa fa-check"></i></td>
                </tr>                
                <tr>
                    <td>آدرس IP (به صورت جدا شونده با کاما ','):</td>
                    <td class="dir-ltr">{{formInput.IpAddress}}</td>
                    <td></td>
                    <td><i class="fa fa-check"></i></td>
                </tr>
                <tr>
                    <td>شماره موبایل:</td>
                    <td class="dir-ltr">{{formInput.mobile}}</td>
                    <td></td>
                    <td><i class="fa fa-check"></i></td>
                </tr>
                <tr>
                    <td>آدرس ایمیل:</td>
                    <td class="dir-ltr">{{formInput.email}}</td>
                    <td></td>
                    <td><i class="fa fa-check"></i></td>
                </tr>

                </tbody>
            </table>

        </div>
        <div class="service-summary wrapper">
            <h3>سرویس ها</h3>
            <table class="table">
            <tbody>
                <tr v-for="(select, index) in sectedService" :key="index">
                    <td>{{select.name}}</td>
                    <td class="dir-ltr">{{select.value}}</td>
                    <td><i class="fa fa-check"></i></td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>

            </div>
        </div>

    </div>
</div>

</template>

<script>

import SideMenu from '@/components/SideMenu.vue'
import TopMenu from '@/components/TopMenu.vue'
import config from '@/config'

export default {
    name: 'AppDetail',
    components: {
        SideMenu,
        TopMenu
        },
    data() {
        return {
        formInput: {
           user: 'fil',
           appName: 'f',
           IpAddress: 'f',
           appCode: 'f',
           companyName: 'f',
           webAddress: 'f',
           callBack: 'f',
           activityType: 'f',
           mobile: '',
           email: ''
         },
        sectedService: [],
        s: this.$route.params.id,
        apiUrl: 'http://service.sirang.sabinarya.com',
        services: '',
        service: '',
        }
    },
    methods: {
        updateForm: function() {
            let user = JSON.parse(localStorage.getItem('user'))
            let {formInput, service} = this
            formInput.appName = service.appName
            formInput.IpAddress = service.IpAddress
            formInput.appCode = service.appCode
            formInput.callBack = service.callBack
            formInput.webAddress = service.webAddress
            formInput.activityType = service.activityType
            formInput.companyName = service.companyName
            formInput.mobile = user.mobile
            formInput.email = user.email
            this.sectedService = service.sectedService

        },

            updateUser: function(desc) {
            let user =  JSON.parse(localStorage.getItem('user'))

            this.axios({
                method: 'put',
                url: config.api + '/api/updateUser',
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
                    'Accept': '*/*'
                    }
            })
            .then (function(response) {
                localStorage.setItem('user', JSON.stringify(response.data))
            })
            .catch( function(err) {
                console.log(err)
            })
      },

        getServices: function() {

        let Id = this.$store.state.jwt.nameid

        let user = JSON.parse(localStorage.getItem('user'))
        let desc = JSON.parse(user.Description)
        let chert = new Array
        // this.services = desc;
        // desc.splice(0,1)
        // for (let i=0; i < desc.length; i++) {
        //     chert.push(JSON.parse(desc[i]))
        // }
    
        // this.services = chert
        console.log(this.s)
        this.service = desc[this.s]
        this.updateForm()
          },

          getUser: function(id) {               
               
            this.axios({
                method: 'get',
                url: config.api + '/api/getUser/' + localStorage.getItem('user-id'),
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

          beforeMount: function() {
              let Id = JSON.parse(localStorage.getItem('jwt')).nameid
              this.getUser(Id)
          },

          mounted: function() {
              this.getServices()
            },
         created: function() {
         }




    }

</script>
<style>

.service-summary {
    border: 1px solid #ff9900;
    padding: 18px 0px;
}

</style>