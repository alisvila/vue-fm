<template>
<nav class="navbar navbar-default fixed-top rtl">
    <div class="navbar-header col-xs-5">
        <a class="navbar-brand" href="#">
            <img class="logo" src="@/assets/finnoboom.png">
        </a>
    </div>
    <ul class="nav pull-right messages">
        <li class="dropdown" id="header_inbox_bar">
            <span class="dropdown-toggle" data-toggle="dropdown" href="index.html">
            <i class="fa fa-envelope-o"></i>
            <i class="badge bg-theme" style="display: none;"></i>
            </span>
        </li>
    </ul>
    <ul class="nav mr-auto">
        <ul class="nav navbar-nav pull-right signout">
            <a class="btn btn-default">خــروج</a>
        </ul>
        <ul class="nav navbar-nav pull-right change-pass"><a class="btn btn-default">تغییر رمز عبور</a>
            <img class="loading" src="svg/loop.svg" style="display: none;">
        </ul>
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
    width: 200px;
}
.navbar-default {
    background-color: #f1f1f1;
    z-index: 9999;
    box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.18);
}

.rtl {
    direction: rtl;
}

a.btn {
    border: 1px solid red;
    background-color: red;
}
</style>