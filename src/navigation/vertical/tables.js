// ** Icons Import
import { Server, Grid } from 'react-feather'

export default [
  {
    id: 'dataTable',
    title: 'Directories',
    icon: <Grid size={20} />,
    children: [
      {
        id: 'dtAdvance',
        title: 'Billboard Directory - IP1',
        icon: <Server size={12} />,
        navLink: '/datatables/advance'
      }
    ]
  }
]
