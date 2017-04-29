import * as Vue from 'vue'
import { Servue } from './servue'
import { IServer } from "./interfaces/IServer";

// Vue.use(Servue)

export function Server(options: any): IServer & vuejs.Vue {
  // console.log("Opciones dos:", options);
  let _controllers = options['controllers']; // The mixins: controllers  

  Vue.use(Servue, options);

  var server: any = new Vue({
    mixins: _controllers
  });

  return server;
  // server.info = "David"
  // const port = 3000;
  // server.serve('localhost', port, function () {
  ///// console.log(`Listening ${port}...`)
  // });
  // server.getList( { params: { send: 1323 } });
}