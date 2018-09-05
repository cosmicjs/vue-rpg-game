<template>
  <div class="victoryScreen">
    <div class="victory-screen-text" v-html="content">

    </div>
    <button type="button" v-on:click="reloadGame()"> Return To Home Screen </button>
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
        content: ''
      }
    },
    components: {},
    mounted() {
      this.loadContent()
    },
    computed: {},
    methods: {
      reloadGame() {
        window.location.reload(true);
      },
      async loadContent() {
        const slug = 'victory'
        try {
          const res = await bucket.getObject({ slug })
          this.content = res.object.content
        } catch(e) {
          console.log('Error getting Victory Screen Object', e)
        }
      }
    },
    watch: {}
  }

</script>

<style scoped>
  .victoryScreen {
    background-image: url('https://cosmic-s3.imgix.net/60861160-af9f-11e8-98c3-51c5ac510cfb-VictoryBG.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    color: white;
    padding: 50px;
    font-size: 36px;
  }

  h1 {
    margin: 0;
  }

  button {
    background: none;
    border: 1px solid white;
    padding: 10px;
    font-size: 26px;
    color: white;
    margin-top: 25px;
  }
</style>
