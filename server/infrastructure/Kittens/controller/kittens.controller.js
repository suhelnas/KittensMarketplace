"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kittens_service_1 = require("../implementation/kittens.service");
const util_service_1 = require("../../Common/util.service");
class KittensController {
    static addKitten(req, res) {
        let kittenService = new kittens_service_1.KittensService();
        let promise = kittenService.saveKitten(req.body, req.file);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    }
    static getKittenList(req, res) {
        let kittenService = new kittens_service_1.KittensService();
        let promise = kittenService.kittenList();
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    }
    static buyKitten(req, res) {
        let kittenService = new kittens_service_1.KittensService();
        let promise = kittenService.buyKitten(req.params.id);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    }
    static getKitty(req, res) {
        let kittenService = new kittens_service_1.KittensService();
        let promise = kittenService.getKitty(req.params.id);
        return global['DbConn'].DefaultCallbackHandle(promise, function (err, data) {
            return util_service_1.Util.sendResponse(err, data, res);
        });
    }
}
exports.KittensController = KittensController;
//# sourceMappingURL=kittens.controller.js.map