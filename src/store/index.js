import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentView: 'homeScreen',
    currentViewOptions: ['homeScreen', 'howToPlay', 'playGame', 'enemySelectionScreen'],

    // Hero Stats
    currentHeroHealth: 90,
    currentHeroMaxHealth: 100,
    currentHeroState: 'Idle',
    currentHeroStateOptions: ['idle', 'attacking1', 'attacking2', 'poisoned', 'slain'],
    heroImages: {
      'Idle': '~/src/assets/HeroIdle.gif'
    }
  },
  getters: {

  },
  mutations: {
    changeView(state, view) {
      return state.currentView = view
    }
  }
})

export default store
