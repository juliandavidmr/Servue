///<reference path="../typings/globals/node/index.d.ts"/>
///<reference path="../typings/globals/vue/index.d.ts"/>

import { IExpress } from "./interfaces/express";

import * as express from 'express'
import * as http from 'http'

import routes from './routes'

declare global {
  interface String {
    startsWith(String): boolean;
  }
}

var app = express()

function _use_module_express(dependencies: Array<any>) {
  dependencies.map(dep => {
    app.use(dep);
  })
}

export function Servue(Vue, options: Object) {
  let middlewares = options['middlewares'];
  _use_module_express(middlewares);

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
      // console.log("Mixins:", this.$options.mixins);

      var router = express.Router()
      var objs: Object = uniqueObject(_mixins)

      for (var key in objs) {
        objs[key].bind(this);
      }

      Vue.appx.locals = this;
      Vue.appx.use('/', routes(objs, router));
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

/**
 * Multiple objects into one
 * @param objs Objects array
 */
function uniqueObject(objs: Object[]) {
  return (() => {
    let r = {};
    objs.map(item => {
      for (var key in item) if (item.hasOwnProperty(key)) r[key] = item[key]
    })
    return r;
  })()
}