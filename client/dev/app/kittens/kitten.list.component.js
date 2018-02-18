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
const kittens_service_1 = require("./services/kittens.service");
const router_1 = require("@angular/router");
let KittenListComponent = class KittenListComponent {
    constructor(_router, _kittensService) {
        this._router = _router;
        this._kittensService = _kittensService;
    }
    ngOnInit() {
        let that = this;
        let promise = this._kittensService.getList();
        promise.then(function (result) {
            that.kittenList = result.data;
        });
    }
    addKitten() {
        this._router.navigate(['/app/add/kitten']);
    }
    buy(id) {
        let that = this;
        let promise = this._kittensService.buyKitten(id);
        promise.then(function (result) {
            window.location.reload();
        });
    }
};
KittenListComponent = __decorate([
    core_1.Component({
        selector: 'kitten-list',
        templateUrl: 'kitten.list.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, kittens_service_1.KittensService])
], KittenListComponent);
exports.KittenListComponent = KittenListComponent;
//# sourceMappingURL=kitten.list.component.js.map