<template>
  <div class="game-over-screen">
     <h1> Game Over</h1>
     <p> The souls of your family lay restless..</p>

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
  .game-over-screen {
    background: black;
    height: 100vh;
    color: white
  }

  h1 {
    margin: 0;
  }

  button {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
</style>
