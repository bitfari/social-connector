import { Edit, Copy, Circle, Box, Package, CheckCircle, RotateCw, Server, Grid } from 'react-feather'

export default [
  {
    id: 'formsAndTable',
    title: 'Screen Registration',
    icon: <Edit />,
    children: [
      {
        id: 'wizard',
        title: 'Screen Registration',
        icon: <Box />,
        navLink: '/forms/wizard'
      }
    ]
  }
]
