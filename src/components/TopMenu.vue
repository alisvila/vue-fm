<template>
<nav class="navbar navbar-default fixed-top rtl">
    <div class="navbar-header col-xs-5">
        <!-- <a class="navbar-brand" href="#"> -->
            <!-- <img class="logo" src="@/assets/finnoboom.png"> -->
        <span class="navbar-brand" >acc name</span>
        <!-- </a> -->
    </div>
    <ul class="nav pull-right messages">

    </ul>
    <ul class="nav mr-auto">
        <ul class="nav navbar-nav pull-right signout">
            <a href="/exit" class="top-link">خــروج</a>
        </ul>
        <!-- <ul class="nav navbar-nav pull-right change-pass"><a class="btn btn-default">تغییر رمز عبور</a>
            <img class="loading" src="svg/loop.svg" style="display: none;">
        </ul> -->
    </ul>
    <div class="notification alert hidden" role="alert">
    </div>
</nav>
</template>

<script>
export default {
    name: 'TopMenu',
}
</script>

<style scoped>

.logo {
    width: 190px;
}
.navbar-default {
    background-color: #92ebec;
    z-index: 1;
    box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.18);
    padding: 0 230px 0 0;
}

.rtl {
    direction: rtl;
}

.top-link {
    padding: 15px;
    color: #2c3e50;
    text-decoration: none;
}

.top-link:hover {
    background-color: #84d7d8

}
</style>