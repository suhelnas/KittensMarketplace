import {FileClass} from './file.model';
import {KittenProfileClass} from './kitten.profile.model';

export function initModels(conn, defaultModelOptions){
  new FileClass(conn,defaultModelOptions);
  new KittenProfileClass(conn,defaultModelOptions);
}
export function initRelations(conn?){
let _conn = conn?conn:global['DbConn'];
let models = _conn.models;
  KittenProfileClass.getModel().belongsTo(models.file,{foreignKey: 'FileId'});
}
