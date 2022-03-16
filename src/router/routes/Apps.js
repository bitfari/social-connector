// ** React Imports
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/apps/tellfari',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/tellfari'))
  },
  {
    path: '/apps/tellfari/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/tellfari')),
    meta: {
      navLink: '/apps/tellfari'
    }
  },
  {
    path: '/apps/tellfari/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/tellfari')),
    meta: {
      navLink: '/apps/tellfari'
    }
  },
  {
    path: '/apps/tellfari/:filter',
    component: lazy(() => import('../../views/apps/tellfari')),
    meta: {
      navLink: '/apps/tellfari'
    }
  },
  {
    path: '/apps/instafriend',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/instafriend'))
  },
  {
    path: '/apps/focus',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/focus'))
  },
  {
    path: '/apps/focus/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/focus')),
    meta: {
      navLink: '/apps/focus'
    }
  },
  {
    path: '/apps/focus/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/focus')),
    meta: {
      navLink: '/apps/focus'
    }
  },
  {
    path: '/apps/book',
    component: lazy(() => import('../../views/apps/book'))
  }
]

export default AppRoutes
