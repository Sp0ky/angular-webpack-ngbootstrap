"use strict";
/**
 * Created by fabien on 05/07/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var email_component_1 = require("./model/email/email.component");
var editor_component_1 = require("./model/editor/editor.component");
var dashboard_component_1 = require("./model/dashboard/dashboard.component");
exports.router = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'email', component: email_component_1.EmailComponent },
    { path: 'editor', component: editor_component_1.EditorComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.router.js.map