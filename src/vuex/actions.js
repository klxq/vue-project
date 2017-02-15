export const getFilmList = ({ commit }, id) => {
  API.FilmResource()
    .then(res => {
    if (res.statusText === 'OK') {
      let list = res.data
      commit('ADD_FILMLIST', list)
    }
  })
}