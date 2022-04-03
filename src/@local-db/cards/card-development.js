import mock from '../mock'

const data = {
  support_tracker: {
    title: 'Support Tracker',
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    totalTicket: 2613,
    newTicket: 1,
    openTicket: 22,
    responseTime: 1
  },
  avg_sessions: {
    sessions: 2,
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    growth: '+1.2%',
    goal: 6000000,
    users: 11400,
    retention: 10,
    duration: 1
  },
  revenue_report: {
    years: ['2021', '2022'],
    price: '0.70',
    cap: '70,000,000'
  },
  goal_overview: {
    completed: '5',
    inProgress: '3'
  },
  revenue: {
    thisMonth: '0',
    lastMonth: '0'
  },
  product_orders: {
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    chart_info: { finished: 2, pending: 1, rejected: 4 }
  },
  sessions_device: {
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    chart_info: [
      {
        icon: 'Monitor',
        name: 'Desktop',
        iconColor: 'text-primary',
        usage: 58.6,
        upDown: 2
      },
      {
        icon: 'Tablet',
        name: 'Mobile',
        iconColor: 'text-warning',
        usage: 34.9,
        upDown: 8
      },
      {
        icon: 'Tablet',
        name: 'Tablet',
        iconColor: 'text-danger',
        usage: 6.5,
        upDown: -5
      }
    ]
  },
  customers: {
    last_days: ['Last 28 Days', 'Last Month', 'Last Year'],
    listData: [
      {
        icon: 'Circle',
        iconColor: 'text-primary',
        text: 'New',
        result: 6
      },
      {
        icon: 'Circle',
        iconColor: 'text-warning',
        text: 'Returning',
        result: 2
      },
      {
        icon: 'Circle',
        iconColor: 'text-danger',
        text: 'Referrals',
        result: 1
      }
    ]
  }
}

mock.onGet('/card/card-development/support-tracker').reply(() => [200, data.support_tracker])
mock.onGet('/card/card-development/avg-sessions').reply(() => [200, data.avg_sessions])
mock.onGet('/card/card-development/revenue-report').reply(() => [200, data.revenue_report])
mock.onGet('/card/card-development/goal-overview').reply(() => [200, data.goal_overview])
mock.onGet('/card/card-development/revenue').reply(() => [200, data.revenue])
mock.onGet('/card/card-development/product-orders').reply(() => [200, data.product_orders])
mock.onGet('/card/card-development/sessions-device').reply(() => [200, data.sessions_device])
mock.onGet('/card/card-development/customers').reply(() => [200, data.customers])
