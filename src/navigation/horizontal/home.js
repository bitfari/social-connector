import { Home, Activity } from 'react-feather'
export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home />,
    children: [
      {
        id: 'network',
        title: 'Network',
        icon: <Activity />,
        navLink: '/dashboard/network'
      },
      {
        id: 'development',
        title: 'Development',
        icon: <Activity />,
        navLink: '/dashboard/development'
      }
    ]
  }
]
