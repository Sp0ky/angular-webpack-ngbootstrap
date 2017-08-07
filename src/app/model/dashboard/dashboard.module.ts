import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// COMPONENTS
import { DashboardComponent } from './dashboard.component';

// SERVICES
import { DashboardService } from '../../services/dashboard/dashboard.service';


@NgModule({
    imports:[CommonModule,FormsModule, NgbModule],
    providers: [DashboardService],
    declarations:[DashboardComponent],
    exports: [DashboardComponent],
    bootstrap: [DashboardComponent]
})
export class DashboardModule { }