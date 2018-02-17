import {DbConfig} from './config/db.conf';
import {Initmodels} from './database/sync.db';
import {RoutesConf} from './config/routes.config';
import {Routes} from './routes/index';
import * as express from 'express'
import * as http from 'http';
import * as path from 'path';
require('dotenv').config();

let mediaBaseDir = process.env.mediaBaseDir || __dirname;
global['dbConnectionString'] = process.env.DbConnectionString;
global['mediaBaseDirPath'] = path.resolve(mediaBaseDir);

DbConfig.initMariaDb(function (err) {
  if(err) {
    console.log(err.message);
    process.exit(0);
  }
  global['DbConn']= DbConfig.getDbConnection();
  global['DbConn'].models = {};
  global['DbConn'].DefaultModelOptions = DbConfig.getDbDefaultModelOptions();
  global['DbConn'].TransactionOption = DbConfig.getDbTransactionOptions();
  global['DbConn'].DefaultCallbackHandle = DbConfig.getDbDefaultCallbackHandle();
  global['DbConn'].SaveData = DbConfig.getDbSaveDataHandle();
  global['DbConn'].UpdateData = DbConfig.getDbUpdateHandle();
  global['DbConn'].BulkCreate = DbConfig.getDbBulkCreate();
  global['DbConn'].DbHelper = DbConfig.getDbHelper();

 let app =express();
  Initmodels.init(global['DbConn'],false, global['DbConn'].DefaultModelOptions,function (err) {
    if (err) process.exit(0);
    RoutesConf.init(app,mediaBaseDir);
    Routes.init(app, express.Router());
    http.createServer(app).listen(8080 ,'localhost',() =>{
      console.log('Starting server ...');
    });
  });

})
