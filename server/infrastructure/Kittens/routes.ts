import * as express from 'express';
import {KittensController} from './controller/kittens.controller';
import * as multer from 'multer'
var upload = multer({ dest: global['mediaBaseDirPath'] + '/kittens/' });
export class KittenRoutes {
  static init(router: express.Router) {
   router.post('/api/add/kitten',upload.single("file"),KittensController.addKitten)
   router.get('/api/kitten/list',KittensController.getKittenList)
   router.get('/api/buy/kitten/:id',KittensController.buyKitten)
  }
}

