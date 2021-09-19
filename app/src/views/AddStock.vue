<template>
  <Add />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Add from '../components/Add.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      Add,
    },
  })
</script>
