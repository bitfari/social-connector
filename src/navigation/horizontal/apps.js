import { Box, Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    id: 'apps',
    title: 'Apps',
    icon: <Box />,
    children: [
      {
        id: 'email',
        title: 'Tellfari',
        icon: <Mail />,
        navLink: '/apps/email'
      },
      {
        id: 'chat',
        title: 'InstaFriend',
        icon: <MessageSquare />,
        navLink: '/apps/chat'
      },
      {
        id: 'todo',
        title: 'Life Filter',
        icon: <CheckSquare />,
        navLink: '/apps/todo'
      },
      {
        id: 'calendar',
        title: 'Schedule Ads',
        icon: <Calendar />,
        navLink: '/apps/calendar'
      }
    ]
  }
]
