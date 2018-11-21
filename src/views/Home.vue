<template>
 <div>
    <full-page ref="fullpage" :options="options">
        <Menu />

        <div class="section">
                <div class="middle-content">
                    <img class="logo" src="../assets/finnoboom.png">
                    <h1 class="sub-text">
                        تجلی ایده های پرداخت شما
                    </h1>
                </div>
            <div class="sub-logo">
                <img src="../assets/logo.png">
            </div>
        </div>


        <div class="section">
            <div class="section-title">
                <h1>درباره فینوبوم</h1>
            </div>
                <div class="middle-content">
                    <p class="sub-text">
                        فینوبوم بستری از امکانات و فناوری های مالی د حوزه های متنوع پرداخت و بانک برای استارتاپ ها و کسب و کارهای کوچیک می باشد.
                    </p> 
                </div>
            <div class="sub-logo">

            </div>
        </div>

        <div class="section">
            <div class="section-title">
                <h1>همکاران تجاری</h1>
            </div>

            <div class="list-logo-customer">
                <ul>
                    <li>
                        <a href="https://www.ba24.ir/" class="llc llc-item">
                            <img src="http://finnotech.ir/wp-content/uploads/2018/08/bank_1.png" width="109" height="107"
                                alt=" بانک آینده">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.enbank.ir" class="llc llc-item">
                            <img src="http://finnotech.ir/wp-content/uploads/2018/08/bank_2.png" width="109" height="107"
                                alt="بانک اقتصاد نوین">
                        </a>
                    </li>
                    <li>
                        <a href="http://www.bank-day.ir/" class="llc llc-item">
                            <img src="http://finnotech.ir/wp-content/uploads/2018/08/bank_3.png" width="109" height="107"
                                alt="بانک دی">
                        </a>
                    </li>
                    <li>
                        <a href="http://www.izbank.ir/" class="llc llc-item">
                            <img src="http://finnotech.ir/wp-content/uploads/2018/08/bank_4.png" width="109" height="107"
                                alt="بانک ایران زمین">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ansarbank.com" class="llc llc-item">
                            <img src="http://finnotech.ir/wp-content/uploads/2018/08/bank_5.png" width="109" height="107"
                                alt="بانک انصار">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.nadpco.com" class="llc llc-item">


                        </a>
                    </li>
                </ul>


            </div>
        </div>
        <div class="section">
            <div class="">
                <div class="middle-content section-title">
                    <h1 class="section-title">
                        خدمات فینوبوم
                    </h1>

                    <ul class="sftc-tb-links">
                        <li class="card services">
                            <a href="#tab1" id="#tab1" class="sftc-scroll">
                                <span class="icon-tab">

                                    <img src="../assets/safebox.png">
                                </span>
                                <div class="icon-text">خدمات بانکی</div>
                            </a>
                        </li>
                        <li class="card services">
                            <a href="#tab2" id="#tab2" class="sftc-scroll">
                                <span class="icon-tab">
                                    <img src="../assets/speed.png">
                                </span>
                                <div class="icon-text">تسهیلگر عملیات</div>
                            </a>
                        </li>
                        <li class="card services">
                            <a href="#tab3" id="#tab3" class="sftc-scroll">
                                <span class="icon-tab">
                                    <img src="../assets/money.png">
                                </span>
                                <div class="icon-text">خدمات بازار سرمایه</div>
                            </a>
                        </li>
                    </ul>
                    <div class="sub-logo powered">
                      <img src="../assets/finnotech.svg">
                      <span class="sub-text"> قدرت گرفته از</span>
                    </div>
                </div>
            </div>
        </div>
    </full-page>
</div>
</template>

<script>
import Menu from '../components/menu'
import { page } from 'vue-analytics'

  export default {
    name: 'home',
    components: {
      Menu
    },
    data() {
      return {
        options: {
          menu: '#menu',
          anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['#f9f9f9', '#00b7b9', '#0fa9c1fa', '#ff983f'],
          anchors:['home', 'partners', 'services'],
        },
      }
    },
    methods: {
      track () {
        page('/home')
      }
    }
    
  }
</script>

<style scoped>
.middle-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* width: 1065px; */
    margin: 0 auto;
    flex-direction: column;
}
.sub-text {
  margin-top: 30px;
  direction: rtl;
}

.middle-content p {
    color: white;
    font-size: 18px;
}

.section-title {
  color: white;
  margin-bottom: 30px;
}

.sub-logo {
      position: absolute;
    bottom: 5%;
    left: 5%;
}
.sub-logo img {
  width: 100px;
}
.logo {
    width: 60%;
    max-width: 860px;
}

.card {
  padding: 30px;
      width: 185px;
    height: 185px;
}
.services img {
  width: 99px;
}

.partners img {
  width: 75px;
}
.icon-text {
      margin: 15px 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.powered {
    background: white;
    color: grey;
    padding: 7px;
    border-radius: 0.25rem;
}

.powered img {
  width: 50px;

  width: 169px;
  height: 29px;
}

.powered .sub-text {
  margin-top: 29px;
  margin-left: 5px;
}
@media screen and (max-width: 575px) {
    .logo {
        width: 90%;
    }
}
</style>