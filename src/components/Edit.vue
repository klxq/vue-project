<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="edit">
      <form id="edit" v-on:submit.prevent="editFilm">
          <div class="form-group"><label>Title: </label><input type="text" v-model="film.title" :value="film.title"></div>
          <div class="form-group"><label>Rating: </label><input type="text" v-model="film.rating.average" v-if="film.rating" :value="film.rating.average"></div>
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
  export default {
    name: 'Edit',
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
      getFilmContent: function () {
        let id = this.$route.params.id
        this.id = id
        this.$http.get('http://localhost:3000/films/' + id)
          .then(response => {
            this.film = response.body[0]
          }, response => {
          })
      },
      editFilm: function () {
        var $this = this
        let id = this.$route.params.id
        this.$http.post('http://localhost:3000/films/' + id, this.film, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(response => {
            $this.getFilmContent()
          }, response => {
          })
      }
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
        width: 60px;
        display: inline-block;
        padding-right: 10px;
    }
    input[type="text"] {
        display: inline-block;
        height: 1.2rem;
        line-height: 1.8rem;
        padding: 0 0.3rem;
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
