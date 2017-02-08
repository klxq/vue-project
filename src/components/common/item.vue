<template>
  <router-link :to="'/movie/' + item.id">
    <div class="movie">
      <img v-if="item.images" v-lazy="item.images[0]">
      <p>{{ item.title }}</p>
    </div>
  </router-link>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      item: Object
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
      margin: 20px;
      padding-left: 20px;
      vertical-align: middle;
      font-size: 1.6rem;
      }
    em {
      position: absolute;
      right: 10px;
      bottom: 10px;
      }
    }
</style>
