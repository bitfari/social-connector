import mock from '../mock'

const data = {
  orders_bar_chart: {
    title: 'Real + Virtual Screens',
    statistics: '53,217',
    series: [
      {
        name: '2021',
        data: [45, 85, 65, 45, 65]
      }
    ]
  },
  profit_line_chart: {
    title: 'Ads Booked',
    statistics: '8,238',
    series: [
      {
        data: [0, 20, 5, 30, 15, 45]
      }
    ]
  },
  subscribers_gained: {
    series: [
      {
        name: 'Usage',
        data: [28, 40, 36, 52, 38, 60, 55]
      }
    ],
    analyticsData: {
      subscribers: 92
    }
  },
  revenueGenerated: {
    series: [
      {
        name: 'Ad Volume',
        data: [350, 275, 400, 300, 350, 300, 450]
      }
    ],
    analyticsData: {
      revenue: 97
    }
  },
  quarterlySales: {
    series: [
      {
        name: 'Paid Bonuses',
        data: [10, 15, 7, 12, 3, 16]
      }
    ],
    analyticsData: {
      sales: '36%'
    }
  },
  ordersRecevied: {
    series: [
      {
        name: 'Campaigns',
        data: [10, 15, 8, 15, 7, 12, 8]
      }
    ],
    analyticsData: {
      orders: 9
    }
  },
  siteTraffic: {
    series: [
      {
        name: 'Traffic Rate',
        data: [150, 200, 125, 225, 200, 250]
      }
    ]
  },
  activeUsers: {
    series: [
      {
        name: 'Registered Apps',
        data: [750, 1000, 900, 1250, 1000, 1200, 1100]
      }
    ]
  },
  newsletter: {
    series: [
      {
        name: 'Newsletter',
        data: [365, 390, 365, 400, 375, 400]
      }
    ]
  }
}

mock.onGet('/card/card-network/orders-bar-chart').reply(() => [200, data.orders_bar_chart])
mock.onGet('/card/card-network/profit-line-chart').reply(() => [200, data.profit_line_chart])
mock.onGet('/card/card-network/subscribers').reply(() => [200, data.subscribers_gained])
mock.onGet('/card/card-network/revenue').reply(() => [200, data.revenueGenerated])
mock.onGet('/card/card-network/sales').reply(() => [200, data.quarterlySales])
mock.onGet('/card/card-network/orders').reply(() => [200, data.ordersRecevied])
mock.onGet('/card/card-network/site-traffic').reply(() => [200, data.siteTraffic])
mock.onGet('/card/card-network/active-users').reply(() => [200, data.activeUsers])
mock.onGet('/card/card-network/newsletter').reply(() => [200, data.newsletter])
