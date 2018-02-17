"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize = require("sequelize");
class DbConfig {
    constructor() {
    }
    static initMariaDb(cb) {
        if (DbConfig.dbConn) {
            console.log('Database is already initialized ...');
            return cb(null);
        }
        let options = {
            dialect: 'mysql',
            dialectOptions: {
                timeout: 1200
            },
            pool: {
                idle: 900000
            }
        };
        let val = process.env.DbConnectionString;
        console.log(val);
        DbConfig.dbConn = new sequelize(global['dbConnectionString'], options);
        DbConfig.dbConn.authenticate().then(function (data) {
            if (data instanceof Error) {
                console.error(data);
                return cb(data);
            }
            return cb(null);
        })
            .catch(function (err) {
            console.error(err);
            return cb(err);
        });
    }
    static getDbConnection() {
        return DbConfig.dbConn;
    }
    static getDbDefaultModelOptions() {
        var obj = {
            timestamps: false,
            freezeTableName: true,
            defaultScope: {
                where: {
                    IsDeleted: false,
                },
                subQuery: false
            }
        };
        return obj;
    }
    static getDbTransactionOptions() {
        return { isolationLevel: sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED };
    }
    static getDbDefaultCallbackHandle() {
        return function (promise, cb) {
            if (cb == null)
                return promise;
            return promise.then(function (data) {
                cb(null, data);
            }).catch(function (err) {
                cb(err);
            });
        };
    }
    static getDbUpdateHandle() {
        return function (model, data, options) {
            return model.update(data, options);
        };
    }
    static getDbBulkCreate() {
        return function (model, records, options) {
            return model.bulkCreate(records, options);
        };
    }
    static getDbSaveDataHandle() {
        return function (model, data, options) {
            return model.create(data, options).then(savedObject => {
                return savedObject.dataValues;
            });
        };
    }
    static getDbHelper() {
        return {
            emptyPromise: function () {
                let promise = new sequelize.Promise(function (resolve, reject) {
                    return resolve(null);
                });
                return promise;
            }
        };
    }
}
exports.DbConfig = DbConfig;
//# sourceMappingURL=db.conf.js.map