<template>
  <div class="playGameScreen">
    <!-- <img src="../../assets/hero/HeroIdle.gif"> -->
    <!-- <img src="~/src/assets/hero/HeroIdle.gif" alt=""> -->
    <Hero class="tile"/>
    <Enemy class="tile"/>
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

  }
  
  /* .tile {
    display: inline-block;
    margin: 5px;
  } */
</style>
