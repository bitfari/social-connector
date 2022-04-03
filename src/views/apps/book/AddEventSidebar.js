// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { toast } from 'react-toastify'
import Flatpickr from 'react-flatpickr'
import { X, Check } from 'react-feather'
import Select, { components } from 'react-select'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, Label, Input, Form } from 'reactstrap'

// ** Utils
import { selectThemeColors, isObjEmpty } from '@utils'

// ** Avatar Images
import img1 from '@src/assets/images/avatars/1-small.png'

// ** Styles Imports
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Toast Component
const ToastComponent = ({ title, icon, color }) => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <Avatar size='sm' color={color} icon={icon} />
        <h6 className='toast-title'>{title}</h6>
      </div>
    </div>
  </Fragment>
)

const AddEventSidebar = props => {
  // ** Props
  const {
    open,
    store,
    dispatch,
    addEvent,
    calendarApi,
    selectEvent,
    updateEvent,
    removeEvent,
    refetchEvents,
    calendarsColor,
    handleAddEventSidebar
  } = props

  // ** Vars & Hooks
  const selectedEvent = store.selectedEvent,
    {
      control,
      setError,
      setValue,
      getValues,
      handleSubmit,
      formState: { errors }
    } = useForm({
      defaultValues: { title: '' }
    })

  // ** States
  const [url, setUrl] = useState('')
  const [desc, setDesc] = useState('')
  const [guests, setGuests] = useState({})
  const [allDay, setAllDay] = useState(false)
  const [location, setLocation] = useState('')
  const [endPicker, setEndPicker] = useState(new Date())
  const [startPicker, setStartPicker] = useState(new Date())
  const [calendarLabel, setCalendarLabel] = useState(
    [     
      { value: 'Billboards.btc', label: 'Billboards.btc', color: 'success', className: 'form-check-danger mb-1' },
      { value: 'Times2.btc', label: 'Times2.btc', color: 'success', className: 'form-check-info' },
      { value: 'Screens.btc', label: 'Screens.btc', color: 'primary', className: 'form-check-primary mb-1' },
      { value: 'Agency.btc', label: 'Agency.btc', color: 'primary', className: 'form-check-info' },
      { value: 'Advertising.btc', label: 'Advertising.btc', color: 'primary', className: 'form-check-info' },
      { value: 'Direct Mail.btc', label: 'Direct Mail.btc', color: 'info', className: 'form-check-info' },
      { value: 'Panorama.btc', label: 'Panorama.btc', color: 'primary', className: 'form-check-info' },
      { value: 'Office.btc', label: 'Office.btc', color: 'primary', className: 'form-check-warning mb-1' },
      { value: 'Malls.btc', label: 'Malls.btc', color: 'success', className: 'form-check-success mb-1' },
      { value: 'Say.btc', label: 'Say.btc', color: 'success', className: 'form-check-primary mb-1' },
      { value: 'Stadium.btc', label: 'Stadium.btc', color: 'info', className: 'form-check-info' },
      { value: 'Gyms.btc', label: 'Gyms.btc', color: 'info', className: 'form-check-info' },
      { value: 'Classifieds.btc', label: 'Classifieds.btc', color: 'primary', className: 'form-check-info' }

  ])

  // ** Select Options
  const options = [
    { value: 'Billboards.btc', label: 'Billboards.btc', color: 'success', className: 'form-check-danger mb-1' },
    { value: 'Times2.btc', label: 'Times2.btc', color: 'success', className: 'form-check-info' },
    { value: 'Screens.btc', label: 'Screens.btc', color: 'primary', className: 'form-check-primary mb-1' },
    { value: 'Agency.btc', label: 'Agency.btc', color: 'primary', className: 'form-check-info' },
    { value: 'Advertising.btc', label: 'Advertising.btc', color: 'primary', className: 'form-check-info' },
    { value: 'Direct Mail.btc', label: 'Direct Mail.btc', color: 'info', className: 'form-check-info' },
    { value: 'Panorama.btc', label: 'Panorama.btc', color: 'primary', className: 'form-check-info' },
    { value: 'Office.btc', label: 'Office.btc', color: 'primary', className: 'form-check-warning mb-1' },
    { value: 'Malls.btc', label: 'Malls.btc', color: 'success', className: 'form-check-success mb-1' },
    { value: 'Say.btc', label: 'Say.btc', color: 'success', className: 'form-check-primary mb-1' },
    { value: 'Stadium.btc', label: 'Stadium.btc', color: 'info', className: 'form-check-info' },
    { value: 'Gyms.btc', label: 'Gyms.btc', color: 'info', className: 'form-check-info' },
    { value: 'Classifieds.btc', label: 'Classifieds.btc', color: 'primary', className: 'form-check-info' }
  ]

  const guestsOptions = [
    { value: 'USA', label: 'USA', avatar: img1 },
    { value: 'CAN', label: 'Canada', avatar: img1 },
    { value: 'Global', label: 'Global', avatar: img1 }
  ]

  // ** Custom Select components
  const OptionComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <span className={`bullet bullet-${data.color} bullet-sm me-50`}></span>
        {data.label}
      </components.Option>
    )
  }

  const GuestsComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  // ** Adds New Ad
  const handleAddEvent = () => {
    const obj = {
      title: getValues('title'),
      start: startPicker,
      end: endPicker,
      allDay,
      display: 'block',
      extendedProps: {
        calendar: calendarLabel[0].label,
        url: url.length ? url : undefined,
        guests: guests.length ? guests : undefined,
        location: location.length ? location : undefined,
        desc: desc.length ? desc : undefined
      }
    }
    dispatch(addEvent(obj))
    refetchEvents()
    handleAddEventSidebar()
    toast.success(<ToastComponent title='Ad Booked - Ready to Publish' color='success' icon={<Check />} />, {
      icon: false,
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** Reset Input Values on Close
  const handleResetInputValues = () => {
    dispatch(selectEvent({}))
    setValue('title', '')
    setAllDay(false)
    setUrl('')
    setLocation('')
    setDesc('')
    setGuests({})
    setCalendarLabel([
    { value: 'Billboards.btc', label: 'Billboards.btc', color: 'success', className: 'form-check-danger mb-1' },
    { value: 'Times2.btc', label: 'Times2.btc', color: 'success', className: 'form-check-info' },
    { value: 'Screens.btc', label: 'Screens.btc', color: 'primary', className: 'form-check-primary mb-1' },
    { value: 'Agency.btc', label: 'Agency.btc', color: 'primary', className: 'form-check-info' },
    { value: 'Advertising.btc', label: 'Advertising.btc', color: 'primary', className: 'form-check-info' },
    { value: 'Direct Mail.btc', label: 'Direct Mail.btc', color: 'info', className: 'form-check-info' },
    { value: 'Panorama.btc', label: 'Panorama.btc', color: 'primary', className: 'form-check-info' },
    { value: 'Office.btc', label: 'Office.btc', color: 'primary', className: 'form-check-warning mb-1' },
    { value: 'Malls.btc', label: 'Malls.btc', color: 'success', className: 'form-check-success mb-1' },
    { value: 'Say.btc', label: 'Say.btc', color: 'success', className: 'form-check-primary mb-1' },
    { value: 'Stadium.btc', label: 'Stadium.btc', color: 'info', className: 'form-check-info' },
    { value: 'Gyms.btc', label: 'Gyms.btc', color: 'info', className: 'form-check-info' },
    { value: 'Classifieds.btc', label: 'Classifieds.btc', color: 'primary', className: 'form-check-info' }
    
    ])
    setStartPicker(new Date())
    setEndPicker(new Date())
  }

  // ** Set sidebar fields
  const handleSelectedEvent = () => {
    if (!isObjEmpty(selectedEvent)) {
      const calendar = selectedEvent.extendedProps.calendar

      const resolveLabel = () => {
        if (calendar.length) {
          return { label: calendar, value: calendar, color: calendarsColor[calendar] }
        } else {
          return { value: 'Billboards.btc', label: 'Billboards.btc', color: 'primary' }
        }
      }
      setValue('title', selectedEvent.title || getValues('title'))
      setAllDay(selectedEvent.allDay || allDay)
      setUrl(selectedEvent.url || url)
      setLocation(selectedEvent.extendedProps.location || location)
      setDesc(selectedEvent.extendedProps.description || desc)
      setGuests(selectedEvent.extendedProps.guests || guests)
      setStartPicker(new Date(selectedEvent.start))
      setEndPicker(selectedEvent.allDay ? new Date(selectedEvent.start) : new Date(selectedEvent.end))
      setCalendarLabel([resolveLabel()])
    }
  }

  // ** (UI) updateEventInCalendar
  const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
    const existingEvent = calendarApi.getEventById(updatedEventData.id)

    // ** Set ad properties except date related
    for (let index = 0; index < propsToUpdate.length; index++) {
      const propName = propsToUpdate[index]
      existingEvent.setProp(propName, updatedEventData[propName])
    }

    // ** Set date related props
    existingEvent.setDates(new Date(updatedEventData.start), new Date(updatedEventData.end), {
      allDay: updatedEventData.allDay
    })

    // ** Set ad's extendedProps
     for (let index = 0; index < extendedPropsToUpdate.length; index++) {
      const propName = extendedPropsToUpdate[index]
      existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
    }
  }

  // ** Updates Ads in Store
  const handleUpdateEvent = () => {
    if (getValues('title').length) {
      const eventToUpdate = {
        id: selectedEvent.id,
        title: getValues('title'),
        allDay,
        start: startPicker,
        end: endPicker,
        url,
        display: allDay === false ? 'block' : undefined,
        extendedProps: {
          location,
          description: desc,
          guests,
          calendar: calendarLabel[0].label
        }
      }

      const propsToUpdate = ['id', 'title', 'url']
      const extendedPropsToUpdate = ['calendar', 'guests', 'location', 'description']
      dispatch(updateEvent(eventToUpdate))
      updateEventInCalendar(eventToUpdate, propsToUpdate, extendedPropsToUpdate)

      handleAddEventSidebar()
      toast.success(<ToastComponent title='Ad Updated' color='success' icon={<Check />} />, {
        icon: false,
        autoClose: 2000,
        hideProgressBar: true,
        closeButton: false
      })
    } else {
      setError('title', {
        type: 'manual'
      })
    }
  }

  // ** (UI) removeEventInCalendar
  const removeEventInCalendar = eventId => {
    calendarApi.getEventById(eventId).remove()
  }

  const handleDeleteEvent = () => {
    dispatch(removeEvent(selectedEvent.id))
    removeEventInCalendar(selectedEvent.id)
    handleAddEventSidebar()
    toast.error(<ToastComponent title='Ad Removed' color='danger' icon={<Trash />} />, {
      icon: false,
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** Event Action buttons
  const EventActions = () => {
    if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
      return (
        <Fragment>
          <Button className='me-1' type='submit' color='primary'>
            Add
          </Button>
          <Button color='secondary' type='reset' onClick={handleAddEventSidebar} outline>
            Cancel
          </Button>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Button className='me-1' color='primary' onClick={handleUpdateEvent}>
            Update
          </Button>
          <Button color='danger' onClick={handleDeleteEvent} outline>
            Delete
          </Button>
        </Fragment>
      )
    }
  }

  // ** Close BTN
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleAddEventSidebar} />

  return (
    <Modal
      isOpen={open}
      className='sidebar-lg'
      toggle={handleAddEventSidebar}
      onOpened={handleSelectedEvent}
      onClosed={handleResetInputValues}
      contentClassName='p-0 overflow-hidden'
      modalClassName='modal-slide-in event-sidebar'
    >
      <ModalHeader className='mb-1' toggle={handleAddEventSidebar} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>
          {selectedEvent && selectedEvent.title && selectedEvent.title.length ? 'Update' : 'Book'} Ad
        </h5>
      </ModalHeader>
      <PerfectScrollbar options={{ wheelPropagation: false }}>
        <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
          <Form
            onSubmit={handleSubmit(data => {
              if (data.title.length) {
                if (isObjEmpty(errors)) {
                  if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
                    handleAddEvent()
                  } else {
                    handleUpdateEvent()
                  }
                  handleAddEventSidebar()
                }
              } else {
                setError('title', {
                  type: 'manual'
                })
              }
            })}
          >
            <div className='mb-1'>
              <Label className='form-label' for='title'>
                Title <span className='text-danger'>*</span>
              </Label>
              <Controller
                name='title'
                control={control}
                render={({ field }) => (
                  <Input id='title' placeholder='Title' invalid={errors.title && true} {...field} />
                )}
              />
            </div>

            <div className='mb-1'>
              <Label className='form-label' for='label'>
                Distribution Network
              </Label>
              <Select
                id='label'
                value={calendarLabel}
                options={options}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                onChange={data => setCalendarLabel([data])}
                components={{
                  Option: OptionComponent
                }}
              />
            </div>

            <div className='mb-1'>
              <Label className='form-label' for='startDate'>
                Start Date
              </Label>
              <Flatpickr
                required
                id='startDate'
                name='startDate'
                className='form-control'
                onChange={date => setStartPicker(date[0])}
                value={startPicker}
                options={{
                  enableTime: allDay === false,
                  dateFormat: 'Y-m-d H:i'
                }}
              />
            </div>

            <div className='mb-1'>
              <Label className='form-label' for='endDate'>
                End Date
              </Label>
              <Flatpickr
                required
                id='endDate'
                // tag={Flatpickr}
                name='endDate'
                className='form-control'
                onChange={date => setEndPicker(date[0])}
                value={endPicker}
                options={{
                  enableTime: allDay === false,
                  dateFormat: 'Y-m-d H:i'
                }}
              />
            </div>

            <div className='form-switch mb-1'>
              <Input
                id='allDay'
                type='switch'
                className='me-1'
                checked={allDay}
                name='customSwitch'
                onChange={e => setAllDay(e.target.checked)}
              />
              <Label className='form-label' for='allDay'>
                All Day
              </Label>
            </div>

            <div className='mb-1'>
              <Label className='form-label' for='eventURL'>
                URL for the Art (PNG, JPG, SVG, HTML)
                (TIFF only available for Agency Networks)
              </Label>
              <Input
                type='url'
                id='eventURL'
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder='https://www.bitfari.org'
              />
            </div>

            <div className='mb-1'>
              <Label className='form-label' for='guests'>
                Choose a Location
              </Label>
              <Select
                isMulti
                id='guests'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={guestsOptions}
                theme={selectThemeColors}
                value={guests.length ? [...guests] : null}
                onChange={data => setGuests([...data])}
                components={{
                  Option: GuestsComponent
                }}
              />
            </div>

            <div className='mb-1'>
              <Label className='form-label' for='location'>
                Keywords
              </Label>
              <Input id='location' value={location} onChange={e => setLocation(e.target.value)} placeholder='' />
            </div>

            <div className='mb-1'>
              <Label className='form-label' for='description'>
                Ad Copy
              </Label>
              <Input
                type='textarea'
                name='text'
                id='description'
                rows='3'
                value={desc}
                onChange={e => setDesc(e.target.value)}
                placeholder='Place your ad copy here'
              />
            </div>
            <div className='d-flex mb-1'>
              <EventActions />
            </div>
          </Form>
        </ModalBody>
      </PerfectScrollbar>
    </Modal>
  )
}

export default AddEventSidebar