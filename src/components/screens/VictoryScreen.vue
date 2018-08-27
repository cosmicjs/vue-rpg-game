<template>
  <div class="victoryScreen">
    <h1>Victory Is Yours!</h1>
    <h2> You have avenged your family, and rid the galaxy of its most pressing
    menace.</h2>
    <button type="button" v-on:click="reloadGame()"> Return To Home Screen </button>
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
      reloadGame() {
        window.location.reload(true);
      }
    },
    watch: {}
  }

</script>

<style scoped>
  .victoryScreen {
    background-image: url('../../assets/screens/VictoryBG.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    color: white;
    padding: 50px;
  }

  h1 {
    margin: 0;
  }

  button {
    background: none;
    border: 1px solid white;
    padding: 10px;
    font-size: 26px;
    color: white;
    margin-top: 25px;
  }
</style>
