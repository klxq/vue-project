import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import MovieList from 'components/MovieList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Hello},
    {path: '/list', component: MovieList}
  ]
})
