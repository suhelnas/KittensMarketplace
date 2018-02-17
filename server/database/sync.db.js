"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KittensModel = require("../infrastructure/Kittens/models");
class Initmodels {
    static initModels(defaultModelOptions) {
        KittensModel.initModels(Initmodels._conn, defaultModelOptions);
    }
    static initRelations(conn) {
        KittensModel.initRelations(conn);
    }
    static init(connection, forceSync, defaultModelOptions, cb) {
        Initmodels._conn = connection;
        console.log("Initializing database");
        Initmodels.initModels(defaultModelOptions);
        Initmodels.initRelations(connection);
        Initmodels._conn.sync({ force: forceSync }).then(function (data) {
            console.log('DB Models initialized...');
            return cb(null);
        }, function (err) {
            return cb(err);
        });
    }
}
Initmodels._conn = null;
exports.Initmodels = Initmodels;
//# sourceMappingURL=sync.db.js.map