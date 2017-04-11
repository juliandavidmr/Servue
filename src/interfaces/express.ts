export interface IExpress {
  get(string, Function)
  post(string, Function)
  put(string, Function)
  head(string, Function)
  delete(string, Function)
  del(string, Function)
  all(string, Function)
}