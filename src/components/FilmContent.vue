<template>
  <div v-if="film" class="filmContent">
    <h1 class="title">{{ film.title }} / {{ film.original_title}} <span class="year">({{ film.year }})</span></h1>
    <div class="content">
      <div class="post">
        <img v-if="film.images" :src=imgProxy(film.images.large)>
      </div>
      <div class="description">
        <ul class="details">
          <li><span>导演：</span><span v-for="director in film.directors">{{ director.name }}</span></li>
          <li><span>主演：</span><span v-for="cast in film.casts">{{ cast.name }}/</span></li>
          <li><span>类型：</span><span v-for="genres in film.genres">{{ genres }}/</span></li>
          <li><span>评分：</span><span v-if="film.rating" class="rating">{{ film.rating.average }}</span></li>
        </ul>
      </div>
      <div class="edit">
        <router-link :to="'/film/' + id + '/edit'">
          <button>Edit</button>
        </router-link>
      </div>
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
        film: Object,
        id: 0
      }
    },
    methods: {
      imgProxy,
      getFilmContent: function () {
        let id = this.$route.params.id
        this.id = id
        this.$http.get('http://localhost:3000/films/' + id)
        .then(response => {
          this.film = response.body[0]
        }, response => {
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
ul {
  list-style: none;
  line-height: 30px;
  margin: 0 30px;
}
.filmContent {
  text-align: left;
}
.title {
  margin: 10px 0;
  .year {
    color: #888;
  }
}
.content {
  display: flex;
}
button {
  width: 90px;
  height: 25px;
  background-color: #268dcd;
  color: #fff;
  border-radius: 2px;
  font-weight: bold;
  border: 0;
  font-size: 0.9rem;
}
</style>
