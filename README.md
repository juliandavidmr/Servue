# Servue

> A Vue.js project

- [x] Routes
- [ ] Reactive Socket
- [ ] Render templates VueJS
- [ ] Reactive cookies

## Usage

```js
import Vue from 'vue'
import Servue from 'servue'

Vue.use(Servue);


var MyVue = new Vue({
  name: 'app',
  data: () => {
    return {
      secondname: 'David'
    }
  },
  watch: {
    secondname: function (val) {
      console.log("Object secondname has changed", val)
    }
  },
  methods: {
    profile: (req, res, next) => {
      res.send("Hello, This is a profile");
    },
    'get:token': (req, res, next) => {
      res.send("Token is" + Math.random());
    }
  }
});

const port = 3000;

MyVue.serve('localhost', port, function () {
  console.log(`Listening ${port}...`)
});
```

## Build Setup

``` bash
# install dependencies
npm install

# serve localhost:3000
npm run start
```


License MIT @juliandavidmr