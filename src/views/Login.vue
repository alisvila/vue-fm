<template>

<div class="container">
    <div class="row">
        <div class="login-wrapper">
    <form @submit.prevent="login" class="form-signin">
      <img class="mb-4 logo" src="../assets/finnoboom.png" alt="">
      <label for="inputEmail" class="sr-only">آدرس ایمیل</label>
      <input v-model="username" type="text" id="inputEmail" class="form-control" placeholder="آدرس ایمیل" required autofocus>
      <label for="inputPassword" class="sr-only">روز عبور</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="روز عبور" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> مرا به خاطر بسپار
        </label>
      </div>
      <button class="btn btn-lg btn-finno btn-block" type="submit" >ورود</button>
    </form>
    </div>
    </div>
</div>

</template>
<script>
import VueJwtDecode from 'vue-jwt-decode'
export default {

    name: 'login',
    data() {
        return {
        apiUrl: 'http://service.sirang.sabinarya.com/api',
        alert: false,
        type: "",
        msg: "",
        username: "",
        password: "",
        name: "",
        mobile: "",
        email: "",
        resp: {"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiI0NiIsInVuaXF1ZV9uYW1lIjoiYWxpYW0iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL2FjY2Vzc2NvbnRyb2xzZXJ2aWNlLzIwMTAvMDcvY2xhaW1zL2lkZW50aXR5cHJvdmlkZXIiOiJBU1AuTkVUIElkZW50aXR5IiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiI5Y2JiY2E4Mi0zYTViLTRhNDktODIxNS05YTg2NGIyZWU5NjUiLCJyb2xlIjoi2YXYr9uM2LEiLCJTZXNzaW9uSUQiOiJmMzNmNjdjYmFhMTI0ZmExYTJhZTc3NjA5NzhjNTYxMSIsIkJ1c2luZXNzUm9sZSI6IjEiLCJQZXJtaXNzaW9ucyI6WyIxMTAiLCIxMTEiLCIxMTIiLCIxMTMiLCIxMTQiLCIxMTUiLCIxMTYiLCIxMTciLCIxMTgiLCIxMTkiLCIxMjAiLCIxMjEiLCIyMDAiLCIyMDEiLCIyMDIiLCIyMDMiLCIyMDQiLCIyMDUiLCIyMDYiLCIyMDciLCIyMDgiLCIyMDkiLCIyMTAiLCIyMjEiLCIyMjIiLCIyMjMiLCIyMjQiLCIyMjUiLCIyMjYiLCIyMjciLCIyMjgiLCIyMjkiLCIyMzAiLCIyMzEiLCIyMzIiLCIyMzMiLCIyMzQiLCIyMzUiLCIyMzYiLCIyMzciLCIyMzgiLCIyMzkiLCIyNDAiLCIyNDEiLCIyNDIiLCIyNDMiLCIyNDQiLCIyNDUiLCIyNDYiLCIyNDciLCIyNDgiLCIyNDkiLCIyNTAiLCIyNTEiLCIyNTIiLCIzMDAiLCIzMDEiLCIzMDIiLCIzMDMiLCIzMTAiLCIzMTEiLCIzMTIiLCIzMTMiLCIzMTQiLCIzMTUiLCIzMTYiLCIzMTciLCIzMTgiLCIzMTkiLCIzMjAiLCIzMjEiLCIzMjIiLCIzMjMiLCIzMjQiLCIzMjUiLCIzMjYiLCIzMjciLCIzMjgiLCIzMjkiLCIzMzAiLCIzMzEiLCIzMzIiLCIzMzMiLCIzMzQiLCIzMzUiLCIzMzYiLCIzMzciLCIzMzgiXSwiRGlzcGxheU5hbWUiOiJhbGkiLCJpc3MiOiJNQmlzc3VlciIsImF1ZCI6IjQxNGUxOTI3YTM4ODRmNjhhYmM3OWY3MjgzODM3ZmQxIiwiZXhwIjoxNTU5Mjg5OTkwLCJuYmYiOjE1NDIwMDk5OTB9.5BIRb28bf5Mn1SuwaFd3UZa8T9LrIoHhcI25nEomC8Q","token_type":"bearer","expires_in":17279999,"refresh_token":"f33f67cbaa124fa1a2ae7760978c5611","as:client_id":"ngAuthApp","userName":"aliam",".issued":"Mon, 12 Nov 2018 08:06:30 GMT",".expires":"Fri, 31 May 2019 08:06:30 GMT"}
        }
    },
    methods: {
        login: function() {
            const { username, password, $store, $router} = this
            console.log("hereee")
            var token = "bearer " + this.resp.access_token
            localStorage.setItem('user-token', token)
            // delete this line later
            // $store.state.admin = token
            $store.state.userName = username

            this.axios({
                method: 'post',
                url: this.apiUrl + '/account/login', 
                data: `grant_type=password&username=${username}&password=${password}&client_id=ngAuthApp`,
                headers: { 
                    "content-type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method", 
                    'Accept': '*/*'
                    }
            })
            .then (function(response) {

                token = response.data.access_token
                let Id = VueJwtDecode.decode(token).nameid
                let dName = VueJwtDecode.decode(token).DisplayName
                let userName = VueJwtDecode.decode(token).unique_name
                localStorage.setItem('user-token', token)
                localStorage.setItem('user-id', Id)
                localStorage.setItem('dname', dName)

                let userfilan = {
                    Id, userName, dName
                }

                localStorage.setItem('userfilan', userfilan)
                $store.state.jwt = VueJwtDecode.decode(token)
                console.log(VueJwtDecode.decode(token).nameid)
                $router.push('/pannel/')
            })
            .catch( function(err) {
                console.log(err)
            })

        },

    }
}

</script>

<style scoped>
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
</style>