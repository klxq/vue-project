import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import FilmList from 'components/FilmList'
import FilmContent from 'components/FilmContent'
import Edit from 'components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Hello},
    {path: '/list', component: FilmList},
    {path: '/film/:id', component: FilmContent},
    {path: '/film/:id/edit', component: Edit}
  ]
})
