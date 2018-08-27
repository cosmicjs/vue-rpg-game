<template>
  <div class="enemyTile">
    <div class="enemyHealthBarOuter">
      <div class="enemyHealthBarInner" v-bind:style="calculateHealthBar"></div>
    </div>

    <div class="enemyName">{{currentEnemy.name}}</div>
    <img class="enemyImage" :src="currentEnemy.image">
  </div>
</template>

<script>
  //TODO: Get this from Cosmic!
  //TODO: Also, change the images
  import EnemyList from './EnemyList.json'

  export default {
    props: [],
    data() {
      return {
        currentEnemyNames: [],
      }
    },
    components: {},
    beforeCreate () {
      this.currentEnemyNames = Object.keys(EnemyList)
      this.$store.commit('initializeEnemy', EnemyList[this.currentEnemyNames[0]])
    },
    mounted() {
      this.currentEnemyNames = Object.keys(EnemyList)
    },
    computed: {
      currentEnemy() {
        // let enemy = this.$store.state.currentEnemy
        return this.$store.state.currentEnemy
      },
      currentEnemyHealth() {
        return this.currentEnemy.health
      },
      currentEnemyMaxHealth() {
        return this.currentEnemy.max_health
      },
      calculateHealthBar() {
        if (this.currentEnemy) {
          return {
            width: (this.currentEnemyHealth/this.currentEnemyMaxHealth)*100 + '%'
          }
        }
      }
    },
    methods: {
      enemyKilled() {
        if (this.currentEnemyNames.length == 1) {
          this.$store.commit('changeView', 'victoryScreen')
          return
        }
        this.$store.commit('grantExperience', this.currentEnemy.experience)
        this.$store.commit('changeView', 'enemyDefeated')
        this.updateEnemy()
      },
      updateEnemy() {
        this.currentEnemyNames.shift()
        this.$store.commit('initializeEnemy', EnemyList[this.currentEnemyNames[0]])
      }
    },
    watch: {
      currentEnemyHealth() {
        if (this.currentEnemyHealth <= 0) {
          this.enemyKilled()
        }
      }
    }
  }

</script>

<style scoped>
  .enemyTile {
    width: 105px;
    color: white;
  }

  .enemyHealthBarOuter {
    border: 1px solid black;
    width: 100px;
    height: 10px;
  }

  .enemyHealthBarInner {
    height: 100%;
    background: red;
  }

  .enemyImage {
    height: 100px;
    width: 100px;
  }
</style>
