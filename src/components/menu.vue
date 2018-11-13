<template>
    <nav id="menu" class="fixed-top navbar navbar-expand-lg navbar-light bg-light bg-white ">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img class="logo" src="../assets/finno.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <!-- <router-link to="/" class="nav-link">خانه</router-link> -->
                        <a class="nav-link" href="#home">صفحه اصلی <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#partners">همکاران تجاری<span class="sr-only">(current)</span></a>
                        <!-- <router-link to="/" class="nav-link">صدور قبض</router-link> -->
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">خدمات<span class="sr-only">(current)</span></a>
                        <!-- <router-link to="/" class="nav-link">پرداخت قبض</router-link> -->
                    </li>
                    <li class="nav-item">
                        <!-- <router-link to="/register" class="nav-link">ثبت</router-link> -->
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item login">
                        <a href="/login">ورود به پنل</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Menu',
}
</script>
<style scoped>

.navbar {
    direction: rtl;
}

.logo {
    width: 50px;
}
.bg-white {
    background-color: #f7f7f7;
    border-bottom: 1px solid #cacaca;
}

.mr-auto, .mx-auto {
    margin-left: auto !important;
    margin-right: 0 !important;
}

.login a {
    background-color: #ff9900;
    color: white;
    border-radius: 5px;
    padding: 15px;
}
.login a:hover {
    background-color: #ff9900;
    color: white;
}

</style>