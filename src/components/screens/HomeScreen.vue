<template>
  <div class="homeScreen" :style="`background-image:url(${(homeScreenImage)});`">
    <div class="homeScreenTitle">
      <!-- <img :src="`${homeScreenTitleImage}`"> -->
      <img src="../../assets/homeScreenTitleImage.png" >
    </div>

    <div class="homeScreenOptions">
      <div class="homeScreenOption" v-on:click="changeView('storyIntro')">
          Play Game
      </div>

      <div class="homeScreenOption" v-on:click="changeView('howToPlay')">
          How To Play
      </div>
      
    </div>
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
        homeScreenTitle: '',
        homeScreenImage: '',
        homeScreenTitleImage: ''
      }
    },
    components: {},
    mounted() {
      this.getResObject()
    },
    computed: {
      abey() {
        return this.$store.state.abey
      }
    },
    methods: {
      changeView(view) {
        this.$store.commit('changeView', view)
      },
      async getResObject() {
        const slug = 'home'
        try {

          const res = await bucket.getObject({ slug })
          this.resObject = res

          let metafields = res.object.metafields
          metafields.map((field) => {
            if (field.title == 'HomeScreenTitle') {
              this.homeScreenTitle = field.value
            }
            //TODO: Clean these if statements up
            if (field.title == 'HomeScreenImage') {
              this.homeScreenImage = field.url
            }
            if (field.title = 'HomeScreenTitleImage') {
              this.homeScreenTitleImage = field.url
            }
          })
          //
          // const bucket = api.bucket({
          //   slug: 'cosmic-game',
          //   read_key: ''
          // })
          // const data = (await bucket.getMedia({
          // })).media
        }
        catch(e) {
          console.log('Error getting Home Screen Object', e)
        }
      },
    },
    watch: {}
  }

</script>

<style scoped>
  .homeScreen {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed!important;
    overflow:hidden;
    text-align: center;
  }

  .homeScreenTitle {
    margin-top: 75px;
  }

  .homeScreenOptions {
    margin: 45px auto 0 auto;
    width: 30%;
    cursor: pointer;
  }

  .homeScreenOption {
    border: 2px solid #92ced6;
    color: #92ced6;
    padding: 10px;
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 25px;
  }
</style>
