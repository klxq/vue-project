export const getMovieList = ({ commit }, id) => {
  API.MovieIdResource(id).then(res => {
    if (res.statusText === 'OK') {
      let list = res.data
      commit('ADD_SECTIONLIST', list)
    }
  })
}