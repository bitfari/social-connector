// ** Reactstrap Imports
import { Row, Col, Card, CardTitle, CardHeader, CardBody, Table } from 'reactstrap'

const typesArr = [
  {
    title: '📨 Tellfari Tips',
    defaultChecked: ['email']
  },
  {
    title: '🖥 Browsing Tips',
    defaultChecked: ['browser', 'app']
  },
  {
    title: '✨ Billboard Attention',
    defaultChecked: ['email', 'browser', 'app']
  },
  {
    title: '🏦 Screen Operation',
    defaultChecked: ['browser']
  },
  {
    title: '💸 Crypto Sweeptakes',
    defaultChecked: ['browser']
  },
  {
    title: '💰 Affiliate Commissions',
    defaultChecked: ['browser']
  },
  {
    title: '💰 Auditing',
    defaultChecked: ['browser']
  },
  {
    title: '💰 Referrals',
    defaultChecked: ['browser']
  }
]
const EarningsTabContent = () => {
  return (
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>Earnings</CardTitle>
      </CardHeader>
      <CardBody className='pt-2'>
        <h5 className='mb-0'>
         Bitfari distributes all the profits across affiliates, miners, auditors and users like you!. 
         <br/><strong>Anyone can win huge prices! Block rewards every 10 mins!</strong>
        </h5>
      </CardBody>
      <Table className='text-nowrap text-center border-bottom' responsive>
        <thead>
          <tr>
            <th className='text-start'>Earning Type</th>
            <th>🚶🏾 Mobile</th>
            <th>🖥 Desktop</th>
          </tr>
        </thead>
        <tbody>
          {typesArr.map((type, index) => {
            return (
              <tr key={index}>
                <td className='text-start'>{type.title}</td>
                <td>
                  <div className='d-flex form-check justify-content-center'>
                    $0.00
                  </div>
                </td>
                <td>
                  <div className='d-flex form-check justify-content-center'>
                  $0.00
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <CardBody className='mt-50'>
        <Row className='gy-2'>
          <Col md='6'>
            <h5 className='mb-1'>How can I earn more?</h5>
            Visit the <a href="https://www.youtube.com/channel/UCqalsNTLGQMQs5ytRyteg7w/featured" target="_blank">Bitfari Channel on 
            YouTube</a> and learn about earning opportunities!
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default EarningsTabContent
