import React from 'react'
import { Box, Text } from '@blockstack/ui'
import { Session } from '../auth'
import { StopCircle } from 'react-feather'

const Auth = () => {
  if (!Session.isUserSignedIn()) {
    return null
  }

  return (
    <Box>
      <Text 
        width="100px"
        textAlign="right"
        display="inline-block"
        color="ink.400"
        cursor="pointer"
        onClick={() => {
          Session.signUserOut()
          window.location = '/'
        }}
      > <StopCircle/>&nbsp;Sign out
      </Text>
      </Box>
 
  )
}

export const Header = () => {
  return (
      <Auth />
  )
}