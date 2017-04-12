///<reference path="../typings/globals/node/index.d.ts"/>

import { IExpress } from "./interfaces/express";

declare global {
  interface String {
    startsWith(String): boolean;
  }
}

export default (_api, app: IExpress): void => {
  console.log("entro:=>", _api);

  if (!!_api) {
    for (var key in _api) {
      // console.log("Create api for: ", key, _api[key]);
      // if (_api.hasOwnProperty(key)) { // TODO: Validate this condition
      var func = _api[key];

      if (key.indexOf(':') !== -1) {
        var elms = key.split(':')
        console.log("=>>>=>", elms);
        var request_type = elms[0].toLowerCase();
        var request_uri = elms[1].startsWith('/') ? elms[1] : `/${elms[1]}`;

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
      }
    }
  }
  // }
}
