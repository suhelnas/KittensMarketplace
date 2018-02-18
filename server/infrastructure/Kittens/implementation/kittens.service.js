"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KittensService {
    saveKitten(textField, file) {
        let dbConn = global['DbConn'];
        console.log(file);
        if (file) {
            return dbConn.transaction(dbConn.TransformOption, function (tx) {
                let transactionOption = { transaction: tx };
                let obj1 = {
                    Destination: file.destination,
                    MimeType: file.mimetype,
                    NameOnFile: file.filename,
                    Path: file.path,
                    Size: file.size
                };
                let promise = dbConn.SaveData(dbConn.models.file, obj1, transactionOption);
                promise = promise.then(function (data) {
                    return data.Id;
                });
                promise = promise.then(function (fileId) {
                    let obj = {
                        FileId: fileId,
                        Price: textField.Price,
                        Age: textField.Age,
                        OriginalName: file.originalname
                    };
                    return dbConn.SaveData(dbConn.models.kittenProfile, obj, transactionOption).then(function (data) {
                        return fileId;
                    });
                });
                return promise;
            });
        }
        else
            throw new Error("Pic not uploaded");
    }
    kittenList() {
        let dbConn = global['DbConn'];
        let includes = {
            include: [
                {
                    model: dbConn.models.file,
                    required: true
                }
            ]
        };
        let promise = dbConn.models.kittenProfile.findAll(includes);
        promise = promise.then(function (data) {
            let list = [];
            data.forEach(function (element) {
                let obj = {
                    Id: element.Id,
                    FileId: element.FileId,
                    Price: element.Price,
                    Age: element.Age,
                    Name: element.file.NameOnFile
                };
                list.push(obj);
            });
            return list;
        });
        return promise;
    }
    buyKitten(id) {
        let dbConn = global['DbConn'];
        return dbConn.transaction(dbConn.TransactionOption, function (tx) {
            let transactionOption = { transaction: tx };
            let promise = dbConn.models.kittenProfile.find({ where: { Id: id } });
            promise = promise.then(function (data) {
                return data.FileId;
            });
            promise = promise.then(function (fileId) {
                let dataToBeUpdated = { IsDeleted: true };
                var options = { where: { Id: id }, transactionOption };
                return dbConn.UpdateData(dbConn.models.kittenProfile, dataToBeUpdated, options).then(function () {
                    return fileId;
                });
            });
            promise = promise.then(function (fileId) {
                let dataToBeUpdated = { IsDeleted: true };
                var options = { where: { Id: fileId }, transactionOption };
                return dbConn.UpdateData(dbConn.models.file, dataToBeUpdated, options).then(function () {
                    return fileId;
                });
            });
            return promise;
        });
    }
    getKitty(id) {
        let dbConn = global['DbConn'];
        let includes = {
            where: { Id: id },
            include: [
                {
                    model: dbConn.models.file,
                    required: true
                }
            ]
        };
        let promise = dbConn.models.kittenProfile.find(includes);
        promise.then(function (data) {
            return data;
        });
        return promise;
    }
}
exports.KittensService = KittensService;
//# sourceMappingURL=kittens.service.js.map