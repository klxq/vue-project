import { STORAGE_FILM_KEY } from './store'

const localStoragePlugin = store => {
  store.subscribe((mutation, { film }) => {
    window.localStorage.setItem(STORAGE_FILM_KEY, JSON.stringify(film))
  })
}

export default [localStoragePlugin]
