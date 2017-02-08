import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import plugins from './plugins'

Vue.use(Vuex)

export const STORAGE_MOVIE_KEY = 'movieList'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    movieList: JSON.parse(window.localStorage.getItem(STORAGE_MOVIE_KEY) || '[]')
  },
  getters,
  mutations,
  actions,
  plugins
})
