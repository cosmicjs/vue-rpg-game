import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentView: 'homeScreen',
    currentViewOptions: ['homeScreen', 'howToPlay', 'storyIntro',
                         'enemySelectionScreen', 'playGame'],

    // Hero Stats
    currentHeroHealth: 100,
    currentHeroMaxHealth: 100,
    currentHeroLevel: 1,
    currentHeroExperience: 0,
    experienceToNextLevel: 50,
    currentHeroState: 'Idle',
    currentHeroStateOptions: ['idle', 'attacking1', 'attacking2', 'poisoned', 'slain'],
    heroImages: {
      'Idle': '~/src/assets/HeroIdle.gif'
    },

    // Enemy Stats
    currentEnemy: {},
  },
  getters: {

  },
  mutations: {
    changeView(state, view) {
      return state.currentView = view
    },
    initializeEnemy(state, enemy) {
      state.currentEnemy = enemy
    },
    damageEnemy(state, damage) {
      return state.currentEnemy.health = state.currentEnemy.health - damage
    },
    damageHero(state) {
      state.currentHeroHealth = state.currentHeroHealth - state.currentEnemy.damage
      console.log('Ouch', state.currentEnemy.damage)
      if (state.currentHeroHealth <= 0) {
        state.currentHeroState = 'Dead'
      }
    },
    healHero(state, heal) {
      console.log('Healing..', state.currentHeroHealth)
      state.currentHeroHealth = state.currentHeroHealth + heal
      if (state.currentHeroHealth > state.currentHeroMaxHealth) {
        state.currentHeroHealth = state.currentHeroMaxHealth
      }
      console.log('Healed:', state.currentHeroHealth)
    },
    updateHeroStatus(state, status) {
      state.currentHeroState = status
    },
    grantExperience(state, exp) {
      state.experienceToNextLevel = state.experienceToNextLevel - exp
      if (state.experienceToNextLevel <= 0) {
        state.currentHeroLevel += 1
        state.experienceToNextLevel = (state.currentHeroLevel * 50)
      }
    }
  }
})

export default store
