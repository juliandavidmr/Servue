import { DeveloperUtils } from '../decorator.conf'
import concat from './_concat'

export function Get(target: any)
export function Get(first: any, second?: string) {
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