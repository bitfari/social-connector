import React from 'react'
import { Box, Text, Button } from '@blockstack/ui'
import { authenticate } from '../auth'

export const Signin = () => {
  return (
    <Box width="100%" textAlign="center">
      <Box maxWidth="800px" mx="auto" mt={[6, '50px']}>
        <Text fontWeight="700" fontSize={['36px', '50px']} lineHeight={2} display="block">
          Welcome to Bitfari!
        </Text>
        <Text fontWeight="300" fontSize={['16px', '25px']} lineHeight={2} display="block">
          The First Advertising DAO of America
        </Text>
        <Text fontWeight="300" marginLeft={'50px'}  marginRight={'50px'} fontSize={['12px', '12px']} lineHeight={2} display="block">
          Testnet is now open!! Screen registration, ad booking and serving, campaign booking, discounts, 
          billboard directory and booking, dashboards, life filter, it's all here!
        </Text>
        <Box mt={[5, '25px']}>
          <Button onClick={() => authenticate()}>Connect your Stacks Wallet to Enter</Button>
        </Box>

        <Text fontWeight="300" marginLeft={'50px'}  marginRight={'50px'} marginTop={'50px'}  marginBottom={'50px'}fontSize={['12px', '12px']} lineHeight={2} display="block">
          And for the poor souls lacking a Stacks Wallet: <a style={{color: "red"}} href="https://www.hiro.so/wallet/install-web">Get a Stacks Wallet Here (It's free and easy to set up!)</a>
        </Text>
      </Box>
    </Box>
  )
}
