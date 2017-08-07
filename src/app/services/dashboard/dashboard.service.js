"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DashboardService = (function () {
    function DashboardService() {
    }
    DashboardService.prototype.getDailyGenericPanels = function () {
        return exports.dailyGenericStats;
    };
    DashboardService.prototype.getDailyAlertsPanels = function () {
        return exports.dailyAlertsStats;
    };
    DashboardService.prototype.getAllGenericPanels = function () {
        return exports.allGenericStats;
    };
    DashboardService.prototype.getAllAlertsPanels = function () {
        return exports.allAlertsStats;
    };
    return DashboardService;
}());
exports.DashboardService = DashboardService;
exports.dailyGenericStats = [
    {
        header: 'Panel Daily 1 generic',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    },
    {
        header: 'Panel Daily 2 generic',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    },
    {
        header: 'Panel Daily 3 generic',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    }
];
exports.dailyAlertsStats = [
    {
        header: 'Panel Daily 1 alert',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    },
    {
        header: 'Panel Daily 2 alert',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    },
    {
        header: 'Panel Daily 3 alert',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    }
];
exports.allGenericStats = [
    {
        header: 'Panel All 1 generic',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    },
    {
        header: 'Panel All 2 generic',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    },
    {
        header: 'Panel All 3 generic',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    }
];
exports.allAlertsStats = [
    {
        header: 'Panel All 1 alert',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    },
    {
        header: 'Panel All 2 alert',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    },
    {
        header: 'Panel All 3 alert',
        indicators: [
            { label: 'indicator1', value: '1' },
            { label: 'indicator2', value: '2' },
            { label: 'indicator3', value: '3' }
        ]
    }
];
//# sourceMappingURL=dashboard.service.js.map