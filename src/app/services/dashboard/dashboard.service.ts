export class DashboardService {

    getDailyGenericPanels() {
        return dailyGenericStats;
    }

    getDailyAlertsPanels() {
        return dailyAlertsStats;
    }

    getAllGenericPanels() {
        return allGenericStats;
    }

    getAllAlertsPanels() {
        return allAlertsStats;
    }
}


export const dailyGenericStats = [
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
]

export const dailyAlertsStats = [
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
]

export const allGenericStats = [
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
]

export const allAlertsStats = [
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
]