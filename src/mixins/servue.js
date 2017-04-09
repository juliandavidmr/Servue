export default function (Vue, options) {
  Vue.api = {}

  // 1. add global method or property
  Vue.serve = function (ip, port) {
    // something logic ...
  }
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
      // something logic ...
    }
  })
  // 4. add an instance method
  Vue.prototype.$myMethod = function (options) {
    // something logic ...
  }
}
