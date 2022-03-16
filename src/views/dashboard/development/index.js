import { useContext } from 'react'
import { List } from 'react-feather'
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import InvoiceList from '@src/views/apps/invoice/list'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Sales from '@src/views/ui-elements/cards/development/Sales'
import AvgSessions from '@src/views/ui-elements/cards/development/AvgSessions'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import SupportTracker from '@src/views/ui-elements/cards/development/SupportTracker'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import OrdersReceived from '@src/views/ui-elements/cards/network/OrdersReceived'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import SubscribersGained from '@src/views/ui-elements/cards/network/SubscribersGained'

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