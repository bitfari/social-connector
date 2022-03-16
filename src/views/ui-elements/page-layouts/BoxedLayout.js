// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Alert } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import Network from '../../dashboard/network'

const BoxedLayout = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Layout Boxed' breadCrumbParent='Layouts' breadCrumbActive='Layout Boxed' />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='fw-bold'>Info: </span>
        </div>
      </Alert>
      <Network />
    </Fragment>
  )
}

export default BoxedLayout
