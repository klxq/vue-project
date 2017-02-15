var axios = require('axios')

const API_ROOT = "http://localhost:3000/"
axios.default.withCredentials = true

export default {
  FilmResource () {
    return axios.get(API_ROOT.concat("films"))
  }
}


