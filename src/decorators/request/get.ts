import * as classifier from "../../constants/request_classifier";

export function Get(target: any)
export function Get(first: any, second?: string) {
  //Bare decorator (no params)
  if (second) propDecorator(null)(first, second);
  //Decorator with params
  else return propDecorator(first);
}

function propDecorator(options?: any) {

  function getPrefix(key, options): string {
    if (typeof options === 'string') {
      return options;
    }
    if (typeof options === 'object' && !!options['path']) {
      return options['path']
    }
    return key;
  }

  return function (target: any, key: string) {
    if (!target.$$methods) target.$$methods = {};
    
    target.$$methods[`${classifier.TYPES.GET}${classifier.SEPARATOR}${getPrefix(key, options)}`] = target[key];
    return target;
  }
}