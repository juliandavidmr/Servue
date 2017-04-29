export const SEPARATOR = '|'
export const TYPES = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  HEAD: 'head',
  DELETE: 'delete',
  ALL: 'all',
  NONE: 'none'
}
export function classifier(name_request: string): string {
  for (var key in TYPES) {
    let type = TYPES[key];
    if (name_request.startsWith(`${type}${SEPARATOR}`)) return type
  }
  return TYPES.NONE;
}

/**
 * Clean route
 * @param name_request 
 */
export function clean(name_request: string): string {
  return name_request.substring(name_request.indexOf(SEPARATOR) + 1, name_request.length)
}


export function concatUrl(routes: Array<string>): string {
  let uri = ''

  let trimSlash = (rout: string) => {
    rout = rout.startsWith('/') ? rout.substring(1, rout.length) : rout;
    rout = rout.charAt(rout.length) == '/' ? rout.substring(0, rout.length - 1) : rout;
    return rout
  }

  routes.map(route => {
    uri = uri + '/' + trimSlash(route)
  })

  return uri
}