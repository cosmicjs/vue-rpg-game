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
      <img v-show="currentHeroState == 'Idle'" src="../../assets/hero/HeroIdle.gif">
      <img v-show="currentHeroState == 'Attacking'" src="../../assets/hero/HeroAttack1.gif">
    </div>

    <div class="heroActions">
      <button class="attackButton" type="button" v-on:click="heroAttack()"> Attack </button>
      <button class="healButton" type="button" v-on:click="heroHeal()"> Heal </button>
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
      heroAttackPower() {
        return this.heroLevel * 10
      },
      heroHealPower() {
        return this.heroLevel * 20
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
      heroAttack() {
        this.$store.commit('damageEnemy', this.heroAttackPower)
        this.$store.commit('updateHeroStatus', 'Attacking')
        this.$store.commit('damageHero')
      },
      heroHeal() {
        this.$store.commit('healHero', this.heroHealPower)
        this.$store.commit('damageHero')
      }
    },
    watch: {
      currentHeroState() {
        if (this.currentHeroState == 'Dead') {
          this.$store.commit('changeView', 'gameOver')
        }
      }
    }
  }

</script>

<style scoped>
  .heroTile {
    width: 105px;
    color: white;
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
    margin-bottom: -20px;
  }

  .heroImage img {
    height: 100px;
    width: 100px;
  }

  .attackButton {
    background-color: red;
    border: 1px solid red;
    color: white;
  }

  .healButton {
    background-color: green;
    border: 1px solid green;
    color: white;
  }
</style>
