var axios = require('axios')

const API_ROOT = 'http://localhost:3000/films'
axios.default.withCredentials = true

export default {
  FilmListResource () {
    return axios.get(API_ROOT)
  },
  FilmResource (id) {
    return axios.get(API_ROOT.concat('/' + id))
  },
  EditResource (id) {
    return axios.post(API_ROOT.concat('/' + id), {
      headers: {
        'Content-Type': 'multipart/form-data'
      }})
  }
}
