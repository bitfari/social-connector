// ** Reactstrap Imports
import { Row, Col, Button } from 'reactstrap'

// ** Images
import trialSvg from '@src/assets/images/illustration/pricing-Illustration.svg'

const PricingTrial = () => {
  return (
    <div className='pricing-free-trial'>
      <Row>
        <Col className='mx-auto' lg={{ size: 10, offset: 3 }} sm='12'>
          <div className='pricing-trial-content d-flex justify-content-between'>
            <div className='text-center text-md-start mt-3'>
              <h3 className='text-primary'>Buy FARI and Save 50%!</h3>
              <h5>Get up to 90% savings compared to traditional ads. </h5>
              <div className='mt-2 mt-lg-3'>
              <Button
            type = 'button' color = 'primary'
            onClick = {(e) => {
              e.preventDefault()
              window.open('https://app.stackswap.org/v2/swap', '_blank')
              }}> Buy the FARI Token</Button>
              </div>
            </div>
            <img
              className='pricing-trial-img img-fluid'
              src={trialSvg}
              alt='trial svg'
              style={{
                transform: 'scaleX(1)'
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PricingTrial
