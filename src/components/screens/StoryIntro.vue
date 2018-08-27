<template>
  <div class="storyIntro">
    <div class="storyIntroText" v-html="storyText"></div>
    <button type="button" v-show="showContinue" v-on:click="changeView('playGame')">
      Continue
    </button>
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
        storyText: '',
        showContinue: false
      }
    },
    components: {},
    mounted() {
      this.getResObject()

      let self = this
      setTimeout(function(){
        self.showContinue = true;
      }, 4000);
    },
    computed: {
      storyIntroBackground() {
        return ''
      }
    },
    methods: {
      changeView(view) {
        this.$store.commit('changeView', view)
      },
      async getResObject() {
        const slug = 'story'
        try {
          const res = await bucket.getObject({ slug })
          this.storyText = res.object.content
        }
        catch(e) {
          console.log('Error getting Story Intro Res', e)
        }
      },
    },
    watch: {}
  }

</script>

<style scoped>
  .storyIntro {
    background-image: url('../../assets/screens/storyIntroBG.gif');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    font-size: 32px;
    color: white;
  }

  .storyIntroText {
    width: 50%;
    margin: 0 auto 0 auto;
    padding: 30px;
  }

  .storyIntro button {
    background: none;
    font-size: 32px;
    color: white;
    padding: 10px;
    text-transform: uppercase;
    border: 2px solid white;
    box-shadow: 0px 17px 10px -10px rgba(0,0,0,0.4);
    width: 250px;
  }
</style>
