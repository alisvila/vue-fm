

<template>
    <div v-bind:class="type" class="alert" role="alert">
        {{ msg }}
    </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    msg: String,
    type: String
  }
}
</script>

<style>
.alert {
  border-radius: 0!important;
}
</style>