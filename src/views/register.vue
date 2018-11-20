<template>

<div class="container">
    <div class="row">
        <div class="login-wrapper">
            <form class="form-signin" @submit.prevent="register">
                <img class="mb-4 logo" src="../assets/finnoboom.png" alt="">

                <input v-model="fname" type="text" class="form-control" placeholder="نام" required>
                <label for="" class="sr-only"></label>

                <input v-model="lname" type="text" class="form-control" placeholder="نام خوانوادگی" required>
                <label for="" class="sr-only"></label>

                <label for="" class="sr-only">آدرس ایمیل</label>
                <input v-model="email" type="email" class="form-control" placeholder="آدرس ایمیل" required autofocus>
                
                <label for="" class="sr-only"></label>
                <input v-model="password" type="password" class="form-control" placeholder="کلمه عبور" required>

                <label for="" class="sr-only"></label>
                <input v-model="repassword" type="password" class="form-control" placeholder="تکرار کلمه عبور" required>

                <label for="" class="sr-only"></label>
                <input v-model="mobile" type="number" class="form-control" placeholder="شماره همراه" required>

                <label for="" class="sr-only"></label>
                <input v-model="company" type="text"  class="form-control" placeholder="نام شرکت" required>

                <div class="checkbox mb-3">
                </div>
                <button class="btn btn-lg btn-finno btn-block submit" type="register">ثبت نام</button>
            </form>
        </div>
    </div>
        <div class="alert-wrapper">
            <Alert v-bind:type="type" v-bind:msg="msg" v-if="alert"></Alert>                    
        </div>
</div>

</template>
<script>
import Alert from '@/components/alert.vue'


export default {
    name: 'login',
    components: {
        Alert
    },
    data() {
        return {
            apiUrl: 'http://service.sirang.sabinarya.com',
            alert: false,
            type: "alert-danger",
            msg: "",
            fname: "",
            lname: "",
            username: "",
            password: "",
            repassword: "",
            mobile: "",
            email: "",
            company: "",
            IsActive: true,
            EmailConfirmed: true,
        }
    },
    methods: {
        register: function() {
            let {$router, alert, msg} = this
           
                this.axios({
                method: 'post',
                url: 'http://127.0.0.1:4000/api/register',

                data: {
                    Name: this.fname + " " + this.lname,
                    username: this.mobile,
                    password: this.password,
                    Mobile: this.mobile,
                    Email: this.email,
                    "IsActive": true,
                    "EmailConfirmed": true,
                    Description: "[]",
                },
                headers: { 
                },
                })
                .then (function(response) {
                    $router.push('/login')
                    console.log(response)
                    alert = false

                })
                .catch( function(err) {
                    console.log(err.response.data)
                    msg = err.response.data
                    alert = true
                })


        }
    },
            beforeMount: function() {

          },

          mounted: function() {
            },
         created: function() {
         }
};

</script>

<style scoped>

.login-wrapper {
    margin: 15% auto;
    width: 445px;
    padding: 40px;
    border: 1px solid #e6e6e6;
    background-color: #fbfbfb;
    direction: rtl;
}
.login-wrapper input {
    margin-bottom: 10px;
}

.logo {
    width: 96%;
}

.alert-wrapper {

    position: inherit;
    margin: 0 auto;
    width: 445px;
    border-radius: 1px;
}

.submit {
    color: white;
}
</style>