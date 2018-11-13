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
            console.log(user)
            console.log("bavar kon service dar")
            console.log(this.sectedService)

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
        this.service = this.services[this.s][0]
        console.log(this.service, '------------')
        this.updateForm()
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

.service-summary {
    border: 1px solid #ff9900;
    padding: 18px 0px;
}

</style>