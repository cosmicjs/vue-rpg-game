<template>
  <div class="enemyDefeated">
    <h1> Enemy Defeated! </h1>

    <div class="stats">
      <span class="currentLevel">
        Current Level: {{ currentLevel }}
      </span>

      <span class="currentHealth">
        Current Health: {{ currentHealth }}
      </span>

      <div class="experienceToNextLevel">
        Experience To Next Level: {{ experienceToNextLevel }}
      </div>
    </div>


    <button type="button" v-on:click="changeView('playGame')"> Continue Avenging.. </button>
  </div>
</template>

<script>

  export default {
    props: [],
    data() { return {} },
    components: {},
    mounted() {},
    computed: {
      currentHealth() {
        return this.$store.state.currentHeroHealth
      },
      currentLevel() {
        return this.$store.state.currentHeroLevel
      },
      experienceToNextLevel() {
        return this.$store.state.experienceToNextLevel
      }
    },
    methods: {
      changeView(view) {
        this.$store.commit('changeView', view)
      },
    },
    watch: {}
  }

</script>

<style scoped>
  .enemyDefeated {
    background-image: url('https://cosmic-s3.imgix.net/638bfe60-af9f-11e8-a99f-65e6ba2822f8-EnemyDefeatedBG.gif');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    color: white;
    padding: 50px;
  }

  .enemyDefeated h1 {
    margin: 0;
  }

  .enemyDefeated button {
    margin-top: 25px;
    font-size: 26px;
    padding: 10px;
    background: none;
    color: white;
    border: 2px solid white;
  }
</style>
