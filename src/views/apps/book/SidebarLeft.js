// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import classnames from 'classnames'

// ** Reactstrap Imports
import { CardBody, Button, Input, Label } from 'reactstrap'

// ** illustration import
import illustration from '@src/assets/images/pages/calendar-illustration.png'

// ** Filters Checkbox Array
const filters = [
  { value: 'Billboards.btc', label: 'Billboards.btc', color: 'success', className: 'form-check-danger mb-1' },
  { value: 'Times2.btc', label: 'Times2.btc', color: 'success', className: 'form-check-info' },
  { value: 'Screens.btc', label: 'Screens.btc', color: 'primary', className: 'form-check-primary mb-1' },
  { value: 'Agency.btc', label: 'Agency.btc', color: 'primary', className: 'form-check-info' },
  { value: 'Advertising.btc', label: 'Advertising.btc', color: 'primary', className: 'form-check-info' },
  { value: 'DirectMail.btc', label: 'Direct Mail.btc', color: 'info', className: 'form-check-info' },
  { value: 'Panorama.btc', label: 'Panorama.btc', color: 'primary', className: 'form-check-info' },
  { value: 'Office.btc', label: 'Office.btc', color: 'primary', className: 'form-check-warning mb-1' },
  { value: 'Malls.btc', label: 'Malls.btc', color: 'success', className: 'form-check-success mb-1' },
  { value: 'Say.btc', label: 'Say.btc', color: 'success', className: 'form-check-primary mb-1' },
  { value: 'Stadium.btc', label: 'Stadium.btc', color: 'info', className: 'form-check-info' },
  { value: 'Gyms.btc', label: 'Gyms.btc', color: 'info', className: 'form-check-info' },
  { value: 'Classifieds.btc', label: 'Classifieds.btc', color: 'primary', className: 'form-check-info' },
  { value: 'CPA.btc', label: 'CPA.btc', color: 'primary', className: 'form-check-info' },
  { value: 'Desktop.btc', label: 'Desktop.btc', color: 'primary', className: 'form-check-info' },
  { value: 'Uncensored.btc', label: 'Uncensored.btc', color: 'info', className: 'form-check-info' },
  { value: 'KidSafe.btc', label: 'KidSafe.btc', color: 'success', className: 'form-check-info' },
  { value: 'HighSchool.btc', label: 'HighSchool.btc', color: 'success', className: 'form-check-info' }
]

const SidebarLeft = props => {
  // ** Props
  const { handleAddEventSidebar, toggleSidebar } = props

  // ** Function to handle Add Event Click
  const handleAddEventClick = () => {
    toggleSidebar(false)
    handleAddEventSidebar()
  }

  return (
    <Fragment>
      <div className='sidebar-wrapper'>
        <CardBody className='card-body d-flex justify-content-center my-sm-0 mb-3'>
          <Button color='primary' block onClick={handleAddEventClick}>
            <span className='align-middle'>Book Ad</span>
          </Button>
        </CardBody>
        <CardBody>
          <h5 className='section-label mb-1'>
            <span className='align-middle'>NETWORKS</span>
          </h5>
          <div className='calendar-events-filter'>
            {filters.length &&
              filters.map(filter => {
                return (
                  <div
                    key={`${filter.label}-key`}
                    className={classnames('form-check', {
                      [filter.className]: filter.className
                    })}
                  >
                    <Label className='form-check-label' for={`${filter.label}-event`}>
                      {filter.label}
                    </Label>
                  </div>
                )
              })}
          </div>
        </CardBody>
      </div>
      <div className='mt-auto'>
        <img className='img-fluid' src={illustration} alt='illustration' />
      </div>
    </Fragment>
  )
}

export default SidebarLeft
