
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
            let alert = confirm(`آیا از حذف سرویس ${this.services[id][0].appName} مطمعن هستید؟ `)
            if (alert) {
                console.log(id)
                let newServ = this.services.splice(id, 1)

                let chert = new Array
                for (let i = 0; i < newServ.length; i++) {
                    chert.push(JSON.stringify(newServ[i]))
                }
                newServ = chert
                let log = JSON.stringify(newServ)
                this.updateUser(JSON.stringify(newServ))

            }
            else {
                console.log("no")
            }
            // this.$refs.myModalRef.show()

        },
        getAdmin: function () {
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
                .then(function (response) {
                    let token = response.data.access_token
                    localStorage.setItem('admin-token', token)

                })
                .catch(function (err) {
                    console.log(err)
                })
        },
        getServices: function () {

            let Id = this.$store.state.jwt.nameid

            let user = JSON.parse(localStorage.getItem('user'))
            let desc = JSON.parse(user.Description)
            let chert = new Array
            // this.services = desc;
            // desc.splice(0,1)
            for (let i = 0; i < desc.length; i++) {
                chert.push(JSON.parse(desc[i]))
            }

            this.services = chert
        },

        getUser: function (id) {
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
                .then(function (response) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                })
                .catch(function (err) {
                    console.log(err)
                })
        },
    },

    beforeMount: function () {
        // this.getAdmin()
        let Id = JSON.parse(localStorage.getItem('jwt')).nameid
        api.getApiCall(Id)
        //   this.getUser(Id)
    },

    mounted: function () {
        console.log("fiasda asdaf")
        //   this.getServices()
        let filan = api.apiCall()
        console.log(filan, "bargashtin index")
    },
    created: function () {
        // this.getAdmin()
    }
}