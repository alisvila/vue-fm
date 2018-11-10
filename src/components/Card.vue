
<template>

<div class="card wrapper">
<div class="client panel panel-default text-center approved" data="ffilan" status="approved">
    <div class="panel-heading">
        <h6>{{name}}</h6>
    </div>
    <router-link :to="link" class="nav-link">
        <div class="logo approved"><img :src="image"></div>
        </router-link>
        <p>{{status}}</p>
        <div class="approved-icone">
        <i class="fa fa-trash-o"></i>
        <a href="/pannel/delte" class="btn btn-finno btn-small confirm hidden"
                data-client="ffilan">حذف شود؟</a>
        </div>
</div>
</div>

</template>

<script>
export default {
  name: 'card',
  props: {
    status: String,
    image: String,
    link: String,
    name: String
  },
}
</script>

<style scoped>

.card {
  border: none;
}
.card h6 {
  background-color: #92ebec;
  padding: 15px;
  color: #616161;
}

.card img {
  width: 75px;
  margin: 4px;
}

.approved-icone {
  padding-bottom: 20px;
}

</style>