import { Box, Menu, Circle, EyeOff, Folder, LifeBuoy, Shield } from 'react-feather'
export default [
  {
    id: 'misc',
    title: 'Help',
    icon: <Box />,
    children: [
      { id: 'docs',
        title: 'Documentation',
        icon: <Folder />,
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
