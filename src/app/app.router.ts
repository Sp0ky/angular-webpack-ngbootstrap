/**
 * Created by fabien on 05/07/2017.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmailComponent } from './model/email/email.component';

export const router: Routes = [
        {path: '', redirectTo: '/', pathMatch: 'full'},
        {path: 'email', component: EmailComponent}
    ];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
