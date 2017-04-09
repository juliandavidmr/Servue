# servue

> A Vue.js project

- [x] Routes
- [] Socket.IO
- [] Render templates VueJS
- [] Reactive cookies
- [] Reactive localstorage

## Usage

```js
import Vue from 'vue'
import Servue from 'servue'

Vue.use(Servue);

var MyVue = new Vue({
  name: 'app',
  data: () => {
    return {
      cookies: {
        token: 'kkk'
      }
    }
  },
  api: {
    profile: (req, res, next) => {
      res.send("Hello, This is a profile");
    },
    'get:token': (req, res, next) => {
      res.send("Token is" + Math.random());
    }
  }
});

MyVue.serve('localhost', 3000, function () {
  console.log("Listening...")
});
```

## Build Setup

``` bash
# install dependencies
npm install

# serve localhost:3000
npm run start
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


https://alligator.io/vuejs/creating-custom-plugins/
https://github.com/alexmingoia/koa-router