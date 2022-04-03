import {
  Cloud, DollarSign, List, Send}
from 'react-feather'
export default [
  {
    id: 'publish',
    title: 'Publish',
    icon: <Cloud />,
    children: [
      {
        id: 'pricing',
        title: 'Pricing',
        icon: <List />,
        navLink: '/pages/pricing'
      },
      {
        id: 'paypublish',
        title: 'Pay and Publish',
        icon: <DollarSign />,
        navLink: '/pages/payment'
      },
      {
        id: 'realnet',
        title: 'Preview Ads',
        icon: <Send />,
        externalLink: true,
        newTab: true,
        navLink: 'http://www.bitfari.com/realnet/'
      }
   ]
  }
]
