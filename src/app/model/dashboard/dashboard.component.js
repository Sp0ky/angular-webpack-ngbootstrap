"use strict";
/**
 * Created by fabien on 05/07/2017.
 */
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
var core_1 = require("@angular/core");
var dashboard_service_1 = require("../../services/dashboard/dashboard.service");
var DashboardComponent = (function () {
    function DashboardComponent(service) {
        this.service = service;
        this.dailyGenericPanels = [];
        this.dailyAlertsPanel = [];
        this.allGenericPanels = [];
        this.allAlertsPanel = [];
        this.dailyGenericPanels = service.getDailyGenericPanels();
        this.dailyAlertsPanel = service.getDailyAlertsPanels();
        this.allGenericPanels = service.getAllGenericPanels();
        this.allAlertsPanel = service.getAllAlertsPanels();
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'gabi-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css'],
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map