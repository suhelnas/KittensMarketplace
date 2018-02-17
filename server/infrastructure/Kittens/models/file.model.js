"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
class FileClass {
    constructor(_conn, modelOptions) {
        this._conn = _conn;
        this.modelOptions = modelOptions;
        if (FileClass._fileInstance == null) {
            FileClass._fileInstance = _conn.define('file', {
                Id: {
                    type: Sequelize.BIGINT,
                    primaryKey: true,
                    autoIncrement: true
                },
                Destination: {
                    type: Sequelize.STRING(512),
                    allowNull: false,
                },
                MimeType: {
                    type: Sequelize.STRING(256),
                    allowNull: false
                },
                NameOnFile: {
                    type: Sequelize.STRING(256),
                    allowNull: false
                },
                Path: {
                    type: Sequelize.STRING(512),
                    allowNull: false
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
            }, this.modelOptions);
        }
    }
    static getModel() {
        if (FileClass._fileInstance == null)
            throw new Error('Model File is not yet initialized');
        return FileClass._fileInstance;
    }
}
FileClass._fileInstance = null;
exports.FileClass = FileClass;
//# sourceMappingURL=file.model.js.map