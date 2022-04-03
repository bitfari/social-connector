// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { Row, Col } from 'reactstrap'

// ** Calendar App Component Imports
import Calendar from './Calendar'
import SidebarLeft from './SidebarLeft'
import AddEventSidebar from './AddEventSidebar'

// ** Custom HooksappCalendar
import { useRTL } from '@hooks/useRTL'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { fetchEvents, selectEvent, updateEvent, addEvent, removeEvent } from './store'

// ** Styles
import '@styles/react/apps/app-book.scss'

// ** CalendarColors
const calendarsColor = {
  'Billboards.btc': 'success',  
   'Times2.btc': 'success', 
  'Screens.btc': 'primary', 
   'Agency.btc': 'primary', 
   'Advertising.btc': 'primary', 
   'Direct Mail.btc': 'info', 
   'Panorama.btc': 'primary', 
   'Office.btc': 'primary', 
   'Malls.btc': 'success', 
   'Say.btc': 'success', 
   'Stadium.btc': 'info', 
   'Gyms.btc': 'info', 
   'Classifieds.btc': 'primary' 
}

const CalendarComponent = () => {
  // ** Variables
  const dispatch = useDispatch()
  const store = useSelector(state => state.book) 

  // ** states
  const [calendarApi, setCalendarApi] = useState(null)
  const [addSidebarOpen, setAddSidebarOpen] = useState(false)
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)

  // ** Hooks
  const [isRtl] = useRTL()

  // ** AddEventSidebar Toggle Function
  const handleAddEventSidebar = () => setAddSidebarOpen(!addSidebarOpen)

  // ** LeftSidebar Toggle Function
  const toggleSidebar = val => setLeftSidebarOpen(val)

  // ** Blank Event Object
  const blankEvent = {
    title: '',
    start: '',
    end: '',
    allDay: false,
    url: '',
    extendedProps: {
      calendar: '',
      guests: [],
      location: '',
      description: ''
    }
  }

  // ** refetchEvents
  const refetchEvents = () => {
    //if (calendarApi !== null) {
      calendarApi.refetchEvents()
   // }
  }

  // ** Fetch Events On Mount
  useEffect(() => {
    dispatch(fetchEvents(store.selectedCalendars))
  }, [])

  return (
    <Fragment>
      <div className='app-calendar overflow-hidden border'>
        <Row className='g-0'>
          <Col
            id='app-calendar-sidebar'
            className={classnames('col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column', {
              show: leftSidebarOpen
            })}
          >
            <SidebarLeft
              store={store}
              dispatch={dispatch}
              toggleSidebar={toggleSidebar}
              handleAddEventSidebar={handleAddEventSidebar}
            />
          </Col>
          <Col className='position-relative'>
            <Calendar
              isRtl={isRtl}
              store={store}
              dispatch={dispatch}
              blankEvent={blankEvent}
              calendarApi={calendarApi}
              selectEvent={selectEvent}
              updateEvent={updateEvent}
              toggleSidebar={toggleSidebar}
              calendarsColor={calendarsColor}
              setCalendarApi={setCalendarApi}
              handleAddEventSidebar={handleAddEventSidebar}
            />
          </Col>
          <div
            className={classnames('body-content-overlay', {
              show: leftSidebarOpen === true
            })}
            onClick={() => toggleSidebar(false)}
          ></div>
        </Row>
      </div>
      <AddEventSidebar
        store={store}
        dispatch={dispatch}
        addEvent={addEvent}
        open={addSidebarOpen}
        selectEvent={selectEvent}
        updateEvent={updateEvent}
        removeEvent={removeEvent}
        calendarApi={calendarApi}
        refetchEvents={refetchEvents}
        calendarsColor={calendarsColor}
        handleAddEventSidebar={handleAddEventSidebar}
      />
    </Fragment>
  )
}

export default CalendarComponent