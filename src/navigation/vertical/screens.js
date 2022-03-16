import { Edit, Box } from 'react-feather'

export default [
  {
    id: 'screen-registration',
    title: 'Screen Registration',
    icon: <Edit />,
    children: [
      {
        id: 'new-screen',
        title: 'Screen Registration',
        icon: <Box />,
        navLink: '/forms/new-screen'
      }
    ]
  }
]
