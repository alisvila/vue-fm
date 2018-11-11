<template>

  <div class="container-fluid">
    <TopMenu />
    <SideMenu />
    <div class="pannel-home">
    <div class="wrapper">

    <form-wizard @on-complete="onComplete" 
                        shape="tab"
                        color="#ff9900"
                        next-button-text="بعدی"
                        back-button-text="قبلی"
                        finish-button-text="دخیره"
                        title="افزودن برنامه جدید"
                        subtitle="فیلان">
        <tab-content title="اطلاعات عمومی"
                    icon="ti-user" :before-change="beforeTabSwitch">

        <div class="row">
        <div class = "col-xs-12 col-md-6 right-column" >
        <div class="col-md-12 mb-3">
        <label for="validationTooltip01">نام برنامه</label>
        <input v-model="formInput.appName" type="text" class="form-control" id="validationTooltip01" placeholder="نامی که به کاربر نهایی نمایش داده میشود" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>

        <div class="col-md-12 mb-3">
            <label for="validationTooltip01">شناسه برنامه</label>
            <input v-model="formInput.appCode" type="text" class="form-control" id="validationTooltip01" placeholder="شناسه منحصر به فرد برنامه‌ی شما که برای فراخوانی سرویس‌ها استفاده میشود" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                <div class="col-md-12 mb-3">
            <label for="validationTooltip01">آدرس وب سایت برنامه</label>
            <input v-model="formInput.webAddress" type="text" class="form-control" id="validationTooltip01" placeholder="این آدرس در صفحه دسترسی به کاربر نمایش داده میشود" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                    
        <div class="col-md-12 mb-3">
            <label for="validationTooltip01">آدرس برگشت داده</label>
            <input v-model="formInput.callBack" type="text" class="form-control" id="validationTooltip01" placeholder="کاربر پس از اعطای دسترسی به این آدرس هدایت خواهد شد (تنها برای رویکرد Authorization_Code)" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
        </div>

        <div class = "col-xs-12 col-md-6 right-column" >
        <div class="col-md-12 mb-3">
        <label for="validationTooltip01">آدرس IP</label>
        <input v-model="formInput.IpAddress" type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>

        <div class="col-md-12 mb-3">
            <label for="validationTooltip01">نام شرکت</label>
            <input v-model="formInput.companyName" type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
            <div class="col-md-12 mb-3">
            <label for="validationTooltip01">نوع فعالیت</label>
            <textarea v-model="formInput.activityType" rows="5" type="text" class="form-control" id="validationTooltip01" placeholder="وضیحات مختصری در مورد فعالیت برنامه شما" value="Mark" required />
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                    
        </div>

        </div>

                    
                    

        </tab-content>
        <tab-content title="سرویس ها"
                    icon="ti-settings">




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




        </tab-content>
        <tab-content title="ذخیره"
                    icon="ti-check">
        
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
                    <td>آدرس IP (به صورت جدا شونده با کاما ','):</td>
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
                    <td class="dir-ltr">{{formInput.appName}}</td>
                    <td></td>
                    <td><i class="fa fa-check"></i></td>
                </tr>

                </tbody>
            </table>

        </div>
        <div class="service-summary">
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
        <div class="info">
            <p>
                کاربر سرویس‌های فینوبوم (کلاینت) بدین وسیله اعلام می دارد
                 که از این امر آگاه است و رضایت دارد که ارائه خدمات به او مستلزم اختیار و اجازه به شرکت سابین تجارت آریا در برداشت مبلغ کارمزد سرویس‌های
                 فراخوانده شده از حساب تعیین شده، در طول یک دوره مشخص است که تاریخ آغاز و پایان آن مشخص شده، بر اساس کارمزدهای تعیین شده است.

            </p>
            <p>
                در صورتی که مشتری خواهان خاتمه دوره برداشت در تاریخی زودتر از موعد مقرر شود، این امر به درخواست کلاینت و با تسویه حساب بین کلاینت و شرکت سابین تجارت آریا انجام خواهد شد: کابر سرویس‌های فینوتک (کلاینت) در صورت عدم تمایل به استفاده از سرویس‌های ارائه شده، می تواند با رعایت شرایط لازم
                 و پس از تسویه حساب با شرکت سابین تجارت آریا اجازه خود را ملغی کرده و به آن خاتمه دهد.
                 الغای اجازه می‌تواند به چند شیوه انجام شود:
            </p>
            <p>
            الف- به طور مستقیم از طریق صفحه اینترنتی کنسول توسعه دهنده فینوبوم که کلاینت در آن عضو است.
            </p>
            <p>
                ب- از طریق تماس با شرکت ارتباط فردا با شماره تلفن ۴۱۶۲۴۰۰۰ .
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
import TopMenu from '@/components/TopMenu.vue'
import allServices from '@/assets/services.json'


export default {
    name: 'NewService',
    components: {
        FormWizard,
        TabContent,
        SideMenu,
        TopMenu
        },
    data() {
       return {
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
         onComplete: function() {
           alert('Yay. Done!');
         },
            beforeTabSwitch: function(){
          return true;
        },
         validateFirstStep() {
           return new Promise((resolve, reject) => {
             this.$refs.ruleForm.validate((valid) => {
               resolve(valid);
             });
           })

         }
       }
}

</script>

<style>

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
}

.info {
    margin: 30px;
    text-align: right;
}

</style>


