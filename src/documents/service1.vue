<template>
<vue-markdown>
 
###GET  /oak/v1/clients/{clientId}/iban

* **شرح: ** سرویس دریافت شماره شبا از روی شماره حساب 

* **اسکوپ: **  ```oak:deposit-to-iban:get```

* **رویکرد: ** ```CLIENT_CREDENTIAL```

``````````````
{address}/oak/v1/clients/{clientId}/iban?trackId={trackId}&bank={bank}&deposit={deposit}
``````````````

<div class="sandboxaddress sandbox" id="sandbox" style="float:right" style="display: none" >
 https://sandbox.finnotech.ir <b> :address </b>
</div>

<div class="production-address production" style="float:right" style="display: block">
 https://api.finnotech.ir <b> :address </b>
 </div>


#### Headers
مقادیر زیر باید در هدر قرار بگیرد
````````````````
Authorization : Bearer {Token}
````````````````

#### URI Parameters
* **clientId: ** (اجباری) شناسه کلاینت

#### Query Parameters
* ** trackId: ** (اختیاری) &#x202b; رشته ای با طول حداکثر ۲۰ کاراکتر شامل حرف و عدد. پیشنهاد ما برای trackId تولید کردن UUID است. در صورت نیاز به نتیجه یک فراخوانی میتوانید با trackId آن را فیلتر کنید. در گزارش فراخوانی سرویس فراخوانی مورد نظر را با همین کد پیگیری پیدا میکنید.
  * example:  ```get-IBAN-status-010```
* **bank: **(اجباری)  کد بانک حساب بر اساس لیست زیر ارسال گردد.
  * اقتصاد نوین: ۰
  * سامان: ۱
  * سرمایه: ۲
  * توسعه: ۳ 
  * سینا: ۴
  * پاسارگاد: ۵
  * تجارت: ۶
  * صنعت و معدن: ۷
  * کشاورزی:‌ ۸
  * توسعه صادرات: ۹
  * کارآفرینی: ۱۰
  * آینده: ۱۱
  * صادرات: ۱۲
  * ملی: ۱۳
  * رسالت: ۱۴

* **deposit:‌ ** شماره حسابی که قصد دریافت شماره شبا آن را دارید
    * شماره حساب بانک‌های سامان، سرمایه، توسعه، سینا، پاسارگاد، اقتصادنوین و رسالت همراه با خط تیره باید ارسال گردد.
    * برای مثال : 650-5454-889-5 و یا 202-8504-2

#### Request Example
``````````````
https://api.finnotech.ir/oak/v1/clients/testClient/iban?trackId=get-IBAN-statsus-010&bank=11&deposit=020251895421
``````````````


###Results Format
#### Successful result format (status code 200)
````````````````
  {
    "depositNumber": 020251895421
  , "bank": "بانک آینده"
  , "IBAN": IR90056000000000001234567
  , "trackId": "get-IBAN-status-010"
  , "status":"DONE"
  }
````````````````

* **IBAN: ** شماره شبا محاسبه شده
* **depositNumber: ** شماره حساب ارسال شده
* **bank: ** نام بانک
* **status: ** وضعیت فراخوانی سرویس
 * DONE: فراخوانی موفق سرویس
 * FAILED: فراخوانی ناموفق سرویس
* **trackId: ** کد پیگیری، اگر ارسال شده باشد همان مقدار برگردانده میشود و در غیر اینصورت یک رشته تصادفی تولید و برگردانده میشود

#### UnSuccessful result format
````````````````
  { "code": -1 (non zero integer)
  , "message": "Unsuccessful Message"
  , "farsi_message": "پیام ناموفق"
  }
````````````````
در صورتی که کد بانک ارسالی نامعتبر باشد با خطای زیر مواجه خواهید شد:

````````````````
  { "code": 1
  , "message": "invalid bank code"
  , "farsi_message": "کد بانک وارد شده نامعتبر است"
  }
````````````````

 در اینجا میتوانید لیست خطاهای سرویس ها را مشاهده کنید  [لیست خطاها](/generic-errors.html)

</vue-markdown>

</template>

<script>
import VueMarkdown from 'vue-markdown'

export default{
    name: 'service1',
    components: {
        VueMarkdown
    }
}
</script>