<template>
  <div class="tutorial-screen">
    <h1> HOW TO PLAY </h1>
    <div class="tutorial-content" v-html="tutorialContent">

    </div>
    <!-- TODO: Add instructiosn for global keypresses -->
    <button type="button" v-on:click="changeView('homeScreen')"> Return </button>
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
        tutorialContent: ''
      }
    },
    components: {},
    mounted() {
      this.loadTutorialContent()
    },
    computed: {},
    methods: {
      changeView(view) {
        this.$store.commit('changeView', view)
      },
      async loadTutorialContent() {
        const slug = 'tutorial'
        try {
          const res = await bucket.getObject({ slug })
          this.tutorialContent = res.object.content
        } catch(e) {
          console.log('Error getting Tutorial Object', e)
        }
      }
    },
    watch: {}
  }

</script>

<style scoped>
  .tutorial-screen {
    background-color: black;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #92ced6;
    padding: 50px;
  }

  .tutorial-screen h1 {
    margin: 0;
    background: black;
    text-decoration: underline;
  }

  .tutorial-screen p {
    font-size: 36px;
    background: black;
  }

  .tutorial-screen button {
    background: black;
    font-size: 36px;
    padding: 20px 40px;
    border: 1px solid #92ced6;
    color: #92ced6;
  }

  .tutorial-content {
    font-size: 36px;
  }
</style>
