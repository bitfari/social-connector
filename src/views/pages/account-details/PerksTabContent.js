// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback } from 'reactstrap'

// ** Third Party Components
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const defaultValues = {
  newPassword: '',
  currentPassword: '',
  retypeNewPassword: ''
}

const PerksTabContent = () => {
  const SignupSchema = yup.object().shape({
    currentPassword: yup
      .string()
      .min(8, obj => showErrors('Current Password', obj.value.length, obj.min))
      .required(),
    newPassword: yup
      .string()
      .min(8, obj => showErrors('New Password', obj.value.length, obj.min))
      .required(),
    retypeNewPassword: yup
      .string()
      .min(8, obj => showErrors('Retype New Password', obj.value.length, obj.min))
      .required()
      .oneOf([yup.ref(`newPassword`), null], 'Passwords must match')
  })
  // ** Hooks
  const {
    handleSubmit

  } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      return null
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Perks</CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm='6' className='mb-1'>
              <h2>My Badges</h2> 
              <h3>{ '❁ No badges' } </h3> 
              </Col>
            </Row>
            <Row>
              <Col sm='6' className='mb-1'>
              <h2>VIP Perks</h2> 
              <h3>{ '🥇 You are a VIP! Learn about your perks!' } </h3> 
              </Col>
              <Col sm='6' className='mb-1'>
              <h2>Role Perks</h2> 
              <h3>{ '❁ You have no roles in the DAO yet!' } </h3> 
              </Col>
              <Col xs={12}>
                <p className='fw-bolder'>VIP Perks</p>
                <ul className='ps-1 ms-25'>
                  <li className='mb-50'>Save even more when placing ads on Bitfari (up to 50% more!)</li>
                  <li className='mb-50'>Exclusive savings on participating businesses</li>
                  <li>Free screen space (when available)</li>
                  <li>Fari Stacking!</li>
                  <li>Free billboard greetings (when available)</li>
                  <li>VIP Intranet Access</li>
                  <li>VIP Event Access</li>
                  <li>Free Crypto Training</li>
                  <li>Higher commissions for VIP Affiliates</li>
                  <li>Stay tuned for even more perks!!</li>
                </ul>
              </Col>
              <Col className='mt-1' sm='12'>
                
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default PerksTabContent
