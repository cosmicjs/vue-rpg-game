<template>
  <div>
    GAME OVER.

    <button type="button" v-on:click="reload()">Return To Home Screen</button>
  </div>
</template>

<script>

  export default {
    props: [],
    data() { return {} },
    components: {},
    mounted() {},
    computed: {},
    methods: {
      reload() {
        window.location.reload(true);
      },
    },
    watch: {}
  }

</script>

<style scoped>

</style>
