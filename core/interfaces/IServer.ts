import { IExpress } from "./express";
export interface IServer {
  serve(ip: string, port: string | number, cb: Function)
  appx: any
}