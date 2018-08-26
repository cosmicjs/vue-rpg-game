<template>
  <div class="storyIntro">

  </div>
</template>

<script>

  export default {
    props: [],
    data() { return {} },
    components: {},
    mounted() {

    },
    computed: {},
    methods: {
      async getResObject() {
        const slug = 'home'
        try {
          const res = await bucket.getObject({ slug })
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
