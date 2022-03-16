import { Fragment } from 'react'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const Address = ({ stepper, type }) => {
  const { errors, handleSubmit, trigger } = useForm()

  const onSubmit = () => {
    trigger()
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Address</h5>
        <small>Enter the Screen Physical Address</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`address-${type}`}>
              Address
            </Label>
            <Input
              type='text'
              id={`address-${type}`}
              name={`address-${type}`}
              placeholder='123 Street, City, Zip Code'
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`landmark-${type}`}>
              Closest Landmark
            </Label>
            <Input
              type='text'
              name={`landmark-${type}`}
              id={`landmark-${type}`}
              placeholder='Name a nearby landmark if any'
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`pincode-${type}`}>
              Pincode
            </Label>
            <Input
              type='text'
              name={`pincode-${type}`}
              id={`pincode-${type}`}
              placeholder='type a six digit pincode and save it on a note'
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`city-${type}`}>
              City
            </Label>
            <Input
              type='text'
              name={`city-${type}`}
              id={`city-${type}`}
              placeholder='New York'
            />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev'>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default Address
