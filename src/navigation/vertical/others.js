import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield } from 'react-feather'
export default [
  {
    header: 'Help'
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: <Folder size={20} />,
    externalLink: true,
    newTab: true,
    navLink: 'https://www.bitfari.org/docs'
  },
  {
    id: 'raiseSupport',
    title: 'Raise Support',
    icon: <LifeBuoy size={20} />,
    externalLink: true,
    newTab: true,
    navLink: 'https://github.com/bitfari/social-connector/issues/new'
  }
]
