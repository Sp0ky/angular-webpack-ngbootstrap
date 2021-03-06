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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var EmailService = (function () {
    function EmailService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
    }
    EmailService.prototype.sendEmail = function (objet, corps) {
        console.log('sendEmailService FIRED');
        var apiUrl = 'http://localhost:8080/bat-ws/services/email/send';
        var xmlToSend = '<?xml version="1.0" encoding="UTF-8"?><Email><subject>' + objet + '</subject><content>' + corps + '</content></Email>';
        console.log('XML : ' + xmlToSend);
        var headers = new http_1.Headers();
        headers.append('ContentType', 'text/plain');
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: headers,
            body: xmlToSend
        });
        console.log('Before returning : ' + apiUrl);
        return this.http.request(apiUrl, options).subscribe(function (r) { });
    };
    EmailService.prototype.sendEmailHTML = function (objet, corps) {
        console.log('sendEmail HTML Service  FIRED');
        var apiUrl = 'http://localhost:8080/bat-ws/services/email/send-html';
        var headers = new http_1.Headers();
        headers.append('content-type', 'text/plain');
        var jsonCorps = { subject: objet, content: corps };
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: headers,
            body: jsonCorps
        });
        console.log('Before returning : ' + apiUrl);
        return this.http.request(apiUrl, options).subscribe(function (r) { });
    };
    return EmailService;
}());
EmailService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map