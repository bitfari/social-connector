// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardBody, Button } from 'reactstrap'

const PreviewActions = ({ id }) => {
  return (
    <Card className='invoice-action-wrapper'>
      <CardBody>
        <Button color='secondary' tag={Link} to='/apps/invoice/print' target='_blank' id={ id } block outline className='mb-75'>
          Print for your Reference 
        </Button>
        <Button color='success'>
          Pay and Run Campaign - Coming Soon!
        </Button>
      </CardBody>
    </Card>
  )
}

export default PreviewActions
