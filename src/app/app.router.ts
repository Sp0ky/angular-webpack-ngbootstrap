/**
 * Created by fabien on 05/07/2017.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmailComponent } from './model/email/email.component';
import { EditorComponent } from './model/editor/editor.component';
import {DashboardComponent } from './model/dashboard/dashboard.component';

export const router: Routes = [
        {path: '', redirectTo: '/', pathMatch: 'full'},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'email', component: EmailComponent},
        {path: 'editor', component: EditorComponent}
    ];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
