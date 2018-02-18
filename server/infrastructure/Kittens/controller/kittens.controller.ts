import {Request, Response} from 'express';
import {IKittensService, KittensService} from '../implementation/kittens.service';
import {Util} from '../../Common/util.service';

export class KittensController {

  static addKitten(req: Request,res :Response){
    let kittenService:IKittensService = new KittensService();
     let promise = kittenService.saveKitten(req.body,req.file);
     return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
       return Util.sendResponse(err,data,res)
     });

  }

  static getKittenList(req: Request,res: Response){
    let kittenService:IKittensService = new KittensService();
    let promise = kittenService.kittenList();
    return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
      return Util.sendResponse(err,data,res)
    })
  }
   static buyKitten(req: Request,res: Response){
     let kittenService:IKittensService = new KittensService();
     let promise = kittenService.buyKitten(req.params.id);
     return global['DbConn'].DefaultCallbackHandle(promise,function (err,data) {
       return Util.sendResponse(err,data,res)
     })
   }

}
