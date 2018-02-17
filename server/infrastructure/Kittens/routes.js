"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kittens_controller_1 = require("./controller/kittens.controller");
const multer = require("multer");
var upload = multer({ dest: global['mediaBaseDirPath'] + '/kittens/' });
class KittenRoutes {
    static init(router) {
        router.post('/add/kitten', upload.single("file"), kittens_controller_1.KittensController.addKitten);
        router.get('/kitten/list', kittens_controller_1.KittensController.getKittenList);
    }
}
exports.KittenRoutes = KittenRoutes;
//# sourceMappingURL=routes.js.map