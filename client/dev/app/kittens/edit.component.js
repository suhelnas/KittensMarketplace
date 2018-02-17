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
const router_1 = require("@angular/router");
const kittens_service_1 = require("./services/kittens.service");
let EditComponent = class EditComponent {
    constructor(_router, _kittensService) {
        this._router = _router;
        this._kittensService = _kittensService;
        this.postModel = {
            Price: null,
            Age: null
        };
    }
    getFiles(fileInput) {
        let fileList = fileInput.target.files;
        if (fileList.length > 0) {
            let file = fileList[0];
            this.formData = new FormData();
            this.formData.append('file', file, file.name);
            this.formData.append('Price', this.postModel.Price);
            this.formData.append('Age', this.postModel.Age);
        }
        console.log(this.postModel);
    }
    submitForm(value) {
        console.log(this.postModel);
        console.log(value);
        this.postModel.Image = null;
        let promise = this._kittensService.addNewKitten(this.formData);
        promise.subscribe(function (result) {
            this._router.navigate(['/app']);
        }, function (err) {
        });
    }
};
EditComponent = __decorate([
    core_1.Component({
        selector: 'edit-component',
        templateUrl: 'edit.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, kittens_service_1.KittensService])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map