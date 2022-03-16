// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        Copyright © {new Date().getFullYear()}{' '} Bitfari DAO
        <span className='d-none d-sm-inline-block'>, Some Rights Reserved</span>
      </span>
    </p>
  )
}

export default Footer
