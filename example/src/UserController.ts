import * as Vue from 'vue'
import { VueController, Watch, Prop, Get } from '../../'

/**
 * Server
 */
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