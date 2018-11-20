<template>

  <div class="container-fluid">
    <TopMenu />
    <SideMenu />
    <div class="pannel-home">
    <div class="wrapper">

    <form-wizard @on-complete="submitService" 
                        shape="tab"
                        color="#ff9900"
                        next-button-text="بعدی"
                        back-button-text="قبلی"
                        finish-button-text="ذخیره"
                        title="افزودن برنامه جدید"
                        subtitle="">
        <tab-content title="اطلاعات عمومی"
                    icon="ti-user" 
                    :before-change="validateFirstStep"
                    >
                    
        <div class="row">
        <div class = "col-xs-12 col-md-6 right-column" >
        <div class="col-md-12 mb-3">
        <label for="validationTooltip01">نام برنامه</label>
                    <p class="sub-label">شناسه منحصر به فرد برنامه‌ی شما که برای فراخوانی سرویس‌ها استفاده میشود</p>
        <input v-model="formInput.appName" type="text" class="form-control" id="validationTooltip01" placeholder="" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>




        <div class="col-md-12 mb-3">
        <label for="validationTooltip01">آدرس IP</label>
                    <p class="sub-label"></p>
        <input v-model="formInput.IpAddress" type="text" class="form-control" id="validationTooltip01" placeholder="" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>



                <div class="col-md-12 mb-3">
            <label for="validationTooltip01">آدرس وب سایت برنامه</label>
            <p class="sub-label">این آدرس در صفحه دسترسی به کاربر نمایش داده میشود</p>
            <input v-model="formInput.webAddress" type="text" class="form-control" id="validationTooltip01" placeholder="" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                    
        <div class="col-md-12 mb-3">
            <label for="validationTooltip01">آدرس برگشت داده</label>
            <p class="sub-label">کاربر پس از اعطای دسترسی به این آدرس هدایت خواهد شد (تنها برای رویکرد</p>
            <input v-model="formInput.callBack" type="text" class="form-control" id="validationTooltip01" placeholder="" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
        </div>

        <div class = "col-xs-12 col-md-6 right-column" >



                    <div class="col-md-12 mb-3">
            <label for="validationTooltip01">شناسه برنامه</label>
            <p class="sub-label">شناسه منحصر به فرد برنامه‌ی شما که برای فراخوانی سرویس‌ها استفاده میشود</p>
            <input v-model="formInput.appCode" type="text" class="form-control" id="validationTooltip01" placeholder="" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>



        <div class="col-md-12 mb-3">
            <label for="validationTooltip01">نام شرکت</label>
                        <p class="sub-label"></p>

            <input v-model="formInput.companyName" type="text" class="form-control" id="validationTooltip01" placeholder="" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
            <div class="col-md-12 mb-3">
            <label for="validationTooltip01">نوع فعالیت</label>
                        <p class="sub-label">توضیحات مختصری در مورد فعالیت برنامه شما</p>

            <textarea v-model="formInput.activityType" rows="5" type="text" class="form-control" id="validationTooltip01" placeholder="" value="Mark" required />
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
        </div>

        </div>
        <Alert v-bind:type="type" v-bind:msg="msg" v-if="alert"></Alert>                    

                    
                    

        </tab-content>
        <tab-content title="سرویس ها"
                    icon="ti-settings" :before-change="validateSecondStep">




    <div class="col-xs-12 col-md-6">
        <hr>
        <div class="type-services">

            <div class="row" v-for="(service, index) in services" :key="index" >
                <div class="checkbox">
                    <label>
                        <input class="deposit" 
                                type="checkbox" 
                                v-model="sectedService" 
                                :value="service">{{service.name}}
                        <span class="scope"> ({{service.value}})</span>
                    </label>
                </div>
                <hr>
            </div>

        </div>

    </div>

    <div class="col-xs-12 col-md-6">
        <div class="deposit-requirement-wrapper"></div>
    </div>
        <Alert v-bind:type="type" v-bind:msg="msg" v-if="alert"></Alert>                    




        </tab-content>
        <tab-content title="ذخیره"
                    icon="ti-check"
                    
                    :before-change="validateThirdStep"
                    >
        
        <div class="summary">
            <div class="service-summary">
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
                    <td>آدرس IP:</td>
                    <td class="dir-ltr">{{formInput.IpAddress}}</td>
                    <td></td>
                    <td><i class="fa fa-check"></i></td>
                </tr>
                <tr>
                    <td>شماره موبایل:</td>
                    <td class="dir-ltr">{{formInput.appName}}</td>
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
        <div class="service-summary">
            <h3>سرویس های انتخاب شده</h3>
            <table class="table">
            <tbody>
                <tr v-for="(select, index) in sectedService" :key="index">
                    <td>{{select.name}}</td>
                    <!-- <td class="dir-ltr">{{select.value}}</td>
                    <td><i class="fa fa-check"></i></td> -->
                </tr>
            </tbody>
            </table>
        </div>
        <div class="info">
            <p>
                کاربر سرویس‌های فینوبوم (کلاینت) بدین وسیله اعلام می دارد
                 که از این امر آگاه است و رضایت دارد که ارائه خدمات به او مستلزم اختیار و اجازه به شرکت سابین تجارت آریا در برداشت مبلغ کارمزد سرویس‌های
                 فراخوانده شده از حساب تعیین شده، در طول یک دوره مشخص است که تاریخ آغاز و پایان آن مشخص شده، بر اساس کارمزدهای تعیین شده است.

            </p>
            <p>
                در صورتی که مشتری خواهان خاتمه دوره برداشت در تاریخی زودتر از موعد مقرر شود، این امر به درخواست کلاینت و با تسویه حساب بین کلاینت و شرکت سابین تجارت آریا انجام خواهد شد: کابر سرویس‌های فینوبوم (کلاینت) در صورت عدم تمایل به استفاده از سرویس‌های ارائه شده، می تواند با رعایت شرایط لازم
                 و پس از تسویه حساب با شرکت سابین تجارت آریا اجازه خود را ملغی کرده و به آن خاتمه دهد.
                 الغای اجازه می‌تواند به چند شیوه انجام شود:
            </p>
            <p>
            الف- به طور مستقیم از طریق صفحه اینترنتی کنسول توسعه دهنده فینوبوم که کلاینت در آن عضو است.
            </p>
            <p>
                ب- از طریق تماس با شرکت سابین تجارت آریا با شماره تلفن ۴۱۶۲۴۰۰۰ .
            </p>
            <div class="checkbox">
                    <label>
                        <input class="deposit" 
                                type="checkbox" 
                                v-model="formInput.privacy" 
                                value="checked">موارد بالا را میپذیرم
                    </label>
                </div>

            </div>
        </div>
                <Alert v-bind:type="type" v-bind:msg="msg" v-if="alert"></Alert>                    

        </tab-content>
    </form-wizard>

  </div>
  </div>
  </div>


</template>

<script>

import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import SideMenu from '@/components/SideMenu.vue'
import Alert from '@/components/alert.vue'
import TopMenu from '@/components/TopMenu.vue'
import allServices from '@/assets/services.json'


export default {
    name: 'NewService',
    components: {
        FormWizard,
        TabContent,
        SideMenu,
        TopMenu,
        Alert
        },
    data() {
       return {
           alert: false,
           msg: 'لطفا تمامی فیلد ها را با دقت پر نمایید',
           type: 'alert-danger',
         formInput: {
           user: '',
           appName: '',
           IpAddress: '',
           appCode: '',
           companyName: '',
           webAddress: '',
           callBack: '',
           activityType: '',
           privacy: ''
         },
         admin: '',
         apiUrl: 'http://service.sirang.sabinarya.com',
        sectedService: [],
        services: allServices,
         rules: {
           user: [{
             required: true,
             message: 'Please input Activity name',
             trigger: 'blur'
           }, {
             min: 3,
             max: 5,
             message: 'Length should be 3 to 5',
             trigger: 'blur'
           }],
           region: [{
             required: true,
             message: 'Please select Activity zone',
             trigger: 'change'
           }],
         }
        }
       },
       methods: {
           submitService: function() {
            let {$router, formInput} = this;
            let jsons;
            // let admin = localStorage.getItem('admin-token')
            let number = this.$store.state.servicNo;
            // let admin = this.$store.state.admin;
            let userName = this.$store.state.userName;
            let user =  JSON.parse(localStorage.getItem('user'))
            // console.log(JSON.parse(user.Description))
            let payload = [{
                                "id": number + 1,
                                "user": formInput.user,
                                "appName": formInput.appName,
                                "IpAddress": formInput.IpAddress,
                                "appCode": formInput.appCode,
                                "companyName": formInput.companyName,
                                "webAddress": formInput.webAddress,
                                "callBackUrl": formInput.callBack,
                                "activityType": formInput.activityType,
                                "sectedService": this.sectedService
            }]
            if (user.Description == null || user.Description == "") {
                jsons = payload
                console.log("true", jsons)
            }
            else {
                jsons = JSON.parse(user.Description).concat(payload)
            }
            let desc = JSON.stringify(jsons)
            console.log(desc, "this is desc")
            this.axios({
                method: 'put',
                // url: this.apiUrl + '/api/UserManagement', 
                url: 'http://127.0.0.1:4000/api/addService/',
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
                // console.log(response)               
                localStorage.setItem('user', JSON.stringify(response.data))
                $router.push('/pannel')
            })
            .catch( function(err) {
                console.log(err)
            })
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
        //  onComplete: this.submitService(),        

        beforeTabSwitch: function(){
          return true;
        },
        validateDemo: function() {
            return true
        },
        validateSecondStep: function() {
            // console.log(this.sectedService.length)
            if (this.sectedService != null && this.sectedService.length >= 1) {
                this.alert = false;
                return true

            }
            else {
                this.msg="یکی از سرویس ها را انتخاب نمایید"
                this.alert = true;
                return false
            }
        },
         validateFirstStep: function() {
             let {formInput} = this
             if (
                formInput.appName != null && formInput.appName.length > 4 &&
                formInput.IpAddress != null &&
                formInput.appCode != null &&
                formInput.companyName != null &&
                formInput.webAddress != null &&
                formInput.callBack != null &&
                formInput.activityType != null
                )
                {
                    this.alert = false;
                    return true 

                    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(formInput.IpAddress)) {
                        this.msg = "آدرس IP اشتباه است"
                    }
                    else {
                    }
                }
                else {
                    this.alert = true;
                    return false
                }
         },
         validateThirdStep: function() {
             if(this.formInput.privacy) {
                this.alert = false
                 return true
             }
             else {
                 this.msg = "لطفا شرایط و قوانین را بخوانید "
                 this.alert = true
                 return false
             }
         },


       },
       mounted() {
           this.getUser(localStorage.getItem('user-id'))
       },
       created() {
        }
}

</script>

<style>
.sub-label {
    font-size: 11px;
    color: gray;
    margin: 0;
}

.pannel-home {
    padding: 80px 225px 0 10px;
    direction: rtl;
    margin: 0;
}

.vue-form-wizard .wizard-progress-bar {
    float: right;
  }

  .vue-form-wizard .wizard-card-footer .wizard-footer-left {
    float: right;
  }

  .vue-form-wizard .wizard-card-footer .wizard-footer-right {
    float: left;
  }

.vue-form-wizard .wizard-nav-pills {
    padding: 0 15px;
}
.wizard-progress-with-circle {
    display: none;
}
.wrapper {
    -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
    margin: 16px;
}

.client-edit-scopes .services .type-services hr {
    border-top: 1px solid #eee;
}

.service-summary {
    border: 1px solid #ff9900;
    padding: 18px 0px;
    margin: 20px;
}

.info {
    margin: 30px;
    text-align: right;
}
@media screen and (max-width: 575px) {
    .pannel-home {
        padding: 80px 75px 0 10px;
    }
}

</style>


