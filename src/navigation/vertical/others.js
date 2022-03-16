// ** Icons Import
import { Folder, LifeBuoy } from 'react-feather'

export default [
  {
    header: 'Misc'
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: <Folder size={20} />,
    externalLink: true,
    newTab: true,
    navLink: 'https://www.bitfari.org/docs/'
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
