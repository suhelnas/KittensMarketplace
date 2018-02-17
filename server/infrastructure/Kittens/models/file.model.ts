import * as Sequelize from "sequelize";
export interface File {
  Id:number,
  Destination:string,
  MimeType:string,
  NameOnFile:string,
  Path:string,
  Size:string,
  IsDeleted:boolean
}
export interface FileInstance{
  dataValues:File
}

export class FileClass{
  private static _fileInstance= null;
  constructor(private _conn: Sequelize.Sequelize, private modelOptions: any){
    if(FileClass._fileInstance == null){
      FileClass._fileInstance = _conn.define('file',{
        Id:{
          type:Sequelize.BIGINT,
          primaryKey:true,
          autoIncrement:true
        },
        Destination:{
          type:Sequelize.STRING(512),
          allowNull:false,
        },
        MimeType:{
          type:Sequelize.STRING(256),
          allowNull:false
        },
        NameOnFile:{
          type:Sequelize.STRING(256),
          allowNull:false
        },
        Path:{
          type:Sequelize.STRING(512),
          allowNull:false
        },
        Size: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false
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
    if(FileClass._fileInstance == null) throw new Error('Model File is not yet initialized');

    return FileClass._fileInstance;
  }
}
