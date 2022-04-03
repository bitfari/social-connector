// ** Icons Import
import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'eCommerceDash',
        title: 'Network',
        icon: <Circle size={12} />,
        navLink: '/dashboard/network'
      },
      {
        id: 'analyticsDash',
        title: 'Development',
        icon: <Circle size={12} />,
        navLink: '/dashboard/development'
      }
    ]
  }
]
