import { Tool, Box, Menu, CameraOff, Eye, LifeBuoy } from 'react-feather'
export default [
  {
    id: 'tools',
    title: 'Tools',
    icon: <Tool />,
    children: [
      { id: 'explorer',
        title: 'Explorer',
        icon: <LifeBuoy />,
        externalLink: true,
        newTab: true,
        navLink: 'https://explorer.bitfari.com'
      },
      { id: 'projector',
        title: 'Projector',
        icon: <Eye />,
        externalLink: true,
        newTab: true,
        navLink: 'https://www.bitfari.com/projector/'
      },
      {
        id: 'audit',
        title: 'Audit',
        icon: <Menu />,
        externalLink: true,
        newTab: true,
        navLink: 'https://www.bitfari.com/audit/'
      },
     {
        id: 'chroma',
        title: 'ChromaCheck',
        icon: <CameraOff />,
        externalLink: true,
        newTab: true,
        navLink: 'https://www.bitfari.com/display/'
      },
      {
        id: 'api',
        title: 'API Key',
        icon: <Box />,
        navLink: '/pages/api-key'
      }
    ]
  }
]
