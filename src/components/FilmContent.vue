<template>
  <div class="filmContent">
    <h1 class="content">
      <a class="title" v-if="filmContent" :href="filmContent.alt">{{ filmContent.title }}</a>
    </h1>
    <div class="post">
      <img v-if="filmContent.images" :src=imgProxy(filmContent.images.large)>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { imgProxy } from 'common/js/utils'

  export default {
    name: 'filmContent',
    mounted () {
      this.getFilmContent()
    },
    data () {
      return {
        filmContent: Object
      }
    },
    methods: {
      imgProxy,
      getFilmContent: function () {
        let id = this.$route.params.id
        this.$http.get('http://localhost:3000/films/' + id)
        .then(response => {
          this.filmContent = response.body[0]
          console.log(this.filmContent)
        }, response => {
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
