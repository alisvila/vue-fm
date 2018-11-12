<template>

<div>
<TopMenu />
  <div class="container-fluid">
    <SideMenu />
<div class="pannel-home">
<section class="documents text-right">
    <h4>پیشنهاد می شود پیش از مطالعه مستندات فنی که در ادامه بیان شده است، به مطالعه<a target="_blank" href="#guide">
            مفاهیم اولیه</a> بپردازید</h4><br><br>
    <h4>سرویس‌های فینوبوم</h4>
    <p>سرویس‌های فینوبوم به ۳ دسته «بانکی»، «تسهیلگر عملیات و پرداخت» و «بورس» تقسیم می شوند. </p>
    <p>سرویـس‌های بانکـی فینوبوم به دو دسته تقسیم می‌‌شوند: «خدمـات مبتنی بر کارت» و «خدمـات مبتنی بر حـساب». توضیحات
        کاملی در رابطه با تمام این سرویـس‌ها، نوع استفاده، عملکرد و بازدهـی آنها ارائه شده است که می‌توانید با مطالعه
        آن، تمام اطلاعات مورد نیاز خود را به دست بیاورید.</p>
    <p>سرویس‌های تسهیلگر عملیات و پرداخت، کمک می‌کنند تا کسب‌و‌کار‌ها بتوانند از خدمات تسهیلگری مانند اعتبارسنجی و یا
        صحت سنجی داده‌ها بهره بگیرند. در حالی که سرویس‌های بانکی، در واقع کار کسب‌و‌کارها را برای استفاده از خدمات مالی
        و سفارشی سازی راهکارهای بانکی ساده میکند.</p>
    <p>سرویس های بورس با پردازش داده ها و اطلاعات شرکت ها به کسب و کارها امکان استفاده از نتایج را در راستای اهداف خود
        می دهد</p><br>
    <h4>فهرست سرویس‌های بانکی فینوبوم</h4>
    <p>همانگونه که گفته شد سرویس‌های بانکی فینوبوم به دودسته سرویس‌های کارتی یا مبتنی بر کارت و سرویس‌های حسابی یا مبتنی
        بر حساب تقسیم می‌شوند. که در ادامه به تفکیک این سرویس‌ها معرفی می‌شوند.</p><br>
    <h5>سرویس‌های مبتنی بر حساب</h5>
    <p>سرویس‌های مبتنی بر حساب فینوبوم که با استفاده از OAuth قابل فراخوانی است، در دو دسته اصلی زیر قرار می گیرد:</p>
    <p>سرویس‌های مبتنی بر حساب فینوبوم در جدول زیر لیست شده‌اند. لازم به ذکر است سرویس ایجاد دستور پرداخت به دلیل شرایط
        خاص، نیاز به استفاده از سرویس‌های مکمل دارد که در جدول دیگری این سرویس‌ها نشان داده شده‌اند.</p>
    <ul>
        <li>سرویس‌های پایه بانکی</li>
        <li>سرویس‌های سامانه جنبی</li>
    </ul>
    <p>سرویس‌های پایه ای آن دسته از سرویس ها هستند که عملیات اصلی بانک مانند برداشت، واریز، صورتحساب و مانده و ... را
        شامل میشوند.</p><br>
    <div class="depositi">
        <table class="table">
            <thead>
                <tr>
                    <th> شماره ردیف</th>
                    <th>نام سرویس</th>
                    <th>حساب کاربر نهایی حقیقی است</th>
                    <th>حساب کاربر نهایی حقوقی است</th>
                    <th style="width:22%;">حساب کاربر نهایی باید در بانک همکار باشد</th>
                    <th>رویکرد AUTHORIZATION CODE</th>
                    <th>رویکرد CLIENT CREDENTIAL</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td>۶</td>
                    <td><a target="_blank" href="/oak-deposits-to-IBAN-get.html?sandbox=true">تبدیل شماره حساب به شبا</a></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>۷</td>
                    <td><a target="_blank" href="/oak-card-to-IBAN-get.html?sandbox=true">تبدیل شماره کارت به شبا</a></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>۸</td>
                    <td><a target="_blank" href="/oak-ibanInquiry.html?sandbox=true">استعلام شماره شبا</a></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۹</td>
                    <td><a target="_blank" href="/oak-card-to-deposit.html?sandbox=true">تبدیل شماره کارت به شماره حساب</a></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۱۰</td>
                    <td><a target="_blank" href="/oak-deposits.html?sandbox=true">اعلام شماره حساب‌ها با دریافت کد ملی</a></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td>
                        <p float="left"> <img src="/svg/ayande.svg" width="100" title="بانک آینده" style="margin-right:4px">
                            <img src="/png/iz.png" width="100" title="بانک ایران‌زمین" style="margin-right:4px"> <img
                                src="/png/dey.png" width="100" title="بانک دی" style="margin-right:4px"><img src="/png/ansar.png"
                                width="100" title="بانک انصار" style="margin-right:4px"><img src="/png/en.png" width="100"
                                style="margin-right:4px" title="بانک اقتصادنوین"></p>
                    </td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td></td>
                </tr>
                <tr class="hidden">
                    <td>۷</td>
                    <td>احراز هویت</td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td></td>
                    <td><img src="/svg/ayande.svg"></td>
                    <td></td>
                    <td></td>
                </tr>
               
                <tr>
                    <td>۲۰</td>
                    <td><a target="_blank" href="/oak-user.html?sandbox=true">استعلام مشتری</a></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td></td>
                    <td><img src="/svg/ayande.svg"></td>
                    <td><i class="fa fa-check-circle"></i></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    <h5>سرویس‌های مبتنی بر کارت</h5>
    <p>سرویس‌های مبتنی بر کارت در جدول زیر لیست شده‌اند.</p><br>
    <div class="cardi">
        <table class="table">
            <thead>
                <tr>
                    <th style="width:10%;">شماره ردیف</th>
                    <th style="width:45%;">نام سرویس</th>
                    <th style="width:45%;">دامنه کارت مبدا</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>۱</td>
                    <td><a target="_blank" href="/card-information.html?sandbox=true">استعلام شماره کارت</a></td>
                    <td>شتابی</td>
                </tr>
                <tr>
                    <td>۲</td>
                    <td><a target="_blank" href="/card-getList.html?sandbox=true">دریافت لیست کارت‌های شتابی</a></td>
                    <td>شتابی</td>
                </tr>
              
            </tbody>
        </table>
    </div><br>
    <h4>فهرست سرویس‌های بازار سرمایه و بورس</h4>
    <p>سرویس‌‌های ارزیابی سود و بازده شرکت</p><br>
    <h5>سرویس‌های اطلاعات پایه</h5>
    <p>سرویس های اطلاعات پایه ورودی های لازم برای فراخوانی سایر سرویس ها را فراهم می آورند.</p>
    <div class="boursi">
        <table class="table">
            <tbody>
                <tr>
                    <th>شماره ردیف</th>
                    <th>نام سرویس</th>
                    <th>رویکرد AUTHORIZATION CODE</th>
                    <th>رویکرد CLIENT CREDENTIAL</th>
                </tr>
                <tr>
                    <td>۱</td>
                    <td><a target="_blank" href="/bourse-balance-sheet-item.html?sandbox=true">اطلاعات شناسایی اقلام
                            ترازنامه (اطلاعات‌پایه)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۲</td>
                    <td><a target="_blank" href="/bourse-cashFlow-item.html?sandbox=true">اطلاعات شناسایی اقلام جریان
                            وجوه نقد (اطلاعات‌پایه)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۳</td>
                    <td><a target="_blank" href="/bourse-noteItem.html?sandbox=true">اطلاعات شناسایی اقلام یادداشت
                            توضیحی همراه (اطلاعات‌پایه)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۴</td>
                    <td><a target="_blank" href="/bourse-currencies.html?sandbox=true">عناوین نوع ارز ( اطلاعات پایه)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۵</td>
                    <td><a target="_blank" href="/bourse-precMetals.html?sandbox=true">عناوین نوع فلز گرانبها (اطلاعات
                            پایه)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۶</td>
                    <td><a target="_blank" href="/bourse-groups.html?sandbox=true">اطلاعات شناسایی گروه‌ها( اطلاعات
                            پایه)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۷</td>
                    <td><a target="_blank" href="/bourse-companies.html?sandbox=true">اطلاعات شناسایی شرکت‌ها (اطلاعات
                            پایه)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۸</td>
                    <td><a target="_blank" href="/bourse-index-groups.html?sandbox=true">اطلاعات شناسایی گروه­های
                            شاخص­‌ها (اطلاعات پایه)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۹</td>
                    <td><a target="_blank" href="/bourse-indices.html?sandbox=true">اطلاعات شناسایی شاخص­‌ها
                            (اطلاعات‌پایه)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۱۰</td>
                    <td><a target="_blank" href="/bourse-industry.html?sandbox=true">اطلاعات شناسایی صنایع (اطلاعات
                            پایه)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    <h5>سرویس‌های اطلاعات صورت‌های مالی و کدال</h5><br>
    <div class="boursi">
        <table class="table">
            <tbody>
                <tr>
                    <th>شماره ردیف</th>
                    <th>نام سرویس</th>
                    <th>رویکرد AUTHORIZATION CODE</th>
                    <th>رویکرد CLIENT CREDENTIAL</th>
                </tr>
                <tr>
                    <td>۱</td>
                    <td><a target="_blank" href="/bourse-balance-sheet.html?sandbox=true"> اطلاعات ترازنامه شرکت</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۲</td>
                    <td><a target="_blank" href="/bourse-cashFlow.html?sandbox=true"> اطلاعات جریان وجه نقد شرکت</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۳</td>
                    <td><a target="_blank" href="/bourse-income-statement.html?sandbox=true"> اطلاعات سود و زیان شرکت</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۴</td>
                    <td><a target="_blank" href="/bourse-notes.html?sandbox=true"> اطلاعات یادداشت‌های توضیحی همراه
                            شرکت </a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    <h5>سرویس‌های اطلاعات بازار فلزات گرانبها و ارز</h5><br>
    <div class="boursi">
        <table class="table">
            <tbody>
                <tr>
                    <th>شماره ردیف</th>
                    <th>نام سرویس</th>
                    <th>رویکرد AUTHORIZATION CODE</th>
                    <th>رویکرد CLIENT CREDENTIAL</th>
                </tr>
                <tr>
                    <td>۱</td>
                    <td><a target="_blank" href="/bourse-forex-value-daily.html?sandbox=true"> اطلاعات نرخ روزانه انواع
                            ارز</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۲</td>
                    <td><a target="_blank" href="/bourse-forex-value-realtime.html?sandbox=true"> اطلاعات لحظه ای نرخ
                            انواع ارز </a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۳</td>
                    <td><a target="_blank" href="/bourse-gold-metal-value-daily.html?sandbox=true">اطلاعات روزانه نرخ
                            فلزات گرانبها</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۴</td>
                    <td><a target="_blank" href="/bourse-gold-metal-value-realtime.html?sandbox=true"> اطلاعات لحظه ای
                            نرخ فلزات گرانبها</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    <h5>سرویس‌های اطلاعات بازار بورس و فرابورس</h5><br>
    <div class="boursi">
        <table class="table">
            <tbody>
                <tr>
                    <th>شماره ردیف</th>
                    <th>نام سرویس</th>
                    <th>رویکرد AUTHORIZATION CODE</th>
                    <th>رویکرد CLIENT CREDENTIAL</th>
                </tr>
                <tr>
                    <td>۱</td>
                    <td><a target="_blank" href="/bourse-bidAsk.html?sandbox=true"> تابلو عرضه و تقاضا</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۲</td>
                    <td><a target="_blank" href="/bourse-index-value-daily.html?sandbox=true"> اطلاعات مقدار روزانه
                            شاخص­‌ها</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۳</td>
                    <td><a target="_blank" href="/bourse-index-value-realtime.html?sandbox=true">اطلاعات مقدار لحظه‌ای
                            شاخص­‌ها</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۴</td>
                    <td><a target="_blank" href="/bourse-adjusted-trades.html?sandbox=true"> آمار معاملات (قیمت­‌های
                            روزانه­‌‌ی تعدیل شده و تعدیل نشده)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۵</td>
                    <td><a target="_blank" href="/bourse-trades-daily.html?sandbox=true">آمار معاملات ( کندل) روزانه</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۶</td>
                    <td><a target="_blank" href="/bourse-trades-realtime.html?sandbox=true">آمار معاملات (کندل) لحظه‌ای</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    <h5>سرویس‌های اطلاعات پردازش شده</h5><br>
    <div class="boursi">
        <table class="table">
            <tbody>
                <tr>
                    <th>شماره ردیف</th>
                    <th>نام سرویس</th>
                    <th>رویکرد AUTHORIZATION CODE</th>
                    <th>رویکرد CLIENT CREDENTIAL</th>
                </tr>
                <tr>
                    <td>۱</td>
                    <td><a target="_blank" href="/bourse-company-free-float.html?sandbox=true"> شاخص نقد شوندگی</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۲</td>
                    <td><a target="_blank" href="/bourse-company-return.html?sandbox=true"> شاخص بازده</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۳</td>
                    <td><a target="_blank" href="/bourse-profitable-financial-ratio.html?sandbox=true">نسبت‌های سودآوری</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۴</td>
                    <td><a target="_blank" href="/bourse-financial-datalist.html?sandbox=true"> اطلاعات مالی و نسبتهای
                            بازار</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۵</td>
                    <td><a target="_blank" href="/bourse-company-market-price-range.html?sandbox=true">شاخص جهت شرکت (
                            سهم)</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۶</td>
                    <td><a target="_blank" href="/bourse-market-index-change.html?sandbox=true">شاخص جهت بازار</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
                <tr>
                    <td>۷</td>
                    <td><a target="_blank" href="/bourse-trading-value-index.html?sandbox=true">شاخص حجم نسبی معاملات</a></td>
                    <td></td>
                    <td><i class="fa fa-check-circle"></i></td>
                </tr>
            </tbody>
        </table>
    </div><br>
    <h4>فهرست سرویس‌های تسهیلگر عملیات و پرداخت</h4>
    <p>سرویس‌های تسهیلگر عملیات و پرداخت در جدول زیر نشان داده شده‌اند.</p>
    <div class="tashilgari">
        <table class="table">
            <thead>
                <tr>
                    <th style="width:20%;">شماره ردیف</th>
                    <th style="width:80%;">سرویس‌ها</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>۱</td>
                    <td><a target="_blank" href="/card-purchase-peyvand.html?sandbox=true">درگاه پرداخت موبایلی
                            (پیوندی)</a></td>
                </tr>
                <tr>
                    <td>۱-۲</td>
                    <td><a target="_blank" href="/card-purchase.html?sandbox=true">درگاه پرداخت موبایلی</a></td>
                </tr>
                <tr>
                    <td>۲</td>
                    <td><a target="_blank" href="/card-getTraceNumber.html?sandbox=true">دریافت شماره پیگیری</a></td>
                </tr>
                <tr>
                    <td>۳</td>
                    <td><a target="_blank" href="/card-purchase-verify.html?sandbox=true">تایید خرید</a></td>
                </tr>
                <tr>
                    <td>۴</td>
                    <td><a target="_blank" href="/card-purchase-reverse.html?sandbox=true">لغو خرید</a></td>
                </tr>
                <tr>
                    <td>۵</td>
                    <td><a target="_blank" href="/card-purchase-track.html?sandbox=true">پیگیری خرید با امکان تسهیم</a></td>
                </tr>
                <tr>
                    <td>۶</td>
                    <td><a target="_blank" href="/card-get-settlementAccounts.html?sandbox=true">دریافت لیست حسابهای
                            تسویه</a></td>
                </tr>
                <tr>
                    <td>۷</td>
                    <td><a target="_blank" href="/card-add-settlementAccounts.html?sandbox=true">افزودن حساب تسویه</a></td>
                </tr>
                <tr>
                    <td>۸</td>
                    <td><a target="_blank" href="/card-remove-settlementAccounts.html?sandbox=true">حذف حساب تسویه</a></td>
                </tr>
                <tr>
                    <td>۹</td>
                    <td><a target="_blank" href="/card-settlement-execute.html">تسویه به درخواست کاربر</a></td>
                </tr>
                <tr>
                    <td>۱۰</td>
                    <td class="key"><a target="_blank" href="/card-settlement-factors.html?sandbox=true">گزارش تسویه
                            سرویس حساب میانی و تسهیم</a></td>
                </tr>
                <tr>
                    <td>۱۰-۱</td>
                    <td><a target="_blank" href="/card-settlementInquiry.html?sandbox=true">گزارش جزییات تسویه سرویس
                            حساب میانی و تسهیم</a></td>
                </tr>
                <tr>
                    <td>۱۱</td>
                    <td><a href="/pdf/IPG_Manual.pdf" target="_blank">درگاه پرداخت اینترنتی</a></td>
                </tr>
                <tr class="hidden">
                    <td>۲۴</td>
                    <td>حساب واسط و تسهیم</td>
                </tr>
                <tr class="hidden">
                    <td>۲۵</td>
                    <td>تعریف قبوض خاص</td>
                </tr>
                <tr>
                    <td>۱۲</td>
                    <td><a target="_blank" href="/oak-nidVerification.html?sandbox=true">صحت سنجی کد ملی</a></td>
                </tr>
                <tr>
                    <td>۱۳</td>
                    <td>اعتبارسنجی بانکی</td>
                </tr>
                <tr>
                    <td>۱۴</td>
                    <td>پرداخت با کیف پول همراه کارت </td>
                </tr>
                <tr>
                    <td>۱۵</td>
                    <td class="key"><a target="_blank" href="/izClub-request-payment.html?sandbox=true"> درخواست برداشت
                            از امتیاز مشتری باشگاه</a></td>
                </tr>
                <tr>
                    <td>۱۶</td>
                    <td class="key"><a target="_blank" href="/card-purchase-charity.html?sandbox=true"> خیریه‌ </a></td>
                </tr>
                <tr>
                    <td>۱۷</td>
                    <td><a target="_blank" href="/oak-nidInquiry.html?sandbox=true">استعلام کد ملی</a></td>
                </tr>
            </tbody>
        </table>
    </div><br>
    <h4>سرویس‌های گزارش مورد نیاز توسعه دهنده</h4>
    <p>برای کمک به شما جهت نظارت بر سرویس‌های مبتنی بر حسابی که استفاده و فراخوانی می‌کنید، در این بخش سرویس‌هایی را
        معرفی می‌کنیم که عملیات جانبی و کمکی مورد نیاز کلاینت را تامین می‌کنند و مستقیما جنبه بانکی ندارند.</p>
    <p>اسکوپ این سرویس‌ها به صورت پیش فرض برای همه کلاینت‌ها فعال است و نیاز به درخواست جداگانه ندارد.</p>
    <div class="development">
        <table class="table">
            <thead>
                <tr>
                    <th style="width:20%;">شماره ردیف</th>
                    <th style="width:80%;">نام سرویس</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>۱</td>
                    <td><a target="_blank" href="/boomrang-wages.html?sandbox=true">سرویس استعلام فراخوانی‌ها </a></td>
                </tr>
                <tr>
                    <td>۲</td>
                    <td><a target="_blank" href="/boomrang-tokens.html?sandbox=true">سرویس دریافت لیست توکن‌‌ها </a></td>
                </tr>
                <tr>
                    <td>۳</td>
                    <td><a target="_blank" href="/boomrang-revokeToken.html?sandbox=true">سرویس ابطال توکن </a></td>
                </tr>
                <tr>
                    <td>۴</td>
                    <td><a target="_blank" href="/boomrang-get-clientCredential-token.html?sandbox=true">گرفتن توکن با
                            رویکرد Client Credential</a></td>
                </tr>
                <tr>
                    <td>۵</td>
                    <td><a target="_blank" href="/boomrang-get-authorizationCode-token.html?sandbox=true">گرفتن توکن با
                            رویکرد Authorization Code</a></td>
                </tr>
                <tr>
                    <td>۶</td>
                    <td><a target="_blank" href="/boomrang-get-clientCredential-token.html?sandbox=true">گرفتن توکن با
                            رویکرد Client Credential بدون حساب</a></td>
                </tr>
                <tr>
                    <td>۷</td>
                    <td><a target="_blank" href="/boomrang-refresh-token.html?sandbox=true">سرویس تمدید توکن</a></td>
                </tr>
            </tbody>
        </table><br>
    </div>
    <h4>خطا‌های عمومی</h4>
    <p>برای مشاهده لیست خطاهای عمومی سرویسها به<a target="_blank" href="/generic-errors.html"> اینجا</a> مراجعه کنید.</p>
</section>
  </div>
  </div>
  </div>

</template>


<script>

import HeadText from '@/components/HeadText.vue'
import Apps from '@/views/pannel/Apps.vue'
import SideMenu from '@/components/SideMenu.vue'
import Card from '@/components/Card.vue'
import TopMenu from '@/components/TopMenu.vue'



export default {
  name: 'documents',
  components: {
    HeadText,
    Apps,
    SideMenu,
    Card,
    TopMenu
  }
}
</script>

<style scoped>

.documents {
    background: #fff;
    direction: rtl;
    padding: 50px;
}

.documents .boursi table, .documents .cardi table, .documents .create-request table, .documents .depositi table, .documents .development table, .documents .izClub table, .documents .other table, .documents .tashilgari table {
    margin: auto;
    margin-bottom: 50px;
}

.documents .depositi table {
    max-width: 800px;
}

.pannel-home {
    padding: 80px 215px 0 10px;
    direction: rtl;
    margin: 0;
}


</style>
