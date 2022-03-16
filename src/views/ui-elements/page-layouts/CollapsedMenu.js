// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Alert } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import Network from '../../dashboard/network'

const CollapsedMenu = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbParent='Layouts'
        breadCrumbActive='Collapsed menu'
        breadCrumbTitle='Layout collapsed menu'
      />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='fw-bold'>Info: </span>
          <span>
            Use this layout to set menu (navigation) default collapsed. 
          </span>
        </div>
      </Alert>
      <Network />
    </Fragment>
  )
}

export default CollapsedMenu
