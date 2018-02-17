"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_conf_1 = require("./config/db.conf");
const sync_db_1 = require("./database/sync.db");
const routes_config_1 = require("./config/routes.config");
const index_1 = require("./routes/index");
const express = require("express");
const http = require("http");
const path = require("path");
require('dotenv').config();
let mediaBaseDir = process.env.mediaBaseDir || __dirname;
global['dbConnectionString'] = process.env.DbConnectionString;
global['mediaBaseDirPath'] = path.resolve(mediaBaseDir);
db_conf_1.DbConfig.initMariaDb(function (err) {
    if (err) {
        console.log(err.message);
        process.exit(0);
    }
    global['DbConn'] = db_conf_1.DbConfig.getDbConnection();
    global['DbConn'].models = {};
    global['DbConn'].DefaultModelOptions = db_conf_1.DbConfig.getDbDefaultModelOptions();
    global['DbConn'].TransactionOption = db_conf_1.DbConfig.getDbTransactionOptions();
    global['DbConn'].DefaultCallbackHandle = db_conf_1.DbConfig.getDbDefaultCallbackHandle();
    global['DbConn'].SaveData = db_conf_1.DbConfig.getDbSaveDataHandle();
    global['DbConn'].UpdateData = db_conf_1.DbConfig.getDbUpdateHandle();
    global['DbConn'].BulkCreate = db_conf_1.DbConfig.getDbBulkCreate();
    global['DbConn'].DbHelper = db_conf_1.DbConfig.getDbHelper();
    let app = express();
    sync_db_1.Initmodels.init(global['DbConn'], false, global['DbConn'].DefaultModelOptions, function (err) {
        if (err)
            process.exit(0);
        routes_config_1.RoutesConf.init(app, mediaBaseDir);
        index_1.Routes.init(app, express.Router());
        http.createServer(app).listen(8080, 'localhost', () => {
            console.log('Starting server ...');
        });
    });
});
//# sourceMappingURL=server.js.map