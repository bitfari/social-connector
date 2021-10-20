import {
  FileText,
  Unlock,
  Circle,
  Settings,
  User,
  HelpCircle,
  Info,
  DollarSign,
  Clipboard,
  Mail,
  File
} from 'react-feather'
export default [
  {
    id: 'pages',
    title: 'Guides',
    icon: <FileText />,
    children: [
      {
        id: 'faq',
        title: 'FAQ',
        icon: <HelpCircle />,
        navLink: '/pages/faq'
      },
      {
        id: 'knowledgeBase',
        title: 'Knowledge Base',
        icon: <Info />,
        navLink: '/pages/knowledge-base',
        parentOf: ['/pages/knowledge-base/category/questions', '/pages/knowledge-base/category']
      },
      {
        id: 'pricing',
        title: 'Pricing',
        icon: <DollarSign />,
        navLink: '/pages/pricing'
      }
    ]
  }
]
