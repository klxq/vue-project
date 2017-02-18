<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="edit">
      <form id="edit" v-if="film" v-on:submit.prevent="editFilm">
          <div class="form-group"><label>Title: </label><input type="text" v-model="film.title"></div>
          <div class="form-group"><label>Directors: </label><input type="text" v-for="director in film.directors" v-model="director.name"></div>
          <div class="form-group"><label>Casts: </label><input type="text" class="multi" v-for="cast in film.casts" v-model="cast.name"></div>
          <div class="form-group"><label>Rating: </label><input type="text" class="multi" v-if="film.rating" v-model="film.rating.average"></div>
          <div class="form-group"><label>Genres: </label><input type="text" class="multi" v-for="(genres, index) in film.genres" v-bind:value="genres" v-on:input="film.genres[index] = $event.target.value"></div>
          <div class="form-group">
              <input type="submit" value="submit" class="submit">
              <div class="backBtn">
                  <router-link :to="'/film/' + id">
                      <button>Back</button>
                  </router-link>
              </div>
          </div>
      </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import API from '../api/index'
  import multiInput from './common/multiinput'

  export default {
    name: 'Edit',
    mounted () {
      this.getFilmContent()
    },
    data () {
      return {
        film: Object,
        id: 0,
        item: ''
      }
    },
    methods: {
      getFilmContent: function () {
        let id = this.$route.params.id
        this.id = id
        API.FilmResource(id)
          .then(response => {
            this.film = response.data[0]
          }, response => {
          })
      },
      editFilm: function () {
        let id = this.$route.params.id
        this.id = id
        var $this = this
        API.EditResource(id, this.film)
          .then(response => {
            $this.getFilmContent()
            if (response.status) {
              alert('Edit Success!')
            }
          }, response => {
          })
      }
    },
    components: {
      multiInput
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
.edit {
    font-size: 18px;
    text-align: left;
    padding: 30px;
}
.form-group {
    margin: 10px 0;
    & > label {
        width: 100px;
        display: inline-block;
        padding-right: 10px;
    }
    input[type="text"] {
        display: inline-block;
        height: 1.3rem;
        line-height: 1.8rem;
        padding: 0 0.3rem;
        margin: 0 0.1rem;
        font-size: 0.9rem;
    }
}
.submit {
    width: 90px;
    height: 25px;
    background-color: #268dcd;
    color: #fff;
    border-radius: 2px;
    font-weight: bold;
    border: 0;
    font-size: 0.9rem;
}
.backBtn {
    display: inline-block;
    margin-left: 30px;
}
</style>
