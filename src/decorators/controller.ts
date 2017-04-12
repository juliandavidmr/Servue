import * as Vue from 'vue'
import * as clone from 'clone'

import Config from './config'
import { DeveloperUtils } from './decorator.conf'

// var className: string = this.constructor.toString().match(/\w+/g)[1];
export function VueController(element?: string)
export function VueController(options: vuejs.ComponentOption)
export function VueController(element: string, options: vuejs.ComponentOption)
export function VueController(first_argv: any, options?: vuejs.ComponentOption) {
  var type = typeof first_argv;
  if (type == 'function') { //No param decorator, called at construction
    createDecorator(null, null)(first_argv);
  } else if (type == 'string') { //name and options or name only
    return createDecorator(first_argv, options);
  } else if (type == 'object') { //options only
    return createDecorator(null, first_argv);
  } else {
    throw Error("First parameter of VueController must be a string or an object");
  }
}

function camelToSnake(str: string) {
  var snake = str.replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); });
  if (snake.charAt(0) == '-') snake = snake.substring(1);
  return snake;
};

function getPrefix(option: any, className: string) {
  let prefix_base = ((): string => {
    if (typeof option === 'string') {
      return option;
    } else if (typeof option === 'object') {
      if (!!option.prefix && typeof option.prefix === 'string') {
        return option.prefix;
      }
      return className;
    }
  })()
  if (prefix_base.trim().startsWith('/')) {
    return prefix_base.trim();
  }
  return `/${prefix_base.trim()}`
}

function concat(uri1: string, uri2: string) {
  return `${uri1.startsWith('/') ? uri1.substring(1) : uri1}/${uri2.startsWith('/') ? uri2.substring(1) : uri2}`
}

function createDecorator(name?: string, options?: vuejs.ComponentOption) {

  DeveloperUtils.decoratorStart();
  return function decorator(target: any) {
    var prefix = '';

    // save a reference to the original constructor
    var original = target;

    var className = camelToSnake(target.toString().match(/\w+/g)[1]);
    prefix = getPrefix(options, className);
    console.log("Prefijo: ", prefix);

    if (!options) options = {};
    if (!options.methods) options.methods = {};

    // a utility function to generate instances of a class
    function construct(constructor, args) {
      var c: any = function () {
        return constructor.apply(this, args);
      }
      c.prototype = constructor.prototype;
      return new c();
    }

    if (!name) name = camelToSnake(target.toString().match(/\w+/g)[1]);
    if (!options) options = {};
    if (!options.props) options.props = {};
    if (!options.watch) options.watch = {};
    if (!options.computed) options.computed = {};
    if (options.data) {
      if (typeof options.data == 'function') {
        var data_rtn = (<any>options).data();
        options.data = data_rtn;
      }
    } else options.data = {};

    if (options['style']) delete options['style'];

    var instance = construct(original, {});

    for (var key in instance) {
      if (key.charAt(0) != '$' && key.charAt(0) != '_') {
        var prop_desc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(instance), key);

        if (prop_desc && prop_desc.get) {
          // console.log("prop desc:", prop_desc);
          var computed_obj: any = {};
          if (prop_desc.set) {
            computed_obj.get = prop_desc.get;
            computed_obj.set = prop_desc.set;
          } else {
            computed_obj = prop_desc.get;
          }
          options.computed[key] = computed_obj;
        }
        if (typeof (instance[key]) == 'function') {
          // console.log("function desc:", key, instance[key]);
          if (Config.vueInstanceFunctions.indexOf(key) > -1) {
            options[key] = instance[key]
          } else {
            if (key != 'constructor')
              options.methods[concat(prefix, key)] = instance[key];
          }
        } else {
          options.data[key] = instance[key];
        }
      } else if (key == "$$props") {
        for (var prop in instance.$$props) {
          options.props[prop] = instance.$$props[prop];
        }
      } else if (key == "$$watch") {
        for (var watch in instance.$$watch) {
          options.watch[watch] = instance.$$watch[watch];
        }
      }
    }

    for (key in options.props) {
      var default_val = options.data[key];
      if (default_val == null || default_val == undefined) default_val = options.methods[key]
      if (default_val != null && default_val != undefined) {
        if (!options.props[key])
          options.props[key] = {};
        if (typeof default_val == 'function') options.props[key].type = Function;
        if (typeof default_val == 'object') {
          var copy = clone(default_val, false);
          default_val = function () {
            return clone(copy, false);
          };
        }
        options.props[key].default = default_val;
      }
      delete options.data[key];
      delete options.methods[key];
    }

    for (var i in instance.$$methodsToRemove) {
      delete options.methods[instance.$$methodsToRemove[i]]
    }

    var data = options.data;
    options.data = () => {
      return data;
    }

    DeveloperUtils.decoratorStop();
    return options;
  }
}
