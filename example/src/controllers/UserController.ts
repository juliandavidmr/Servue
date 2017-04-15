import * as Vue from 'vue'
import { VueController, Watch, Prop, Get, Del, Post, Put, Head } from '../../../'

/**
 * Server
 */
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