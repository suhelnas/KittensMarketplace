"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const ngx_bootstrap_1 = require("ngx-bootstrap");
const app_component_1 = require("./app.component");
const core_component_1 = require("./app/core.component");
const topbar_component_1 = require("./app/topbar.component");
const router_1 = require("@angular/router");
const edit_component_1 = require("./app/kittens/edit.component");
const forms_1 = require("@angular/forms");
const kittens_service_1 = require("./app/kittens/services/kittens.service");
const http_1 = require("@angular/common/http");
const kitten_list_component_1 = require("./app/kittens/kitten.list.component");
let allRoutes = [];
let appRoutes = { path: 'app', component: core_component_1.CoreComponent, children: [
        { path: 'item/list', component: kitten_list_component_1.KittenListComponent },
        { path: 'add/kitten', component: edit_component_1.EditComponent }
    ] };
allRoutes.push(appRoutes);
allRoutes.push({ path: '**', redirectTo: 'app' });
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent, core_component_1.CoreComponent, topbar_component_1.TopbarComponent, edit_component_1.EditComponent, kitten_list_component_1.KittenListComponent
        ],
        imports: [
            platform_browser_1.BrowserModule, ngx_bootstrap_1.AlertModule.forRoot(), router_1.RouterModule.forRoot(allRoutes, { useHash: true }), forms_1.FormsModule, http_1.HttpClientModule
        ],
        providers: [kittens_service_1.KittensService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map