<template>
  <div class="heroTile">
    <div class="heroHealthBarOuter">
      <div class="heroHealthBarInner" v-bind:style="calculateHealthBar"></div>
    </div>

    <div class="heroLevel">
      Level: {{ heroLevel }}
    </div>
    <div class="heroImage">
      <img v-show="currentHeroState == 'Idle'" src="https://cosmic-s3.imgix.net/996373a0-afa0-11e8-a99f-65e6ba2822f8-HeroIdle.gif">
      <img v-show="currentHeroState == 'Attacking'" src="https://cosmic-s3.imgix.net/99648510-afa0-11e8-b42b-d394ef03d4da-HeroAttack1.gif">
    </div>

    <div class="heroActions">
      <button class="attackButton" type="button" v-on:click="heroAttack()"> Attack </button>
      <button class="healButton" type="button" v-on:click="heroHeal()"> Heal </button>
      <button class="specialAttackButton" type="button" v-on:click="heroSpecialAttack()"
              v-bind:class="[ cooldown != 0 ? 'opaqueButton' : '']"> Special Attack
    </button>
    </div>
  </div>
</template>

<script>

  export default {
    props: [],
    data() { return {
        cooldown: 0
    }
  },
    components: {},
    mounted() {
      let self = this
      window.addEventListener('keydown', function(e) {
        if (self && self.$store) {
          let view = self.$store.state.currentView
          if (view != 'playGame') {
            return
          }
        }
        
        if (e.keyCode == 65) {
          self.heroAttack()
        }
        if (e.keyCode == 72) {
          self.heroHeal()
        }
        if (e.keyCode == 83) {
          self.heroSpecialAttack()
        }
      });
    },
    computed: {
      currentHeroState() {
        return this.$store.state.currentHeroState
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
        let message = {
          action: 'attack',
          amount: this.heroAttackPower,
          cooldown: this.cooldown
        }
        this.$store.commit('updateCurrentActionMessages', message)
        if (this.cooldown > 0) {
          this.cooldown -= 1
        }
      },
      heroHeal() {
        this.$store.commit('healHero', this.heroHealPower)
        this.$store.commit('damageHero')
        let message = {
          action: 'heal',
          amount: this.heroHealPower,
          cooldown: this.cooldown
        }
        this.$store.commit('updateCurrentActionMessages', message)
        if (this.cooldown > 0) {
          this.cooldown -= 1
        }
      },
      heroSpecialAttack() {
        if (this.cooldown > 0) {
          return
        }
        let specialAttackPower = this.heroAttackPower * 1.5
        this.$store.commit('damageEnemy', specialAttackPower)
        this.$store.commit('updateHeroStatus', 'Attacking')
        this.$store.commit('damageHero')
        this.cooldown = 3
        let message = {
          action: 'special attack',
          amount: specialAttackPower,
          cooldown: this.cooldown
        }
        this.$store.commit('updateCurrentActionMessages', message)
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

  .specialAttackButton {
    background-color: #5bc0de;
    border: 1px solid #5bc0de;
    color: white;
  }

  .opaqueButton {
    opacity: 0.5;
  }
</style>
