import { Box, Mail, MessageSquare, CheckSquare, Calendar } from 'react-feather'

export default [
  {
    id: 'apps',
    title: 'Apps',
    icon: <Box />,
    children: [
      {
        id: 'focus',
        title: 'Focus',
        icon: <CheckSquare />,
        navLink: '/apps/focus'
      },
      {
        id: 'book',
        title: 'Book Ads',
        icon: <Calendar />,
        navLink: '/apps/book'
      },
    {
    id: 'soon',
    title: 'Coming Soon...',
    icon: <Box />,
    children: [
    {
        id: 'tellfari',
        title: 'Tellfari',
        icon: <Mail />,
        navLink: '/apps/tellfari'
      },
      {
        id: 'instafriend',
        title: 'InstaFriend',
        icon: <MessageSquare />,
        navLink: '/apps/instafriend'
      }
     ]
  }
    ]
  }
]
