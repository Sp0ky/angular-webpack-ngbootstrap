"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ROUTES
var app_router_1 = require("./app.router");
// MODULE EXTERNES
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// MODULES GABI
var dashboard_module_1 = require("./model/dashboard/dashboard.module");
var email_module_1 = require("./model/email/email.module");
var editor_module_1 = require("./model/editor/editor.module");
/** COMPONENTS GABI */
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            app_router_1.routes,
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            dashboard_module_1.DashboardModule,
            email_module_1.EmailModule,
            editor_module_1.EditorModule
        ],
        exports: [http_1.JsonpModule],
        declarations: [
            app_component_1.AppComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map