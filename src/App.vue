<template>
  <div id="app">
    <HomeScreen v-show="currentView == 'homeScreen'"/>
    <StoryIntro v-show="currentView == 'storyIntro'"/>
    <PlayGame v-show="currentView == 'playGame'"/>
    <EnemyDefeated v-show="currentView == 'enemyDefeated'"/>
    <GameOver v-show="currentView == 'gameOver'"/>
    </div>
  </div>
</template>

<script>
import HomeScreen from './components/screens/HomeScreen'
import StoryIntro from './components/screens/StoryIntro'
import PlayGame from './components/screens/PlayGame'
import GameOver from './components/screens/GameOver'
import EnemyDefeated from './components/screens/EnemyDefeated'

import bucket from '../config/config.js'

export default {
  name: 'App',
  components: {
    HomeScreen,
    StoryIntro,
    PlayGame,
    GameOver,
    EnemyDefeated
  },
  computed: {
    currentView() {
      return this.$store.state.currentView
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
