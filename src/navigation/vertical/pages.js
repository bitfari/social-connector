import { FileText, Circle } from 'react-feather'
export default [
  {
    id: 'pages',
    title: 'Guides',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'faq',
        title: 'FAQ',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/faq'
      },
      {
        id: 'knowledgeBase',
        title: 'Knowledge Base',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/knowledge-base',
        parentOf: ['/pages/knowledge-base/category/questions', '/pages/knowledge-base/category']
      },
      {
        id: 'pricing',
        title: 'Pricing',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/pricing'
      }
    ]
  }
]
