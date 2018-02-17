import * as Sequelize from 'sequelize'
import * as KittensModel from '../infrastructure/Kittens/models'
export class Initmodels {
  private static _conn:Sequelize.Sequelize = null;
  private static initModels(defaultModelOptions){
    KittensModel.initModels(Initmodels._conn,defaultModelOptions);
  }
  private static initRelations(conn){
    KittensModel.initRelations(conn);
  }
  static init(connection:Sequelize.Sequelize ,forceSync: boolean,defaultModelOptions, cb: (err:Error)=>void):void{
    Initmodels._conn = connection;
    console.log("Initializing database");
    Initmodels.initModels(defaultModelOptions);
    Initmodels.initRelations(connection);

    Initmodels._conn.sync({force: forceSync}).then(function (data) {

      console.log('DB Models initialized...');

      return cb(null);

    }, function (err) {
      return cb(err);
    });
  }
}
