import * as classifier from "../../constants/request_classifier";
import { getPrefix } from "./_prefix";
import { ITarget } from "../../interfaces/ITarget";

export function Put(target: any)
export function Put(first: any, second?: string) {
  //Bare decorator (no params)
  if (second) propDecorator(null)(first, second);
  //Decorator with params
  else return propDecorator(first);
}

function propDecorator(options?: any) {

  return function (target: ITarget, key: string) {
    if (!target.$$methods) target.$$methods = [];

    target.$$methods.push({
      type: classifier.TYPES.PUT,
      name: getPrefix(key, options),
      func: target[key]
    })

    // target.$$methods[`${classifier.TYPES.PUT}${classifier.SEPARATOR}${getPrefix(key, options)}`] = target[key];
    return target;
  }
}