<template>
  <div class="heroTile">
    <div class="heroHealthBarOuter">
      <div class="heroHealthBarInner" v-bind:style="calculateHealthBar"></div>
    </div>

    <div class="heroLevel">
      Level: {{ heroLevel }}
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
      heroLevel() {
        return this.$store.state.currentHeroLevel
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
  .heroTile {
    width: 105px;
  }

  .heroHealthBarOuter {
    border: 1px solid black;
    height: 10px;
    width: 100px;
  }

  .heroHealthBarInner {
    height: 100%;
    background: red;
  }

  .heroLevel {
    margin-top: 5px;
    
  }

  .heroImage img {
    height: 100px;
    width: 100px;
  }
</style>
