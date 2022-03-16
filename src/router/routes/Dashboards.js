import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/development',
    component: lazy(() => import('../../views/dashboard/development'))
  },
  {
    path: '/dashboard/network',
    component: lazy(() => import('../../views/dashboard/network')),
    exact: true
  }
]

export default DashboardRoutes
