export default function concat(uri1: string, uri2: string) {
  return `${uri1.startsWith('/') ? uri1.substring(1) : uri1}/${uri2.startsWith('/') ? uri2.substring(1) : uri2}`
}

/**
 * 
 * @param objs Objects array
 */
export function uniqueObject(objs: Object[]) {
  return (() => {
    let r = {};
    objs.map(item => {
      for (var key in item) if (item.hasOwnProperty(key)) r[key] = item[key]
    })
    return r;
  })()
}