// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },
  {
    id: 'tell',
    title: 'Tellfari',
    icon: <Mail size={20} />,
    navLink: '/apps/tellfari'
  },
  {
    id: 'friend',
    title: 'Instafriend',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/instafriend'
  },
  {
    id: 'focus',
    title: 'Focus',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/focus'
  },
  {
    id: 'book',
    title: 'Book Ads',
    icon: <Calendar size={20} />,
    navLink: '/apps/book'
  },
  {
    id: 'publish',
    title: 'Publish',
    icon: <ShoppingCart size={20} />,
    children: [
      {
        id: 'publish',
        title: 'Pay and Publish',
        icon: <Circle size={12} />,
        navLink: '/apps/ecommerce/publish'
      }
    ]
  }
]
