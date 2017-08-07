/**
 * Created by fabien on 05/07/2017.
 */

import {Component} from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
@Component({
    selector: 'gabi-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

    dailyGenericPanels: any = []
    dailyAlertsPanel: any = [];
    allGenericPanels: any = [];
    allAlertsPanel: any= [];

    constructor(private service: DashboardService) {
        this.dailyGenericPanels = service.getDailyGenericPanels();
        this.dailyAlertsPanel = service.getDailyAlertsPanels();
        this.allGenericPanels = service.getAllGenericPanels();
        this.allAlertsPanel = service.getAllAlertsPanels();
    }
}
