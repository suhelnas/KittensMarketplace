"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
class RoutesConf {
    static init(application, mediaBaseDir) {
        let mediaDirectory = mediaBaseDir;
        let mediaTempDirectory = path.join(mediaDirectory, 'kittens');
        fs.existsSync(mediaDirectory) || fs.mkdirSync(mediaDirectory);
        fs.existsSync(mediaTempDirectory) || fs.mkdirSync(mediaTempDirectory);
        application.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
        application.use(bodyParser.json({ limit: '1000mb' }));
    }
}
exports.RoutesConf = RoutesConf;
//# sourceMappingURL=routes.config.js.map