"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    static sendResponse(err, data, res, msg, rawData) {
        return Util.sendResponseAfterLogResponse(err, data, res, msg, rawData);
    }
    static sendSuccessResponse(data, res) {
        return res.status(200).json({ data: data });
    }
    static sendRawSuccessResponse(data, res) {
        return res.status(200).send(data);
    }
    static sendSuccessMessageResponse(data, res, msg) {
        return res.status(200).json({ message: msg, data: data });
    }
    static sendResponseAfterLogResponse(err, data, res, msg, rawData) {
        if (err) {
            return Util.sendErrorResponse(err, res);
        }
        else if (msg) {
            return Util.sendSuccessMessageResponse(data, res, msg);
        }
        else if (rawData) {
            return Util.sendRawSuccessResponse(data, res);
        }
        else {
            return Util.sendSuccessResponse(data, res);
        }
    }
    static sendErrorResponse(err, res) {
        let errMsg = 'Some technical error occurred. Please contact administrator.';
        let errCode = 400;
        let errObj = null;
        try {
            errObj = JSON.parse(err.message);
            errObj.errorCode = err.errorCode;
        }
        catch (e) {
        }
        if (errObj instanceof Object) {
            errMsg = errObj.message;
            errCode = errObj.errorCode;
        }
        else {
            errCode = err.errorCode || 400;
            errMsg = err.message || 'Some technical error occurred. Please contact administrator.';
        }
        return res.status(errCode).json({ message: errMsg });
    }
}
exports.Util = Util;
//# sourceMappingURL=util.service.js.map