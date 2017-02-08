export const getMovieList = ({ commit }, id) => {
  API.MovieResource()
    .then(res => {
    if (res.statusText === 'OK') {
      let list = res.data
      commit('ADD_MOVIELIST', list)
    }
  })
}