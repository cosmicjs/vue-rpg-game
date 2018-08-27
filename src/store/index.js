import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentView: 'homeScreen',
    currentViewOptions: ['homeScreen', 'howToPlay', 'storyIntro',
                         'enemySelectionScreen', 'playGame', 'enemyDefeated'],
    currentActionMessagesFirst: 'Begin Fight',
    currentActionMessagesSecond: 'Good luck!',

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
    updateCurrentActionMessages(state, action) {
      console.log('msg updated in state')
      let powerAmt = state.currentHeroLevel * 10
      state.currentActionMessagesFirst = `You ${action} for ${powerAmt}!`
      state.currentActionMessagesSecond = `${state.currentEnemy.name} attacks for ${state.currentEnemy.damage}!`
    },
    initializeEnemy(state, enemy) {
      state.currentEnemy = enemy
    },
    damageEnemy(state, damage) {
      return state.currentEnemy.health = state.currentEnemy.health - damage
    },
    damageHero(state) {
      state.currentHeroHealth = state.currentHeroHealth - state.currentEnemy.damage
      if (state.currentHeroHealth <= 0) {
        state.currentHeroState = 'Dead'
      }
    },
    healHero(state, heal) {
      state.currentHeroHealth = state.currentHeroHealth + heal
      console.log('healed for', heal)
      if (state.currentHeroHealth > state.currentHeroMaxHealth) {
        state.currentHeroHealth = state.currentHeroMaxHealth
      }
    },
    updateHeroStatus(state, status) {
      state.currentHeroState = status
      if (status == 'Attacking') {
        setTimeout(function(){
          state.currentHeroState = 'Idle';
        }, 500);
      }
    },
    grantExperience(state, exp) {
      state.experienceToNextLevel = state.experienceToNextLevel - exp
      if (state.experienceToNextLevel <= 0) {
        state.currentHeroLevel += 1
        state.currentHeroMaxHealth += 50
        state.currentHeroHealth = state.currentHeroMaxHealth
        state.experienceToNextLevel = (state.currentHeroLevel * 50)
      }
    }
  }
})

export default store
