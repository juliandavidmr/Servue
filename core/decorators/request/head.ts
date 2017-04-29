import * as classifier from "../../constants/request_classifier";
import { getPrefix } from "./_prefix";
import { ITarget } from "../../interfaces/ITarget";

export function Head(target: any)
export function Head(first: any, second?: string) {
  //Bare decorator (no params)
  if (second) propDecorator(null)(first, second);
  //Decorator with params
  else return propDecorator(first);
}

function propDecorator(options?: any) {

  return function (target: ITarget, key: string) {
    if (!target.$$methods) target.$$methods = [];

    target.$$methods.push({
      type: classifier.TYPES.HEAD,
      name: getPrefix(key, options),
      func: target[key]
    })

    // target.$$methods[`${classifier.TYPES.HEAD}${classifier.SEPARATOR}${getPrefix(key, options)}`] = target[key];
    return target;
  }
}