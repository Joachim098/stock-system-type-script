<template>
  <Remove />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Remove from '../components/Remove.vue'

  export default Vue.extend({
    name: 'RemoveStock',

    components: {
      Remove,
    },
  })
</script>
