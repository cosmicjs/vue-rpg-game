<template>
  <div>
    <div class="heroHealthBarOuter">
      <div class="heroHealthBarInner" v-bind:style="calculateHealthBar">

      </div>
    </div>
    <div class="heroImage">
      <!-- //TODO: rewire this, make it hooked to cosmicjs. -->
      <img v-if="currentHeroState == 'Idle'" src="../../assets/hero/HeroIdle.gif">
    </div>
  </div>
</template>

<script>

  export default {
    props: [],
    data() { return {} },
    components: {},
    mounted() {},
    computed: {
      currentHeroState() {
        return this.$store.state.currentHeroState
      },
      currentHeroImage() {
        return '@/assets/hero/HeroIdle.gif'
      },
      currentHealth() {
        return this.$store.state.currentHeroHealth

      },
      maxHealth() {
        return this.$store.state.currentHeroMaxHealth
      },
      calculateHealthBar() {
        let color
        if (this.currentHeroState == "Idle") color = 'red'
        if (this.currentHeroState == "poisoned") color = 'green'
        return {
          width: (this.currentHealth/this.maxHealth)*100 + '%',
          background: 'color'
        }
      }
    },
    methods: {

    },
    watch: {}
  }

</script>

<style scoped>
  .heroHealthBarOuter {
    border: 1px solid black;
    height: 10px;
    width: 100px;
  }

  .heroHealthBarInner {
    height: 100%;
    background: red;
  }

  .heroImage img {
    height: 100px;
    width: 100px;
  }
</style>
