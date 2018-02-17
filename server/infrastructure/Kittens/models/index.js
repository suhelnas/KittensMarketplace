"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_model_1 = require("./file.model");
const kitten_profile_model_1 = require("./kitten.profile.model");
function initModels(conn, defaultModelOptions) {
    new file_model_1.FileClass(conn, defaultModelOptions);
    new kitten_profile_model_1.KittenProfileClass(conn, defaultModelOptions);
}
exports.initModels = initModels;
function initRelations(conn) {
    let _conn = conn ? conn : global['DbConn'];
    let models = _conn.models;
    kitten_profile_model_1.KittenProfileClass.getModel().belongsTo(models.file, { foreignKey: 'FileId' });
}
exports.initRelations = initRelations;
//# sourceMappingURL=index.js.map