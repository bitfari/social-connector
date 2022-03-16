// ** Reactstrap Imports
import { Card, CardBody, CardText, Row, Col, Table } from 'reactstrap'

const PreviewCard = ({ data }) => {
  return data !== null ? (
    <Card className='invoice-preview-card'>
      <CardBody className='invoice-padding pb-0'>
        {/* Header */}
        <div className='d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0'>
          <div>
            <div className='logo-wrapper'>
              
            </div>
 
          </div>
     
        </div>
        {/* /Header */}
      </CardBody>

      <hr className='invoice-spacing' />

      {/* Address and Contact */}
      <CardBody className='invoice-padding pt-0'>
        <Row className='invoice-spacing'>
          <Col className='p-0' xl='8'>
            <h6 className='mb-2'>Advertiser:</h6>
            <h6 className='mb-25'></h6>
            <CardText className='mb-25'>ST39EMTZG4P7D55FMEQXEB8ZEQEK0ECBHB1J6QD63</CardText>
          </Col>
          <Col className='p-0 mt-xl-0 mt-2' xl='4'>
            <h6 className='mb-2'> </h6>
            <table>
              <tbody>
                <tr>
                  <td className='pe-1'> </td>
                  <td>
                    <span className='fw-bold'> </span>
                  </td>
                </tr>
                <tr>
                  <td className='pe-1'> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td className='pe-1'> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td className='pe-1'> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td className='pe-1'> </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </CardBody>
      {/* /Address and Contact */}

      {/* Invoice Description */}
      <Table responsive>
        <thead>
          <tr>
            <th className='py-1'>Campaigns</th>
            <th className='py-1'>CPM</th>
            <th className='py-1'>Hours</th>
            <th className='py-1'>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='py-1'>
              <p className='card-text fw-bold mb-25'>Billboard.btc</p>
              <p className='card-text text-nowrap'>
              Billboard.btc Rotation
              </p>
            </td>
            <td className='py-1'>
              <span className='fw-bold'>$60.00</span>
            </td>
            <td className='py-1'>
              <span className='fw-bold'>30</span>
            </td>
            <td className='py-1'>
              <span className='fw-bold'>$1,800.00</span>
            </td>
          </tr>
               </tbody>
      </Table>
      {/* /Invoice Description */}

      {/* Total & Sales Person */}
      <CardBody className='invoice-padding pb-0'>
        <Row className='invoice-sales-total-wrapper'>
          <Col className='mt-md-0 mt-3' md='6' order={{ md: 1, lg: 2 }}>
            <CardText className='mb-0'>
              <span className='fw-bold'>Salesperson:</span> <span className='ms-75'>Alfie Solomons</span>
            </CardText>
          </Col>
          <Col className='d-flex justify-content-end' md='6' order={{ md: 2, lg: 1 }}>
            <div className='invoice-total-wrapper'>
              <div className='invoice-total-item'>
                <p className='invoice-total-title'>Subtotal:</p>
                <p className='invoice-total-amount'>$1800</p>
              </div>
              <div className='invoice-total-item'>
                <p className='invoice-total-title'>Discount:</p>
                <p className='invoice-total-amount'>$28</p>
              </div>
              <div className='invoice-total-item'>
                <p className='invoice-total-title'>Tax:</p>
                <p className='invoice-total-amount'>21%</p>
              </div>
              <hr className='my-50' />
              <div className='invoice-total-item'>
                <p className='invoice-total-title'>Total:</p>
                <p className='invoice-total-amount'>$1690</p>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
      {/* /Total & Sales Person */}

      <hr className='invoice-spacing' />

      {/* Invoice Note */}
      <CardBody className='invoice-padding pt-0'>
        <Row>
          <Col sm='12'>
            <span className='fw-bold'>Note: </span>
            <span>
              It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance
              projects. Thank You!
            </span>
          </Col>
        </Row>
      </CardBody>
      {/* /Invoice Note */}
    </Card>
  ) : null
}

export default PreviewCard
