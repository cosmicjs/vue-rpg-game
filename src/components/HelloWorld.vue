<template>
  <div>
  </div>
</template>

<script>
import bucket from '../../config/config.js'
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
    computed: {},
    methods: {
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
          console.log(this.homeScreenTitle)
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

</style>
