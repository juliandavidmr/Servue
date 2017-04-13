import * as Vue from 'vue'
import { VueController, Watch, Prop, Get } from '../../../'

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