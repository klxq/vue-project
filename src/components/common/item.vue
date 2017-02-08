<template>
  <router-link :to="'/movie/' + item.id">
    <div class="movie">
      <img v-if="item.images" :src="imgProxy(item.images[0])">
      <p>{{ item.desc }}</p>
    </div>
  </router-link>
</template>

<script type="text/ecmascript-6">
  import { imgProxy } from 'common/js/utils'

  export default {
    props: {
      item: Object
    },
    methods: {
      imgProxy
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .movie {
    margin: 20px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    position: relative;
    img {
      max-height: 100px;
      max-width: 120px;
      }
    p {
      display: inline-block;
      width: 400px;
      padding-left: 20px;
      vertical-align: bottom;
      font-size: 1.2rem;
      }
    em {
      position: absolute;
      right: 10px;
      bottom: 10px;
      }
    }
</style>
