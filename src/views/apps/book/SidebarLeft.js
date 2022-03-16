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
  { label: 'Billboards.btc', color: 'Billboards', className: 'form-check-danger mb-1' },
  { label: 'Times2.btc', color: 'success', className: 'form-check-info' },
  { label: 'Screens.btc', color: 'primary', className: 'form-check-primary mb-1' },
  { label: 'Agency.btc', color: 'primary', className: 'form-check-info' },
  { label: 'Advertising.btc', color: 'primary', className: 'form-check-info' },
  { label: 'Direct Mail.btc', color: 'info', className: 'form-check-info' },
  { label: 'Panorama.btc', color: 'primary', className: 'form-check-info' },
  { label: 'Office.btc', color: 'primary', className: 'form-check-warning mb-1' },
  { label: 'Malls.btc', color: 'success', className: 'form-check-success mb-1' },
  { label: 'Say.btc', color: 'success', className: 'form-check-primary mb-1' },
  { label: 'Stadium.btc', color: 'info', className: 'form-check-info' },
  { label: 'Gyms.btc', color: 'info', className: 'form-check-info' },
  { label: 'Classifieds.btc', color: 'primary', className: 'form-check-info' },
  { label: 'CPA.btc', color: 'primary', className: 'form-check-info' },
  { label: 'Desktop.btc', color: 'primary', className: 'form-check-info' },
  { label: 'Uncensored.btc', color: 'info', className: 'form-check-info' },
  { label: 'KidSafe.btc', color: 'success', className: 'form-check-info' },
  { label: 'HighSchool.btc', color: 'success', className: 'form-check-info' }
]

const SidebarLeft = props => {
  // ** Props
  const { handleAddEventSidebar, toggleSidebar, updateFilter, updateAllFilters, store, dispatch } = props

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
            <span className='align-middle'>Filter</span>
          </h5>
          <div className='form-check mb-1'>
            <Input
              id='view-all'
              type='checkbox'
              label='View All'
              className='select-all'
              checked={store.selectedCalendars.length === filters.length}
              onChange={e => dispatch(updateAllFilters(e.target.checked))}
            />
            <Label className='form-check-label' for='view-all'>
              View All
            </Label>
          </div>
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
                    <Input
                      type='checkbox'
                      key={filter.label}
                      label={filter.label}
                      className='input-filter'
                      id={`${filter.label}-event`}
                      checked={store.selectedCalendars.includes(filter.label)}
                      onChange={() => {
                        dispatch(updateFilter(filter.label))
                      }}
                    />
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
