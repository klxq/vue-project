<template>
  <div class="film-item">
    <div class="film-item--image">
      <router-link :to="'/film/' + item.id">
        <img v-if="item.images" :src="item.images.large">
      </router-link>
    </div>
    <div class="film-item--footer">
      <span class="film-item--title">
        <router-link :to="'/film/' + item.id">
          {{ item.title }}
        </router-link>
      </span>
      <span class="film-item--rate">{{ item.rating.average }}</span>
    </div>
  </div>
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
  .film-item {
    display: inline-block;
    float: left;
    width: 220px;
    margin: 5px 15px 15px 0;


    .film-item--image {
      img {
        display: block;
        width: 220px;
        height: 300px;
        transition: all .5s ease-in-out;

        &:hover {
          transform: scale(1.05);
          transition: all .5s ease-in-out;
        }
      }
    }
    .film-item--footer {
      position: relative;

      .film-item--title {
        display: block;
        height: 24px;
        line-height: 24px;
        margin-top: 15px;
        text-align: left;

        & > a {
          text-decoration: none;
          font-weight: bold;
          font-size: 16px;
          color: #222;

          &:hover {
            color: #e1b355;
          }
        }
      }
      .film-item--rate {
        position: absolute;
        font-weight: bold;
        right: 0;
        bottom: 0;
        color: #fa5058;
      }
    }
  }
</style>
