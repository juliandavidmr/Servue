# Servue

> A reactive backend that implements the best of javascript, such as VueJS, SocketIO, _and Redux?_

- [x] Routes
- [x] Reactive controllers
- [ ] Reactive Socket
- [ ] Render templates VueJS

## Usage

**Controller: _UserController.ts_**
```typescript
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
    console.log("Value:", val);
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

**Server: _Server.ts_**
```typescript
import * as Vue from 'vue'
import { Servue } from '../../'

Vue.use(Servue)

import UserController from './UserController'

var server: any = new Vue({
  mixins: [UserController]
});

// Test: Activate watch
server.info = "David" //=> Value: David

const port = 3000;
server.serve('localhost', port, function () {
  console.log(`Listening ${port}...`)
});
```

## Build Setup

``` bash
# install dependencies
npm install

# Clean and build
npm run prebuild

# serve localhost:3000
npm run prepublish
```

### [Changelog](./docs/History.md)

License MIT [@juliandavidmr](https://github.com/juliandavidmr)
