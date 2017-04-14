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
  return name_request.substring(name_request.indexOf(SEPARATOR), name_request.length)
}

/**
 * Clean route
 * @param name_request 
 */
export function addNameController(nameController: string, route: string): string {
  if (nameController.length == 0) {
    return route;
  }
  let indx = route.indexOf(SEPARATOR);
  if (!nameController[nameController.length - 1].startsWith('/')) {
    nameController = `${nameController}/`
  }
  return `${route.substring(0, indx)}${SEPARATOR}${nameController}${route.substring(indx + 1, route.length)}`;
}