///<reference path="../typings/globals/node/index.d.ts"/>

import * as express from 'express'
import * as http from 'http'
import './utils'

import routes from './routes'
import * as constants from './constants'
import renderer from './renderer'

export default function (Vue, options) {
  Vue.appx = express()
  var server = http.createServer(Vue.appx);
  Vue.prototype.io = require('socket.io').listen(server);
  
  console.log("hle", renderer)
  Vue.prototype.renderer = renderer;

  // add global method or property: serve
  Vue.serve = __serve;

  // inject some component options
  Vue.mixin({
    watch: {
      cookies: {
        // getter
        get: () => {
          console.log("*")
          return Object.keys(this.cookies)
        },
        // setter
        set: (newValue) => {
          const val = newValue;
          return `=> ${val}`;
        },
      },
    },
    created: function () {
      var _api = this.$options.methods;
      // console.log(_api)
      routes(_api, Vue.appx);
    }
  })
  // add an instance method
  Vue.prototype.serve = __serve;

  function __serve(ip, port, cb) {
    // Vue.appx.set('port', process.env.PORT || port || 3000);
    Vue.appx.listen(port, ip, cb)
  }
}
