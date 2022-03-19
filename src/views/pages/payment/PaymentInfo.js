import React from 'react'
import { Button } from 'reactstrap'

const PaymentInfo = () => {

   return (
              <>
              <center>
              <h2>Booked Ads Ready for Publishing:</h2>
              <hr/>

              <h3>Ad Title: Place Your Ad Here!</h3>
              <h4>Network: Billboards.btc</h4>
              <h4>Duration: 1 Day</h4>

              <h4>Please Provide a Budget (FARI):</h4>  
              <input name="budget" id="budget" />

              <Button color='primary' id="pay" >
                Pay and Publish</Button>
              </center>  
              </>         
          )
   }

export default PaymentInfo
