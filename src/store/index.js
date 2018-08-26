import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentView: 'homeScreen',
    currentViewOptions: ['homeScreen', 'howToPlay', 'playGame']
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
