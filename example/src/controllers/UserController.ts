import * as Vue from 'vue'
import { VueController, Watch, Prop, Get, Del, Post, Put, Head } from '../../../'

/**
 * Server
 */
@VueController({
  prefix: 'usercontroller'
})
export class User extends Vue {

  info: string = "Julian";

  created() {
    console.log("User mounted")

    this.info = "Holaaaaa"
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
    console.log("Local:", req.locals);
    // req.local = "Holaaaaa"
    return res.send("Hello, I am a controller TS")
  }

  @Get('list')
  getList(req: any, res, next) {
    console.log("Listado de users:", req.params)
    return res.json([{ name: 'David' }])
  }

  @Get({
    path: '/info/:data',
  })
  getInfo(req: any, res, next) {
    console.log("Get info data:", req.params)
    return res.send("Hello, I am a controller TS")
  }

  @Post({})
  getPost(req: any, res, next) {
    console.log("Un post:", req.params)
    return res.send("Request Post :)")
  }
}