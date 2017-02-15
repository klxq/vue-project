# vue-project

> A Vue.js project

## Run API server

If you don't have permission to run start.sh script, you'd better update permission for this shell script first.

API:

  http://localhost:3000/films

  http://localhost:3000/films/:id


``` bash
$ chmod 755 ./start.sh
```

``` bash
$ ./start.sh

# npm run dev will load API server automatically
$ npm run dev
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
