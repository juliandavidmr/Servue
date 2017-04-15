///<reference path="../typings/globals/node/index.d.ts"/>

import { IExpress } from "./interfaces/express";
import * as cf from './constants/request_classifier';

export default (_api, router: IExpress): any => {
  // console.log("entro:=>", _api);

  if (!!_api) {
    for (var key in _api) {
      var func = _api[key];
      switch (cf.classifier(key)) {
        case cf.TYPES.GET:
          console.log("Listen get", cf.clean(key));          
          router.get(cf.clean(key), func)
          break;
        case cf.TYPES.POST:
          console.log("Listen post", cf.clean(key));          
          router.post(cf.clean(key), func)
          break;
        case cf.TYPES.PUT:
          console.log("Listen put", cf.clean(key));
          router.put(cf.clean(key), func)
          break;
        case cf.TYPES.HEAD:
          console.log("Listen head", cf.clean(key));          
          router.head(cf.clean(key), func)
          break;
        case cf.TYPES.ALL:
          console.log("Listen all", cf.clean(key));          
          router.all(cf.clean(key), func)
          break;
      }    
    }
  }
  return router;
}
