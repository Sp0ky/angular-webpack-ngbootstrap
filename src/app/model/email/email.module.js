"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// MODULE EXTERNES
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
/** COMPONENTS GABI */
var email_component_1 = require("./email.component");
var email_service_1 = require("../../services/email/email.service");
var EmailModule = (function () {
    function EmailModule() {
    }
    return EmailModule;
}());
EmailModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule],
        declarations: [email_component_1.EmailComponent],
        providers: [email_service_1.EmailService],
        exports: [email_component_1.EmailComponent],
        bootstrap: [email_component_1.EmailComponent]
    })
], EmailModule);
exports.EmailModule = EmailModule;
//# sourceMappingURL=email.module.js.map