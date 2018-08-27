<template>
  <div class="playGameScreen">
    <div class="tiles">
      <Hero class="heroTile tile"/>
      <Enemy class="enemyTile tile"/>
    </div>
  </div>
</template>

<script>
  import Hero from '../hero/Hero.vue'
  import Enemy from '../enemy/Enemy.vue'
  export default {
    props: [],
    data() { return {} },
    components: {
      Hero,
      Enemy
    },
    mounted() {},
    computed: {},
    methods: {},
    watch: {}
  }

</script>

<style scoped>
  .playGameScreen {
    background-image: url('../../assets/screens/PlayGameBG.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
  }

  .tiles {
    position: absolute;
    bottom: 5%;
    width: 100%;
  }

  .tile {
    display: inline-block;
    margin: 5px;
  }

  .heroTile {
    float: left;
  }

  .enemyTile {
    float: right;
  }
</style>
