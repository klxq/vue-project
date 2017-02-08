<template>
  <div class="movielist">
    <div class="movie" v-if="movieList.stories">
      <movieitem v-for="movie in movieList.stories" track-by="id" :item="movie"></movieitem>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import movieitem from './common/item.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      movieitem
    },
    computed: {
      ...mapGetters(['movieList']),
      id () {
        return this.$route.params.id
      }
    },
    methods: {
      ...mapActions(['getMovieList'])
    },
    mounted () {
      this.$emit('loadingStart')
      this.getMovieList(this.$route.params.id)
          .then(() => {
            this.$emit('loadingDone')
          })
    },
    watch: {
      id () {
        this.$emit('loadingStart')
        this.getMovieList(this.$route.params.id)
            .then(() => {
              this.$emit('loadingDone')
            })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>
