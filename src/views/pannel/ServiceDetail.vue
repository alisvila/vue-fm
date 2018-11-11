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
         },
        sectedService: ['f'],

        }
    },
    method: {

    }
}
</script>
<style>

.service-summary {
    border: 1px solid #ff9900;
    padding: 18px 0px;
}

</style>