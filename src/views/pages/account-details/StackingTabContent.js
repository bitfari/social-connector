// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, CardTitle } from 'reactstrap'

const StackingTabContent = () => {
  return (
    <Row>
      <Col md='6'>
      <Card>
          <CardHeader className='border-bottom'>
            <CardTitle tag='h4'>Stacking Earnings - Last 30 Days</CardTitle>
          </CardHeader>
          <CardBody className='pt-2'>
          <div className='mt-2'>
            <p><b>$0.00</b> FARI</p><hr/><br/>
            <p><b>$0.00</b> BTC</p><hr/><br/>
            <p><b>$0.00</b> STX</p><hr/><br/>
            <p><b>$0.00</b> USDA</p>
          </div>
          </CardBody>
        </Card>

      </Col>
      <Col md='6'>
      <Card>
          <CardHeader className='border-bottom'>
            <CardTitle tag='h4'>Nominal Price in my Area</CardTitle>
          </CardHeader>
          <CardBody className='pt-2'>
            <h2>Nominal Stacking Price: 1 FARI = 20.25 USD</h2>
            <p>1 FARI controls 1% of the Network for 30 seconds, we use this to calculate nominal price!</p>
            <p>Stacked FARI is paid at the nominal price of your area. </p>
            <p>FARI keeps growing but remains stable due to demand at nominal price.</p>
            <p>Learn more by watching the video below:</p>
                   <div className='flex-shrink-0'>
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/uy8bLhxCEwo" title="How The Fari Economy Works" frameborder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                 
                  </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default StackingTabContent
