<template>

  <div class="container-fluid">
    <SideMenu />
    <div class="pannel-home">
    <div class="wrapper">

    <form-wizard @on-complete="onComplete" 
                        shape="tab"
                        color="#9b59b6">
        <tab-content title="طلاعات عمومی"
                    icon="ti-user" :before-change="beforeTabSwitch">

        <div class="row">
        <div class = "col-xs-12 col-md-6 right-column" >
        <div class="col-md-12 mb-3">
        <label for="validationTooltip01">نام برنامه</label>
        <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="نامی که به کاربر نهایی نمایش داده میشود" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>

        <div class="col-md-12 mb-3">
            <label for="validationTooltip01">شناسه برنامه</label>
            <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="شناسه منحصر به فرد برنامه‌ی شما که برای فراخوانی سرویس‌ها استفاده میشود" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                <div class="col-md-12 mb-3">
            <label for="validationTooltip01">آدرس وب سایت برنامه</label>
            <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="این آدرس در صفحه دسترسی به کاربر نمایش داده میشود" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                    
        <div class="col-md-12 mb-3">
            <label for="validationTooltip01">آدرس برگشت داده</label>
            <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="کاربر پس از اعطای دسترسی به این آدرس هدایت خواهد شد (تنها برای رویکرد Authorization_Code)" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
        </div>

                <div class = "col-xs-12 col-md-6 right-column" >
        <div class="col-md-12 mb-3">
        <label for="validationTooltip01">آدرس IP</label>
        <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>

        <div class="col-md-12 mb-3">
            <label for="validationTooltip01">نام شرکت</label>
            <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                <div class="col-md-12 mb-3">
            <label for="validationTooltip01">نوع فعالیت</label>
            <textarea v-model="fname" rows="5" type="text" class="form-control" id="validationTooltip01" placeholder="وضیحات مختصری در مورد فعالیت برنامه شما" value="Mark" required />
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                    
        </div>

        </div>

                    
                    

        </tab-content>
        <tab-content title="سرویس ها"
                    icon="ti-settings">

        <div class="col-md-4 mb-3">
        <label for="validationTooltip01">First name</label>
        <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>

        <div class="col-md-4 mb-3">
            <label for="validationTooltip01">First name</label>
            <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                <div class="col-md-4 mb-3">
            <label for="validationTooltip01">First name</label>
            <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                    
        <div class="col-md-4 mb-3">
            <label for="validationTooltip01">First name</label>
            <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
            <div class="valid-tooltip">
                Looks good!
            </div>
        </div>
                    
                    




        </tab-content>
        <tab-content title="ذخیره"
                    icon="ti-check">



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


export default {
    name: 'NewService',
    components: {
        FormWizard,
        TabContent,
        SideMenu
        },
    data() {
       return {
         formInline: {
           user: '',
           region: ''
         },
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
    padding: 80px 215px 0 10px;
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


</style>


