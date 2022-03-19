import React from 'react'
import { Button } from 'reactstrap'
import { makeSTXTokenTransfer, broadcastTransaction, AnchorMode } from '@stacks/transactions'

const PaymentCards = () => {

async function payAndPublish(val) {

  const txOptions = {
    recipient: 'ST32XCD69XPS3GKDEXAQ29PJRDSD5AR643GY0C3Q5',
    amount: val,
    senderKey: 'b244296d5907de9864c0b0d51f98a13c52890be0404e83f273144cd5b9960eed01',
    network: 'testnet', // for mainnet, use 'mainnet'
    memo: 'Budget for Bitfari Ads',
    nonce: 0n, // set a nonce manually if you don't want builder to fetch from a Stacks node
    fee: 200n, // set a tx fee if you don't want the builder to estimate
    anchorMode: AnchorMode.Any
  }

  // to see the raw serialized tx
  //const serializedTx = transaction.serialize().toString('hex')
  
  // broadcasting transaction to the specified network
  //const broadcastResponse = await broadcastTransaction(transaction)
  //const txId = broadcastResponse.txid

  const send = await broadcastTransaction(makeSTXTokenTransfer(txOptions))
  return send
  }

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

              <Button color='primary' onClick={() => payAndPublish(budget)}>
                Pay and Publish</Button>
              </center> 

              <div className='annual-plan'>
                <div className='plan-price mt-2'>                 
                  <span className='pricing-duration text-body font-medium-1 fw-bold ms-25'></span>
                </div>
              </div>   
              </>         
          )
   }

export default PaymentCards
