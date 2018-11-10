<template>
<div class="sidebar-nav">
<nav class="navbar navbar-default flex-column" role="navigation">
    <ul class="nav navbar-nav dir-rtl side-navbar">
        <p class="text-center"><img src="svg/user.svg"></p>
        <div class="text-center">ali attar</div>
        <p></p>
        <li class="active"><a class="nav-link" href="/pannel"><i class="fa fa-dashboard"></i><span>اپلیکیشن ها</span></a></li>
        <li class="active"><a class="nav-link" href="/pannel"><i class="fa fa-dashboard"></i><span>راهنمای فیلان</span></a></li>
        <li><a  class="nav-link" href="#guide"><i class="fa fa-question-circle"></i><span>مفاهیم اولیه</span></a></li>
        <li><a  class="nav-link" href="#apiDoc"><i class="fa fa-file-text"></i><span>مستندات فنی سرویسها</span></a></li>
        <li><a  class="nav-link" href="pdf/tashim.pdf" target="_blank"><i class="fa fa-file-pdf-o"></i><span>حساب میانی و تسهیم</span></a></li>
        <li><a  class="nav-link" href="#sample-code"><i class="fa fa-code"></i><span>نمونه کد</span></a></li>
    </ul>
</nav>
</div>

</template>

<script>
export default {
    name: 'SideMenu',
}
</script>


<style scoped>
.sidebar-nav .navbar-default {
    height: 100%;
    background: #2a306d;
    margin-bottom: -100px;
    padding: 0;
}

.sidebar-nav {
    color: #fff;
    right: 250px;
    background: #f8f8f8;
    list-style: none;
    height: 100%;
    margin: 0;
    margin-right: -250px;
    overflow-y: auto;
    padding: 0;
    font-size: 16px;
    position: fixed;
    top: 0;
    width: 230px;
    z-index: 1000;
    transition: all .5s ease;
}

.sidebar-nav li {
    /* padding: 10px 31px; */
    text-align: right;
    display: block;
    width: 100%;
    height: 50px;
    white-space: nowrap;
    margin: 3px 0;
    line-height: 30pxt;
}

.sidebar-nav li a:hover {
    background-color: red;
    color: white;
}
.navbar-nav a {
    color: #fff!important;
    padding: 10px 31px;
}

.side-navbar {
    padding-top: 58px;
    width: 100%;
}

</style>