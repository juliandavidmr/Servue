export default function concat(uri1: string, uri2: string) {
  return `${uri1.startsWith('/') ? uri1.substring(1) : uri1}/${uri2.startsWith('/') ? uri2.substring(1) : uri2}`
}