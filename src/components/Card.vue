
<template>

<div class="card wrapper">
<div class="client panel panel-default text-center approved" data="ffilan" status="approved">
    <div class="panel-heading">
        <h6>فیلان</h6>
    </div><a href="/pannel/new">
        <div class="logo approved"><img src="@/assets/logo.png"></div>
        <div class="approved-icone"><img src="@/assets/checked.png">
        <i class="fa fa-trash-o"></i>
        <button class="btn btn-danger btn-small confirm hidden"
                data-client="ffilan">حذف شود؟</button>
        </div>
    </a>
</div>
</div>

</template>

<script>
export default {
  name: 'card',
  props: {
    msg: String,
    type: String
  }
}
</script>

<style scoped>

.card {
  border: none;
}
.card h6 {
  background-color: #d6d6d6;
  padding: 15px;
}

.card img {
  width: 75px;
  margin: 4px;
}
</style>