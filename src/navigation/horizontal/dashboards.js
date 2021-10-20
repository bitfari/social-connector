import { Home, Activity, ShoppingCart } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home />,
    children: [
      {
        id: 'eCommerceDash',
        title: 'Network',
        icon: <Activity />,
        navLink: '/dashboard/ecommerce'
      },
      {
        id: 'analyticsDash',
        title: 'Development',
        icon: <Activity />,
        navLink: '/dashboard/analytics'
      }
    ]
  }
]
