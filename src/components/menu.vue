<template>
    <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light bg-white ">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img class="logo" src="../assets/favicon.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                      <router-link to="/" :event="disabled ? '' : 'click'" class="nav-link" disabled>خانه</router-link>
                    <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
                </li>
                <li class="nav-item">
                      <router-link to="/" :event="disabled ? '' : 'click'" class="nav-link" disabled>صدور قبض</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" :event="disabled ? '' : 'click'" class="nav-link" disabled>پرداخت قبض</router-link>
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
<style>
.logo {
    width: 50px;
}
.bg-white {
    background-color: #f7f7f7;
    border-bottom: 1px solid #cacaca;
}
</style>