import * as classifier from "../../constants/request_classifier";
import { getPrefix } from "./_prefix";

export function Del(target: any)
export function Del(first: any, second?: string) {
  //Bare decorator (no params)
  if (second) propDecorator(null)(first, second);
  //Decorator with params
  else return propDecorator(first);
}

function propDecorator(options?: any) {

  return function (target: any, key: string) {
    if (!target.$$methods) target.$$methods = {};
    
    target.$$methods[`${classifier.TYPES.DELETE}${classifier.SEPARATOR}${getPrefix(key, options)}`] = target[key];
    return target;
  }
}