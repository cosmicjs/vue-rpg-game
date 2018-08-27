<template>
  <div>
    GAME OVER.

    <button type="button" v-on:click="changeView('homeScreen')">Return To Home Screen</button>
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
      changeView(view) {
        this.$store.commit('changeView', view)
      },
    },
    watch: {}
  }

</script>

<style scoped>

</style>
