<template>

<div class="container">
    <div class="row">
        <div class="login-wrapper">
            <form class="form-signin">
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
                <a class="btn btn-lg btn-finno btn-block" @click="regisetr">ثبت نام</a>
            </form>
        </div>
    </div>
</div>

</template>
<script>
export default {

    name: 'login',
    data() {
        return {
            apiUrl: 'http://test-service.sirang.sabinarya.com',
            alert: false,
            type: "",
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
        regisetr: function() {
            fetch(this.apiUrl + "/api/UserManagement", {
                method: "post",
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: this.fname + " " + this.lname,
                    username: this.fname + this.lname + "finno",
                    password: this.password,
                    Mobile: this.mobile,
                    Email: this.email,
                    Description: "finnoboom " + this.company,
                })
            })
            .then( (response) => {
                if (!response.ok) {
                throw Error(response.statusText);
                }
                else {
                return response;
                }
            })
            .then( () => {
                this.alert = true
                this.type= "alert-success"
                this.msg = "success"
            })
            .catch( () => {
                this.alert = true
                this.type= "alert-danger"
                this.msg = "error"
            })

        }
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
</style>