import { Box, Menu, Info, HelpCircle, Circle, EyeOff, Folder, LifeBuoy, Shield } from 'react-feather'
export default [
  {
    id: 'misc',
    title: 'Help',
    icon: <HelpCircle />,
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
      { id: 'docs',
        title: 'Documentation',
        icon: <Shield />,
        externalLink: true,
        newTab: true,
        navLink: 'https://www.bitfari.org/docs/'
      },
      {
        id: 'raiseSupport',
        title: 'Raise Support',
        icon: <LifeBuoy />,
        externalLink: true,
        newTab: true,
        navLink: 'https://github.com/bitfari/social-connector/issues/new'
      }
    ]
  }
]
