export interface IKittensService{
  saveKitten(textFields,file):Promise<any>;
  kittenList():Promise<any>;
  sayHello():Promise<any>;
}

export  class KittensService implements IKittensService{
  saveKitten(textField,file):Promise<any>{
    let dbConn = global['DbConn'];
    let transactionOption = global['DbConn'].TransactionOption;
    console.log(file);
    if(file){
      let obj = {
        Destination:file.destination,
        MimeType:file.mimetype,
        NameOnFile:file.filename,
        Path:file.path,
        Size:file.size

      }
      let promise = dbConn.SaveData(dbConn.models.file,obj,transactionOption);
      promise = promise.then(function (data) {
        let obj = {
          FileId:data.Id,
          Price:textField.Price,
          Age:textField.Age,
          OriginalName:file.originalname
        }
        return dbConn.SaveData(dbConn.models.kittenProfile,obj,transactionOption)
      })
      return promise;
    }
    else throw new Error("Pic not uploaded")
  }

  kittenList(){
    let dbConn = global['DbConn'];
    let includes  = {
      include:[
        {
          model:dbConn.models.file,
          required:true
        }
      ]
    };
    let promise = dbConn.models.kittenProfile.findAll(includes);
    promise = promise.then(function(data){
      console.log(data);
      return data;
    });
    return promise;
  }
  sayHello(){
    return new Promise(function (resolve, reject) {
      resolve("success")
    })
  }
}
