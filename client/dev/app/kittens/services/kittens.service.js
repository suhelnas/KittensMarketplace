"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
let KittensService = class KittensService {
    constructor(_http) {
        this._http = _http;
    }
    addNewKitten(data) {
        let that = this;
        return new Promise(function (resolve, reject) {
            return that._http.post('/api/add/kitten', data).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    }
    getList() {
        let that = this;
        return new Promise(function (resolve, reject) {
            that._http.get('/api/kitten/list').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    }
    buyKitten(id) {
        let that = this;
        return new Promise(function (resolve, reject) {
            that._http.get('/api/buy/kitten/' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    }
};
KittensService.BASEURL = 'http://localhost:8080';
KittensService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], KittensService);
exports.KittensService = KittensService;
//# sourceMappingURL=kittens.service.js.map