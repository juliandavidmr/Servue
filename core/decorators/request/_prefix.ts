export function getPrefix(key, options): string {
  if (typeof options === 'string') {
    return options;
  }
  if (typeof options === 'object' && !!options['path']) {
    return options['path']
  }
  return key;
}