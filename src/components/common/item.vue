<template>
  <router-link :to="'/film/' + item.id">
    <div class="film">
      <img v-if="item.images" :src="imgProxy(item.images.small)">
      <p>{{ item.title }}</p>
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
  .film {
    margin: 20px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    position: relative;

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
