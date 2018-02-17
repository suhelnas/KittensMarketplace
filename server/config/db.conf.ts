import * as sequelize from 'sequelize';
export class DbConfig {
  private static dbConn: sequelize.Sequelize;
  constructor(){

  }
  static initMariaDb( cb: (err: Error) => void):void{

    if(DbConfig.dbConn){
      console.log('Database is already initialized ...');
      return cb(null);
    }

    let options: sequelize.Options = {
      dialect: 'mysql',
      dialectOptions: {
        timeout: 1200
      },
      pool:{
        idle: 900000
      }
    };

    let val = process.env.DbConnectionString
    console.log(val);
    DbConfig.dbConn = new sequelize(global['dbConnectionString'], options);

    DbConfig.dbConn.authenticate().then(function(data: any){
      if(data instanceof Error){
        console.error(data);
        return cb(data);
      }

      return cb(null);

    })
      .catch(function(err: Error){
        console.error(err);
        return cb(err);
      });

  }

  static getDbConnection(): sequelize.Sequelize{
    return  DbConfig.dbConn;
  }

  static getDbDefaultModelOptions(): any{
    var obj: any = {
      timestamps: false,
      freezeTableName: true,
      defaultScope:{
        where:{
          IsDeleted: false,
        },
        subQuery: false
      }
    };
    return obj;
  }

  static getDbTransactionOptions(): any{
    return {isolationLevel: sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED};
  }
  static getDbDefaultCallbackHandle() {
    return function (promise, cb) {
      if (cb == null) return promise;

      return promise.then(function (data) {
        cb(null, data);
      }).catch(function (err: any) {
        cb(err);
      });
    };
  }

  static getDbUpdateHandle(){
    return function(model, data, options){
      return model.update(data,options);
    }
  }

  static getDbBulkCreate(){
    return function(model,records ,options) {
      return model.bulkCreate(records, options)
    }
  }

  static getDbSaveDataHandle(){
    return function(model,data,options) {
      return model.create(data, options).then(savedObject => {
        return savedObject.dataValues;
      });
    }
  }

  static getDbHelper(){
    return {
      emptyPromise: function () {
        let promise = new sequelize.Promise(function (resolve,reject) {
          return resolve(null);
        });
        return promise;
      }
    }
  }

}
