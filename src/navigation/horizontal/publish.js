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
        id: 'publish',
        title: 'Pay and Publish',
        icon: <DollarSign />,
        navLink: '/pages/payment'
      },
      {
        id: 'realnet',
        title: 'See Ads on Realnet',
        icon: <Send />,
        externalLink: true,
        newTab: true,
        navLink: 'http://www.bitfari.com/realnet/'
      }
   ]
  }
]
