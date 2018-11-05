<template>
<div class="container" style="padding-top: 77px;">
  <div class="row">
<div class="col-md-12 wrapper">
  <h1>ایجاد حساب</h1>
<form class="needs-validation" novalidate style="margin-top: 38px;">
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input v-model="fname" type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input v-model="lname" type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipSerial">سریال شناسنامه</label>
      <div class="input-group">
        <input v-model="serial" type="text" class="form-control" id="validationTooltipSerial" placeholder="سریال" aria-describedby="validationTooltipUsernamePrepend" required>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationTooltipSCode">شماره شناسنامه</label>
      <input v-model="shenasname" type="text" class="form-control" id="validationTooltipSCode" placeholder="Last name" value="Otto" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>

  <div class="col-md-4 mb-3">
      <label for="validationTooltipBirth">تاریخ تولد</label>
      <div class="input-group">
        <input v-model="birthdate" type="date" class="form-control" id="validationTooltipBirth" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>

  <div class="col-md-4 mb-3">
      <label for="validationTooltipGender">جنسیت</label>
      <div class="input-group">
          <div class="radio">
            <label><input type="radio" name="optradio" checked>مرد</label>
          </div>
          <div class="radio">
            <label><input type="radio" name="optradio">زن</label>
          </div>
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  
  <!-- <div class="form-row"> -->
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">سری شناسنامه</label>
      <input v-model="seri" type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">نام پدر</label>
      <input v-model="fatherName" type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>

    <div class="col-md-3 mb-3">
      <label for="validationTooltip05">شماره ملی</label>
      <input v-model="nationalId" type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationTooltip05">شماره موبایل</label>
      <input v-model="mobile" type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>

    <div class="col-md-4 mb-3">
      <div class="input-group">
        <label for="validationTooltip05">کد شعبه</label>
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Options</label>
        </div>
        <select v-model="branchId" class="custom-select" id="inputGroupSelect01">
          <option v-for="option in options" v-bind:value="option.ID" v-bind:key="option.ID">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>

    <div class="col-md-4 mb-3 custom-file">
      <label class="custom-file-label" for="customFile" id="ChooseText">Choose file</label>
      <input @change="uploadFile" type="file" ref="myFiles" class="custom-file-input" id="customFile">
    </div>

  </div>
    <!-- </div> -->

  <a class="btn btn-primary" type="submit" v-on:click="register">Submit form</a>
</form>
<Alert v-bind:type="type" v-bind:msg="msg" v-if="alert"></Alert>
</div>
</div>
</div>
</template>

<script>
import Alert from '@/components/alert.vue'
import branch from '@/assets/branch.json'
export default {
  name: 'RegisterForm',
  props: {
  },
  components: {
    Alert
  },
  data() {
    return {
      options: branch,
      fname: "",
      lname: "",
      serial: "",
      seri: "",
      shenasname: "",
      nationalId: "",
      fatherName: "",
      mobile: "",
      branchId: "",
      alert: false,
      msg: "",
      type: "",
      files: "",
      birthdate: "",
      }
  },
  watch: {
    files: function(val) {
    }
  },
  methods: {
    changeText: function(obj, msg) {
      let item = document.getElementById(obj)
      item.innerHTML = msg;
      debugger

    },
    register: function() {
      fetch("http://api.izbank.ir:8586/api/cardservices/save", {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Username: "sabin",
          Password: "Pw4s@biN",
          Firstname: this.fname,
          Lastname: this.lname,
          Serial: this.serial,
          Seri: this.seri,
          SCode: this.shenasname,
          Fathername: this.fatherName,
          NCode: this.nationalId,
          Mobile: this.Mobile,
          BranchId: this.branchId,
          Photo: this.files
        })
      })
      .then( (response) => {
                  this.files = "fial"
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
    uploadFile: function(event) {
      var vm = this;
      var f = event.target.files[0]; // FileList object
      this.changeText("ChooseText", f.name)
      var reader = new FileReader();
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          var binaryData = e.target.result;
          //Converting Binary Data to base 64
          var base64String = window.btoa(binaryData);
          vm.files = base64String
        };
      })(f);
      // Read in the image file as a data URL.
      reader.readAsBinaryString(f);
    },
  }
}
</script>

<style scoded>
a.btn {
  color: white !important;
}

a.btn:hover {
  color:white;
}
</style>