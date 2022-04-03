import {
  Unlock,
  Settings,
  User,
  Info,
  DollarSign,
  Clipboard
} from 'react-feather'
export default [
  {
    id: 'account',
    title: 'My Account',
    icon: <Settings/>,
    children: [
      {
        id: 'accountDetails',
        title: 'Wallet',
        icon: <User />,
        navLink: '/pages/account-details/:?tabid=1'
      },
      {
        id: 'accountCensus',
        title: 'Census',
        icon: <Clipboard />,
        navLink: '/pages/account-details/:?tabid=2'
      },
      {
        id: 'accountPerks',
        title: 'Perks',
        icon: <Info />,
        navLink: '/pages/account-details/:?tabid=3'
      },
      {
        id: 'accountEarnings',
        title: 'Earnings',
        icon: <DollarSign />,
        navLink: '/pages/account-details/:?tabid=4'
      },
      {
        id: 'accountStacking',
        title: 'Stacking',
        icon: <Unlock />,
        navLink: '/pages/account-details/:?tabid=5'
      }
    ]
  }
]
