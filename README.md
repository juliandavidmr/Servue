# Servue

[![Greenkeeper badge](https://badges.greenkeeper.io/juliandavidmr/Servue.svg)](https://greenkeeper.io/)

> A reactive backend that implements the best of javascript, such as VueJS, SocketIO, _and Redux?_

- [x] Routes
- [x] Reactive controllers
- [x] Middlewares
- [ ] Reactive Socket
- [ ] Render templates VueJS

## Usage

**Module: _main.ts_**
```ts
import { Server } from "../../../"
import { Main } from "./app.module"

Server(Main).serve('localhost', 3000, () => {
  console.log("Run server port %i", 3000);  
});
```

**Module: _app.module.ts_**
```ts
import { Module } from '../../../'
import { Pet } from "../controllers/PetController";
import { User } from "../controllers/UserController";

function middleware(req, res, next) {
  console.log("Middleware executed");
  next();
}

@Module({
  controllers: [
    Pet,
    User
  ],
  use: [],
  middlewares: [
    middleware
  ]
})
export class Main { }
```

**Module: _PetController.ts_**
```ts
@VueController({})
export class Pet extends Vue {

  @Prop name: string = "Julian";

  created() {
    console.log("Pet mounted")
  }

  @Get('list')
  getList(req: any, res, next) {
    console.log("ID :", req.params)
    res.json([{ name: 'David' }])
  }
}
```

**Controller: _UserController.ts_**
```typescript
@VueController({
  prefix: 'usercontroller'
})
export class User extends Vue {

  @Prop info: string = "Julian";

  created() {
    console.log("User mounted")
  }

  @Watch("info", { deep: true })
  onInfoChanged(val) {
    console.log("Value", val);
  }

  @Get({
    path: '/data/:id'
  })
  getData(req: any, res, next) {
    console.log("ID :", req.params)
    return res.send("Hello, I am a controller TS")
  }

  @Get('list')
  getList(req: any, res, next) {
    console.log("ID :", req.params)
    return res.json([{ name: 'David' }])
  }

  @Get({
    path: '/info/:data',
  })
  getInfo(req: any, res, next) {
    console.log("ID :", req.params)
    return res.send("Hello, I am a controller TS")
  }

  @Post({})
  getPost(req: any, res, next) {
    console.log("ID :", req.params)
    return res.send("Request Post :)")
  }
}
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
