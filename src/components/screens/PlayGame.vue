<template>
  <div>
    <!-- <img src="../../assets/hero/HeroIdle.gif"> -->
    <!-- <img src="~/src/assets/hero/HeroIdle.gif" alt=""> -->
    <Hero />
    <Enemy />
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

</style>
