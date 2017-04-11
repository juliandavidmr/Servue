# Servue

> A Vue.js project

- [x] Routes
- [ ] Reactive Socket
- [ ] Render templates VueJS
- [ ] Reactive cookies

## Usage

Controller:
```js
import * as Vue from 'vue'
import { VueController, Watch, Prop, Get } from '../../'

@VueController({
  prefix: 'user'
})
export default class User extends Vue {

  @Prop info: string = "Julian";

  created() {
    console.log("User mounted")
  }

  @Watch("info", { deep: true })
  onInfoChanged(val) {
    console.log("Value", val);
  }

  @Get({
    path: '/:id'
  })
  getList(req: any, res, next) {    
    console.log("ID :", req.params)
    res.send("Hello, I am a controller TS")
  }
}
```

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