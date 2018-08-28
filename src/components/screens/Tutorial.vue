<template>
  <div class="tutorial-screen">
    <h1> How To Play: </h1>
    <p> Enter The Cosmos is a turn based RPG.</p>
    <p> During your turn, you can choose to attack, heal, or use a special attack.</p>
    <p> Once you perform an action, your enemy will perform one as well!</p>
    <br>
    <p> Everytime you defeat an enemy, you gain some experience. Given enough experience,
        you will level up!</p>
    <p> Get ready to Enter The Cosmos! </p>

    <br>
    <!-- TODO: Add instructiosn for global keypresses -->
    <button type="button" v-on:click="changeView('homeScreen')"> Return </button>
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
  .tutorial-screen {
    background-image: url('../../assets/screens/TutorialBG.gif');
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #92ced6;
    padding: 50px;
  }

  .tutorial-screen h1 {
    margin: 0;
    background: black;
  }

  .tutorial-screen p {
    font-size: 36px;
    background: black;
  }

  .tutorial-screen button {
    background: black;
    font-size: 36px;
    padding: 20px 40px;
    border: 1px solid #92ced6;
    color: #92ced6;
  }
</style>
