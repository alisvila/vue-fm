<template>
<div class="sidebar-nav">
<nav class="navbar navbar-default flex-column" role="navigation">
    <ul class="nav navbar-nav dir-rtl side-navbar">
        <a class="navbar-brand" href="#">
            <img class="logo" src="@/assets/finnoboom.png">
        </a>
        <p></p>
        <li class="active">
            <router-link to="/pannel" class="nav-link">
                <i class="fa fa-dashboard"></i><span>اپلیکیشن ها</span>
            </router-link>

        </li>
        <li class="active">
            <router-link to="/pannel/documents" class="nav-link">
            <i class="fa fa-dashboard"></i><span> مستندات فنی</span>
            </router-link>
            <ul>
                <li>
                </li><li>
                </li><li>
                </li>
            </ul>
        </li>
        <li class="active">
            <router-link to="/pannel/example" class="nav-link">
            <i class="fa fa-dashboard"></i><span>نمونه کد</span>
            </router-link>
        </li>
        <!-- <li><a  class="nav-link" href="/pannel/documents"><i class="fa fa-file-text"></i><span>مستندات فنی سرویسها</span></a></li>
        <li><a  class="nav-link" href="pdf/tashim.pdf" target="_blank"><i class="fa fa-file-pdf-o"></i><span>حساب میانی و تسهیم</span></a></li>
        <li><a  class="nav-link" href="#sample-code"><i class="fa fa-code"></i><span>نمونه کد</span></a></li> -->
    </ul>
    <p class="copyright">تمام حقوق این سایت برای شرکت سابین تجارت آریا محفوظ می‌باشد.</p>
</nav>
</div>

</template>

<script>
export default {
    name: 'SideMenu',
    data() {
        return {
            year: ''
        }
    },
    method: {
        calyear: function() {
            let d = new Date()
            this.year = d.getFullYear()
        }
    }
}
</script>


<style scoped>
.copyright {
    font-size: 14px;
    direction: rtl;
}
.navbar-brand {
    margin: 0 auto;
}

.logo {
    width: 190px;
}

.sidebar-nav .navbar-default {
    height: 100%;
    background: #f1f1f1;
    margin-bottom: -100px;
    padding: 0;
}

.sidebar-nav {
    color: #888888;
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
    /* margin: 3px 0; */
    line-height: 30pxt;
}

.sidebar-nav li a:hover {
    background-color: #ff9900;
    color: white;
}
.navbar-nav .nav-link {
    color: #888888;
    padding: 12px 31px;
}

.side-navbar {
    padding-top: 11px;
    width: 100%;
}

</style>