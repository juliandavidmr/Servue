///<reference path="../typings/globals/node/index.d.ts"/>
///<reference path="../typings/globals/vue/index.d.ts"/>

import { IExpress } from "./interfaces/express";

import * as express from 'express'
import * as http from 'http'
import { uniqueObject } from './utils/concat';

import routes from './routes'
import renderer from './renderer'

declare global {
  interface String {
    startsWith(String): boolean;
  }
}

var app = express()

function inject(dependencies: any[]) {
  dependencies.map(dep => {
    app.use(dep);
  })
}

export function Servue(Vue, options: Object) {
  let middlewares = options['middlewares'];
  inject(middlewares);
  
  Vue.appx = app
  var server = http.createServer(Vue.appx);

  // add global method or property: serve
  Vue.serve = __serve;

  // inject some component options
  Vue.mixin({
    created: function () {
      let _mixins = [];
      for (var key in this.$options.mixins) {
        _mixins.push(this.$options.mixins[key]['methods']);
      }
      var router = express.Router()
      Vue.appx.use('/', routes(uniqueObject(_mixins), router));
    },
    methods: {
      io: require('socket.io').listen(server)
    }
  })
  // add an instance method
  Vue.prototype.serve = __serve;

  function __serve(ip, port, cb) {
    // Vue.appx.set('port', process.env.PORT || port || 3000);
    Vue.appx.listen(port, ip, cb)
  }
}
