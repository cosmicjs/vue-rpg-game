<template>
  <div class="game-over-screen">
     <div class="game-over-text" v-html="gameOverText">

     </div>

    <button type="button" v-on:click="reload()">Return To Home Screen</button>
  </div>
</template>

<script>
  import bucket from '../../../config/config.js'
  const Cosmic = require('cosmicjs')
  const api = Cosmic()

  export default {
    props: [],
    data() {
      return {
        gameOverText: ''
      }
    },
    components: {},
    mounted() {
      this.loadContent()
    },
    computed: {},
    methods: {
      reload() {
        window.location.reload(true);
      },
      async loadContent() {
        const slug = 'game-over'
        try {
          const res = await bucket.getObject({ slug })
          this.gameOverText = res.object.content
        } catch(e) {
          console.log('Error getting Game Over Object', e)
        }
      }

    },
    watch: {}
  }

</script>

<style scoped>
  .game-over-screen {
    background: black;
    height: 100vh;
    color: white
  }

  .game-over-screen p {
    margin: 0px !important;
  }

  .game-over-text {
    padding-top: 50px;
  }

  .game-over-text p {
    margin: 0;
    font-family: 36px;
  }

  button {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
</style>
