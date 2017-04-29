export function Module(options: Object | string)
export function Module(target: Object, key: string)
export function Module(first: any, second?: string) {
  //Bare decorator (no params)
  // console.log("options", first, second);
  if (second) propDecorator(null)(first, second);
  //Decorator with params
  else return propDecorator(first);
}

function propDecorator(options?: any) {
  return function (target: any, key: string) {
    if (typeof options === 'object' || typeof options === 'string') {
      if (!options['controllers'] && typeof options === 'object') {
        throw Error("controllers parameter 'Module' must be an valid object");
      }
    } else throw Error("Fist parameter 'Module' must be an object");
    
    // delete target[key]; // Todo: validate this line
    return options;
  }
}
