import { STORAGE_MOVIE_KEY } from './store'

const localStoragePlugin = store => {
  store.subscribe((mutation, { movie }) => {
    window.localStorage.setItem(STORAGE_MOVIE_KEY, JSON.stringify(movie))
  })
}

export default [localStoragePlugin]
