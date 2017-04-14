import * as Vue from 'vue'
import { Servue } from './servue'
import { IServer } from "./interfaces/IServer";

Vue.use(Servue)

export function Server(controllers: any[] | any): IServer & vuejs.Vue {
  var server: any = new Vue({
    mixins: controllers
  });

  return server;
  // server.info = "David"
  // const port = 3000;
  // server.serve('localhost', port, function () {
  ///// console.log(`Listening ${port}...`)
  // });
  // server.getList( { params: { send: 1323 } });
}