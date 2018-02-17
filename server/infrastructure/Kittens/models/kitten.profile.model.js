"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
class KittenProfileClass {
    constructor(_conn, modelOptions) {
        this._conn = _conn;
        this.modelOptions = modelOptions;
        if (KittenProfileClass._kittenProfile == null) {
            KittenProfileClass._kittenProfile = this._conn.define("kittenProfile", {
                Id: {
                    type: Sequelize.BIGINT,
                    primaryKey: true,
                    autoIncrement: true,
                },
                FileId: {
                    type: Sequelize.BIGINT,
                    allowNull: false
                },
                Price: {
                    type: Sequelize.DECIMAL(10, 2),
                    allowNull: false,
                },
                Age: {
                    type: Sequelize.BIGINT,
                    allowNull: false
                },
                OriginalName: {
                    type: Sequelize.STRING(256),
                    allowNull: true,
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
        if (KittenProfileClass._kittenProfile == null)
            throw new Error('Model Kitten Profile is not yet initialized');
        return KittenProfileClass._kittenProfile;
    }
}
KittenProfileClass._kittenProfile = null;
exports.KittenProfileClass = KittenProfileClass;
//# sourceMappingURL=kitten.profile.model.js.map