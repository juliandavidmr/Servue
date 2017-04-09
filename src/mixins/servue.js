import constants from './constants';
import express from 'express'

function __create_routes(_api, app) {
  if (_api) {
    for (var key in _api) {
      if (_api.hasOwnProperty(key)) {
        var func = _api[key];
        if (key.indexOf(':') !== -1) {
          var elms = key.split(':')
          // console.log("=>>>=>", elms);
          var rq = elms[0].toLowerCase()
          var uri = `/${elms[1]}`
          switch (rq) {
            case 'get':
              app.get(uri, func)
              break;
            case 'post':
              app.post(uri, func)
              break;
            case 'put':
              app.put(uri, func)
              break;
            case 'delete':
              app.del(uri, func)
              break;
            case 'head':
              app.head(uri, func)
              break;
            case '*':
              app.all(uri, func)
              break;
            default:
              app.get('/', func)
              break;
          }
        } else {
          app.get(`/${key}`, func)
        }
      }
    }
  }
}

function __render(element) {

}

export default function (Vue, options) {
  Vue.appx = express()
  Vue.api = {}

  // 1. add global method or property
  Vue.serve = __serve;

  // 2. add a global asset
  Vue.directive('my-directive', {
    bind(el, binding, vnode, oldVnode) {
      // something logic ...
    }
  })
  // 3. inject some component options
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
      var _api = this.$options.api;
      __create_routes(_api, Vue.appx);
    }

  })
  // 4. add an instance method
  Vue.prototype.$serve = __serve;
  Vue.prototype.serve = __serve;

  function __serve(ip, port, cb) {
    // Vue.appx.set('port', process.env.PORT || port || 3000);
    Vue.appx.listen(port, ip, cb)
  }
}
