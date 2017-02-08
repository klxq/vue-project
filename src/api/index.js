var axios = require('axios')

const API_ROOT = "https://api.douban.com/v2/"
axios.default.withCredentials = true

export default {
  MovieResource () {
    return axios.get(API_ROOT.concat("movie/in_theaters"))
  }
}


