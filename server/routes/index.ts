import * as express from 'express';
import {KittenRoutes} from '../infrastructure/Kittens/routes';

export class Routes{
  static init(app:express.Application ,router:any){
    KittenRoutes.init(router);
    app.use('/', router);
  }
}
