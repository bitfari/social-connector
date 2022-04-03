// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Select from 'react-select'
import Cleave from 'cleave.js/react'
import { useForm, Controller } from 'react-hook-form'
import 'cleave.js/dist/addons/cleave-phone.us'

// ** Reactstrap Imports
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, FormFeedback } from 'reactstrap'

// ** Utils
import { selectThemeColors } from '@utils'

const genderOptions = [
  { value: 'woman', label: 'Woman' },
  { value: 'man', label: 'Man' },
  { value: 'trans', label: 'Transgender' },
  { value: 'nonbinary', label: 'Non-binary' },
  { value: 'noanswer', label: 'Prefer not to respond' }

]

const educationOptions = [
  { value: 'none', label: 'No School' },
  { value: 'primary', label: 'Primary' },
  { value: 'highschool', label: 'High School' },
  { value: 'trade', label: 'Trade School' },
  { value: 'college', label: 'College' },
  { value: 'bachelors', label: 'Bachelors' },
  { value: 'masters', label: 'Masters' },
  { value: 'doctorate', label: 'Doctorate' }
]

const religionOptions = [
  { value: 'noreligion', label: 'No Religion' },
  { value: 'agnostic', label: 'Agnostic' },
  { value: 'atheist', label: 'Atheist' },
  { value: 'bahai', label: 'Bahai' },
  { value: 'buddhism', label: 'Buddhism' },
  { value: 'christianity', label: 'Christianity' },
  { value: 'confucianism', label: 'Confucianism' },
  { value: 'hinduism', label: 'Hinduism' },
  { value: 'islam', label: 'Islam' },
  { value: 'jainism', label: 'Jainism' },
  { value: 'judaism', label: 'Judaism' },
  { value: 'shinto', label: 'Shinto' },
  { value: 'sikhism', label: 'Sikhism' },
  { value: 'taoism', label: 'Taoism' },
  { value: 'zoroastrianism', label: 'Zoroastrianism' }
]

const occupationOptions = [
  { value: 'Accountant', label: 'Accountant' },
  { value: 'Actor /Actress', label: 'Actor /Actress'},
  { value: 'Architect', label: 'Architect'},
  { value: 'Astronomer', label: 'Astronomer' },
  { value: 'Baker', label: 'Baker' },
  { value: 'Bricklayer', label: 'Bricklayer' },
  { value: 'Bus driver', label: 'Bus driver' },
  { value: 'Butcher', label: 'Butcher' },
  { value: 'Carpenter', label: 'Carpenter' },
  { value: 'Chef/Cook', label: 'Chef/Cook' },
  { value: 'Cleaner', label: 'Cleaner' },
  { value: 'Dentist', label: 'Dentist' },
  { value: 'Designer', label: 'Designer' },
  { value: 'Doctor', label: 'Doctor' },
  { value: 'Electrician', label: 'Electrician' },
  { value: 'Engineer', label: 'Engineer' },
  { value: 'Executive', label: 'Executive' },
  { value: 'Factory worker', label: 'Factory worker' },
  { value: 'Farmer', label: 'Farmer' },
  { value: 'Fireman/Fire fighter', label: 'Fireman/Fire fighter' },
  { value: 'Fisherman', label: 'Fisherman' },
  { value: 'Florist', label: 'Florist' },
  { value: 'Gardener', label: 'Gardener' },
  { value: 'Hairdresser', label: 'Hairdresser' },
  { value: 'Journalist', label: 'Journalist' },
  { value: 'Judge', label: 'Judge' },
  { value: 'Lawyer', label: 'Lawyer' },
  { value: 'Lecturer', label: 'Lecturer' },
  { value: 'Librarian', label: 'Librarian' },
  { value: 'Lifeguard', label: 'Lifeguard' },
  { value: 'Mechanic', label: 'Mechanic' },
  { value: 'Model', label: 'Model' },
  { value: 'Newsreader', label: 'Newsreader' },
  { value: 'Nurse', label: 'Nurse' },
  { value: 'Optician', label: 'Optician' },
  { value: 'Owner', label: 'Owner' },
  { value: 'Painter', label: 'Painter' },
  { value: 'Pharmacist', label: 'Pharmacist' },
  { value: 'Photographer', label: 'Photographer' },
  { value: 'Pilot', label: 'Pilot' },
  { value: 'Plumber', label: 'Plumber' },
  { value: 'Politician', label: 'Politician' },
  { value: 'Policeman/Policewoman', label: 'Policeman/Policewoman' },
  { value: 'Postman', label: 'Postman' },
  { value: 'Real estate agent', label: 'Real estate agent' },
  { value: 'Receptionist', label: 'Receptionist' },
  { value: 'Scientist', label: 'Scientist' },
  { value: 'Secretary', label: 'Secretary' },
  { value: 'Shop assistant', label: 'Shop assistant' },
  { value: 'Soldier', label: 'Soldier' },
  { value: 'Tailor', label: 'Tailor' },
  { value: 'Taxi driver', label: 'Taxi driver' },
  { value: 'Teacher', label: 'Teacher' },
  { value: 'Translator', label: 'Translator' },
  { value: 'Traffic warden', label: 'Traffic warden' },
  { value: 'Travel agent', label: 'Travel agent' },
  { value: 'Veterinary Doctor', label: 'Veterinary Doctor' },
  { value: 'Waiter/Waitress', label: 'Waiter/Waitress' },
  { value: 'Businessman', label: 'Businessman' },
  { value: 'Dancer', label: 'Dancer' },
  { value: 'Artist', label: 'Artist' },
  { value: 'Bartenders', label: 'Bartenders' },
  { value: 'Not Listed', label: 'Not Listed' }
]

const AccountTabs = ({ data }) => {
  // ** Hooks
  const defaultValues = {
    lastName: '',
    firstName: data.fullName.split(' ')[0]
  }
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** States

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
          <CardTitle tag='h4'>Crypto Census</CardTitle>
        </CardHeader>
        <CardBody className='py-2 my-25'>
        <h5>Every answer makes you more likely to win awards and prizes. Fill them all and earn 25% more while
            using Bitfari!</h5>
          <Form className='mt-2 pt-50' onSubmit={handleSubmit(onSubmit)}>
            <h5><b>Is the question too sensitive??</b> Leave empty anything you don't want to answer. It's ok!</h5>
            <Row>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='age'>
                  Age
                </Label>
                <Controller
                  name='age'
                  control={control}
                  render={({ field }) => (
                    <Input id='age' onEmptied={'N/A'} placeholder='18' {...field} />
                  )}
                />          
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='alterEgo'>
                  Nickname
                </Label>
                <Controller
                  name='alterEgo'
                  control={control}
                  render={({ field }) => (
                    <Input id='alterEgo' onEmptied={'Satoshi Nakamoto'} placeholder='Satoshi Nakamoto' {...field} />
                  )}
                />
                {errors.lastName && <FormFeedback>Please enter a valid Alter Ego</FormFeedback>}
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='income'>
                  Income
                </Label>
                <Input id='income' onEmptied={'$0.00'} name='income' placeholder='$0.00' maxLength='16' />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='address'>
                  Family Status
                </Label>
                <Input id='familyStatus' name='familyStatus' onEmptied={'Single'} placeholder='Single/Married/Divorced/Widowed' />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='children'>
                  How many children do you have?
                </Label>
                <Input id='children' name='children' onEmptied={'0'} placeholder='Type a number' maxLength='2' />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='ethnicity'>
                Ethnicity
                </Label>
                <Input id='ethnicity' name='ethnicity' onEmptied={'N/A'} placeholder='White/Black/Latino' maxLength='32' />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='gender'>
                  Gender
                </Label>
                <Select
                  id='gender'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={genderOptions}
                  theme={selectThemeColors}
                  defaultValue={genderOptions[0]}
                />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='language'>
                  Level of Education
                </Label>
                <Select
                  id='language'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={educationOptions}
                  theme={selectThemeColors}
                  defaultValue={educationOptions[0]}
                />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='occupation'>
                  Occupation
                </Label>
                <Select
                  id='occupation'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={occupationOptions}
                  theme={selectThemeColors}
                  defaultValue={occupationOptions[0]}
                />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='religion'>
                  Religion
                </Label>
                <Select
                  id='currency'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={religionOptions}
                  theme={selectThemeColors}
                  defaultValue={religionOptions[0]}
                />
              </Col>
              <Col className='mt-2' sm='12'>
                <Button type='submit' className='me-1' color='primary'>
                  Save changes
                </Button>
                <Button color='secondary' outline>
                  Discard
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default AccountTabs
