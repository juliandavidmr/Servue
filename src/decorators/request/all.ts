import { DeveloperUtils } from '../decorator.conf'

export function All(target: any)
export function All(first: any, second?: string) {
  //Bare decorator (no params)
  if (second) propDecorator(null)(first, second);
  //Decorator with params
  else return propDecorator(first);
}

function propDecorator(options?: any) {
  return function(target: any, key: string) {
    DeveloperUtils.decoratorStart();
    if (!target.$$methods) target.$$methods = {};

    // console.log('Target::', target, key, options);
    
    target.$$methods[key] = target[key];
    DeveloperUtils.decoratorStop();
  }
}