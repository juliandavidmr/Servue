///<reference path="../typings/globals/node/index.d.ts"/>

import { IExpress } from "./interfaces/express";
import * as cf from './constants/request_classifier';

declare global {
  interface String {
    startsWith(String): boolean;
  }
}

export default (_api, app: IExpress): void => {
  console.log("entro:=>", _api);

  if (!!_api) {
    for (var key in _api) {

      var func = _api[key];
      switch (cf.classifier(key)) {
        case cf.TYPES.GET:
          console.log("Listen ", cf.clean(key));          
          app.get(key, func)
          break;
        default:
          break;
      }

      /*
      if (key.indexOf(':') !== -1) {
        var elms = ''
        var request_type = key.substring(0, key.indexOf(':'));
        var request_uri =  key.substring(key.indexOf(':'), key.length);
        // console.log("=>>>=>", elms);              

        switch (request_type) {
          case 'get':
            app.get(request_uri, func)
            break;
          case 'post':
            app.post(request_uri, func)
            break;
          case 'put':
            app.put(request_uri, func)
            break;
          case 'delete':
            app.del(request_uri, func)
            break;
          case 'head':
            app.head(request_uri, func)
            break;
          case '*':
            app.all(request_uri, func)
            break;
          default:
            app.get('/', func)
            break;
        }
      } else {
        console.log("Hola:", `/${key}`);

        app.get(`/${key}`, func)
      }*/
    }
  }
}
