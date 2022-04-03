import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [
  {
    path: '/pages/payment',
    component: lazy(() => import('../../views/pages/payment'))
  },
  {
    path: '/pages/profile',
    component: lazy(() => import('../../views/pages/profile'))
  },
  {
    path: '/pages/faq',
    component: lazy(() => import('../../views/pages/faq'))
  },
  {
    path: '/pages/knowledge-base',
    exact: true,
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBase'))
  },
  {
    path: '/pages/knowledge-base/:category',
    exact: true,
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBaseCategory')),
    meta: {
      navLink: '/pages/knowledge-base'
    }
  },
  {
    path: '/pages/knowledge-base/:category/:question',
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBaseCategoryQuestion')),
    meta: {
      navLink: '/pages/knowledge-base'
    }
  },
  {
    path: '/pages/account-details',
    component: lazy(() => import('../../views/pages/account-details'))
  },
  {
    path: '/pages/api-key',
    component: lazy(() => import('../../views/pages/api-key'))
  },
  {
    path: '/pages/pricing',
    component: lazy(() => import('../../views/pages/pricing'))
  },
  {
    path: '/misc/coming-soon',
    component: lazy(() => import('../../views/pages/misc/ComingSoon')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/not-authorized',
    component: lazy(() => import('../../views/pages/misc/NotAuthorized')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/maintenance',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/error',
    component: lazy(() => import('../../views/pages/misc/Error')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  }
]

export default PagesRoutes
