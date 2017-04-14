///<reference path="../typings/globals/node/index.d.ts"/>
///<reference path="../typings/globals/vue/index.d.ts"/>

import * as express from 'express'
import * as http from 'http'
import { uniqueObject } from './utils/concat';

import routes from './routes'
import renderer from './renderer'

export function Servue(Vue, options: Object) {
  Vue.appx = express()
  var server = http.createServer(Vue.appx);
  Vue.prototype.io = require('socket.io').listen(server);

  // add global method or property: serve
  Vue.serve = __serve;

  // inject some component options
  Vue.mixin({
    created: function () {
      let _mixins = [];
      for (var key in this.$options.mixins) {
        _mixins.push(this.$options.mixins[key]['methods']);
      }
      routes(uniqueObject(_mixins), Vue.appx);
    }
  })
  // add an instance method
  Vue.prototype.serve = __serve;

  function __serve(ip, port, cb) {
    // Vue.appx.set('port', process.env.PORT || port || 3000);
    Vue.appx.listen(port, ip, cb)
  }
}
