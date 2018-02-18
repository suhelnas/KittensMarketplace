"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kittens_controller_1 = require("./controller/kittens.controller");
const multer = require("multer");
var upload = multer({ dest: global['mediaBaseDirPath'] + '/kittens/' });
class KittenRoutes {
    static init(router) {
        router.post('/api/add/kitten', upload.single("file"), kittens_controller_1.KittensController.addKitten);
        router.get('/api/kitten/list', kittens_controller_1.KittensController.getKittenList);
        router.get('/api/buy/kitten/:id', kittens_controller_1.KittensController.buyKitten);
    }
}
exports.KittenRoutes = KittenRoutes;
//# sourceMappingURL=routes.js.map