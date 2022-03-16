// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Alert } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import Network from '../../dashboard/network'

const WithoutMenu = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbParent='Layouts'
        breadCrumbTitle='Layout without menu'
        breadCrumbActive='Layout without menu'
      />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='fw-bold'>Info: </span>

        </div>
      </Alert>
      <Network />
    </Fragment>
  )
}

export default WithoutMenu
