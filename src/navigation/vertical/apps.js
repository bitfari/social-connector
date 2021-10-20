import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },
  {
    id: 'email',
    title: 'Tellfari',
    icon: <Mail size={20} />,
    navLink: '/apps/email'
  },
  {
    id: 'chat',
    title: 'InstaFriend',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  {
    id: 'todo',
    title: 'Life Filter',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/todo'
  },
  {
    id: 'calendar',
    title: 'Ads',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  }
]
