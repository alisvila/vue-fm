<template>

<div class="container">
    <div class="row">
        <div class="login-wrapper">
    <form @submit.prevent="login" class="form-signin">
      <img class="mb-4 logo" src="../assets/finnoboom.png" alt="">
      <label for="inputEmail" class="sr-only">تلفن همراه</label>
      <input v-model="username" type="text" id="inputEmail" class="form-control" placeholder="تلفن همراه" required autofocus>
      <label for="inputPassword" class="sr-only">روز عبور</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="رمز عبور" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> مرا به خاطر بسپار
        </label>
      </div>
      <button class="btn btn-lg btn-finno btn-block submit" type="submit" >ورود</button>
    </form>
    <router-link to="/register" class="nav-link register-link">ثبت نام کاربر جدید</router-link>
    
    </div>
    </div>
</div>

</template>
<script>
import VueJwtDecode from 'vue-jwt-decode'
import config from '@/config'

export default {

    name: 'login',
    data() {
        return {
        apiUrl: 'http://test-service.sirang.sabinarya.com/api',
        alert: false,
        type: "",
        msg: "",
        username: "",
        password: "",
        name: "",
        mobile: "",
        email: "",
        }
    },
    methods: {
        login: function() {
            const { username, password, $store, $router, $jwt} = this

            this.axios({
                method: 'post',
                url: config.api + '/api/login', 
                data: `grant_type=password&username=${username}&password=${password}&client_id=ngAuthApp`,
                headers: { 
                    "content-type": "application/x-www-form-urlencoded",
                    }
            })
            .then (function(response) {
                
                let token = response.data.access_token
                let Id = $jwt.decode(token).nameid
                let dName = $jwt.decode(token).DisplayName
                let userName = $jwt.decode(token).unique_name
                localStorage.setItem('user-id', Id)
                localStorage.setItem('dname', dName)

                $store.state.userName = username
                let userfilan = {
                    Id, userName, dName
                }

                localStorage.setItem('jwt', JSON.stringify($jwt.decode(token)))
                $router.push('/pannel/')
            })
            .catch( function(err) {
                console.error(err)
            })

        },

    }
}

</script>

<style scoped>

.register-link {
    margin-top: 15px;
    padding: 0;
}

.login-wrapper {
    margin: 19% auto;
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
.submit {
    color: white;
}
</style>