import * as Sequelize from "sequelize";
export interface KittenProfile {
  Id:number,
  FileId:number,
  Price:number,
  Age:number,
  OriginalName:string,
  IsDeleted:boolean
}
 export interface KittenProfileInstance {
   dataValues:KittenProfile
 }
export class KittenProfileClass {
private static _kittenProfile = null;
constructor(private _conn: Sequelize.Sequelize, private modelOptions: any){
    if(KittenProfileClass._kittenProfile == null){
      KittenProfileClass._kittenProfile = this._conn.define("kittenProfile",{
        Id:{
          type:Sequelize.BIGINT,
          primaryKey:true,
          autoIncrement:true,
        },
        FileId:{
          type:Sequelize.BIGINT,
          allowNull:false
        },
        Price:{
          type:Sequelize.DECIMAL(10,2),
          allowNull:false,
        },
        Age:{
          type:Sequelize.BIGINT,
          allowNull:false
        },
        OriginalName:{
          type:Sequelize.STRING(256),
          allowNull:true,
        },
        IsDeleted: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: "0"
        }
      },this.modelOptions)
    }
}
  static getModel(){
  if(KittenProfileClass._kittenProfile == null) throw new Error('Model Kitten Profile is not yet initialized');

  return KittenProfileClass._kittenProfile
  }
}
