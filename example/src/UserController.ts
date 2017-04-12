import * as Vue from 'vue'
import { VueController, Watch, Prop, Get } from '../../'

/**
 * Server
 */
@VueController({
  prefix: 'usercontroller'
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
  getData(req: any, res, next) {
    console.log("ID :", req.params)
    res.send("Hello, I am a controller TS")
  }

  @Get('list')
  getList(req: any, res, next) {
    console.log("ID :", req.params)
    res.json([{ name: 'David' }])
  }
}