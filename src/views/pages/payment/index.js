// ** React Imports
import { useState, useEffect, Fragment } from 'react'

// ** Third Party Components
import axios from 'axios'

// ** Payment Components
import PaymentHeader from './PaymentHeader'
import PaymentFaqs from './PaymentFaqs'
import PaymentInfo from './PaymentInfo'
import PaymentTrial from './PaymentTrial'

// ** Styles
import '@styles/base/pages/page-pricing.scss'

const Payment = () => {
  // ** States
  const [data, setData] = useState(null),
    [faq, setFaq] = useState(null),
    [duration, setDuration] = useState('monthly')

  useEffect(() => {
    axios.get('/pricing/data').then(res => {
      const dataArr = [],
        faqArr = []

      Object.entries(res.data).forEach(([key, val]) => {
        if (key !== 'qandA') {
          dataArr.push(val)
          setData([...dataArr])
        } else {
          faqArr.push(val)
          setFaq(faqArr[0])
        }
      })
    })
  }, [])

  return (
    <div id='pricing-table'>
      
      <PaymentHeader duration={duration} setDuration={setDuration} />
      {data !== null && faq !== null ? (
        <Fragment>
          <PaymentInfo data={data} duration={duration} />
          <hr/>
          <PaymentTrial />
          <br/>     <br/>    <br/>     <br/> 
          <PaymentFaqs data={faq} />
        </Fragment>
      ) : null}
    </div>
  )
}

export default Payment
