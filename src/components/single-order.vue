<template>
<div class="row single">
    <div class="col-md-6">
        <span>{{msg}}</span>
    </div>
    <div class="col-md-2">
    </div>
    <div class="col-md-4">
        <a class="btn btn-primary" href="/delete-order">حذف</a>
        <a class="btn btn-primary" href="/edit-order">ویرایش مشخصات</a>
    </div>
</div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'single-order',
  props: {
      msg: ""
  },
  components: {
    HelloWorld,
  }
}
</script>

<style scoped>
.single {
    border: 1px solid #dadada;
    margin-top: 10px;
}

a.btn {
    margin: 6px;
}

.single span {
    line-height: 50px;
}

</style>
