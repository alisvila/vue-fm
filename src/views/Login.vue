<template>

<div class="container">
    <div class="row">
        <div class="login-wrapper">
    <form class="form-signin">
      <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    </div>
    </div>
</div>

</template>
<script>
export default {

    name: 'login',
    data: {
        apiUrl: 'http://service.sirang.sabinarya.com/api',
        alert: false,
        type: "",
        msg: "",
        username: "",
        password: "",
        name: "",
        mobile: "",
        email: "",
    },
    methods: {
        login: function() {
            fetch(this.apiUrl + "/login", {
                method: "post",
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    grant_type:"password",
                    username: username,
                    password: password,
                    scope:"",
                    client_id:"ngAuthApp",
                    client_secret:""
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
            .then( (response) => {
                this.alert = true
                this.type= "alert-success"
                this.msg = "success"
            })
            .catch( (error) => {
                this.alert = true
                this.type= "alert-danger"
                this.msg = "error"
            })
        },

        regisetr: function() {
            fetch(this.apiUrl + "/login", {
                method: "post",
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: name,
                    username: username,
                    password: password,
                    Mobile: mobile,
                    Email: email,
                    Description: "finnoboom",
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
            .then( (response) => {
                this.alert = true
                this.type= "alert-success"
                this.msg = "success"
            })
            .catch( (error) => {
                this.alert = true
                this.type= "alert-danger"
                this.msg = "error"
            })

        }
    }
}

</script>

<style scoped>
.login-wrapper {
    margin: 19% auto;
    width: 400px;
    padding: 25px;
    border: 1px solid #e6e6e6;
    background-color: #fbfbfb;
}
.login-wrapper input {
    margin-bottom: 10px;
}
</style>