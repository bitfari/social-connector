import { useContext } from 'react'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import AvgSessions from '@src/views/ui-elements/cards/development/AvgSessions'
import SupportTracker from '@src/views/ui-elements/cards/development/SupportTracker'
import { Row, Col } from 'reactstrap'

import '@styles/react/libs/charts/apex-charts.scss'

const DevelopmentDashboard = () => {
  const { colors } = useContext(ThemeColors)
  
  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        <Col lg='6' xs='12'>
          <AvgSessions primary={colors.primary.main} />
        </Col>
        <Col lg='6' xs='12'>
          <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
      </Row>
    </div>
  )
}

export default DevelopmentDashboard