<template>
  <div class="movielist">
    <div class="movie" v-if="movieList.results">
      <movieitem v-for="movie in movieList.results" :item="movie"></movieitem>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import movieitem from './common/item.vue'

  export default {
    name: 'movieList',
    mounted () {
      this.$emit('loadingStart')
      this.getMovieList()
    },
    data () {
      return {
        loading: false,
        movieList: []
      }
    },
    methods: {
      getMovieList: function () {
        this.$http.get('http://gank.io/api/data/Android/10/1')
        .then(response => {
          this.movieList = response.body
        }, response => {
        })
      }
    },
    components: {
      movieitem
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .movielist {
    width: 900px;
    margin: 0 auto;
  }
</style>
