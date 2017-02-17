<template>
  <div class="filmlist" v-if="filmList">
    <filmitem v-for="film in filmList" :item="film"></filmitem>
  </div>
</template>

<script type="text/ecmascript-6">
  import filmitem from './common/item.vue'

  export default {
    name: 'filmList',
    mounted () {
      this.$emit('loadingStart')
      this.getFilmList()
    },
    data () {
      return {
        loading: false,
        filmList: []
      }
    },
    methods: {
      getFilmList: function () {
        this.$http.get('http://localhost:3000/films')
        .then(response => {
          this.filmList = response.body
        }, response => {
        })
      }
    },
    components: {
      filmitem
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .filmlist {
    margin-right: -15px;

    &:after {
      content: " ";
      display: block;
      clear: both;
    }
  }
</style>
