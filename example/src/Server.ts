import * as Vue from 'vue'
import { Servue } from '../../'

Vue.use(Servue)

import UserController from './UserController'

console.log("Class:", UserController['data'])

var server: any = new Vue({
  mixins: [UserController]
});

server.info = "David"
const port = 3000;
server.serve('localhost', port, function () {
  console.log(`Listening ${port}...`)
});
// server.getList( { params: { send: 1323 } });

