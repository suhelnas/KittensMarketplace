import * as express from 'express';
import {KittensController} from './controller/kittens.controller';
import * as multer from 'multer'
var upload = multer({ dest: global['mediaBaseDirPath'] + '/kittens/' });
export class KittenRoutes {
  static init(router: express.Router) {
   router.post('/add/kitten',upload.single("file"),KittensController.addKitten)
   router.get('/kitten/list',KittensController.getKittenList)
  }
}

