<template>
  <div class="playGameScreen">
    <div class="actionMessages">

      <div class="actionMessage">
        {{ firstMessage }}
      </div>

      <div class="actionMessage">
        {{ secondMessage }}
      </div>

    </div>
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
    data() {
      return {}
    },
    components: {
      Hero,
      Enemy
    },
    mounted() {},
    computed: {
      firstMessage() {
        return this.$store.state.currentActionMessagesFirst
      },
      secondMessage() {
        return this.$store.state.currentActionMessagesSecond
      },
    },
    methods: {},
    watch: {
    }
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

  .actionMessages {
    padding-top: 25px;
  }
</style>
