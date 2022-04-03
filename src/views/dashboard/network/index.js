import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Earnings from '@src/views/ui-elements/cards/development/Earnings'
import RevenueReport from '@src/views/ui-elements/cards/development/RevenueReport'
import OrdersBarChart from '@src/views/ui-elements/cards/network/OrdersBarChart'
import ProfitLineChart from '@src/views/ui-elements/cards/network/ProfitLineChart'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-network.scss'

const NetworkDashboard = () => {
  const { colors } = useContext(ThemeColors)
   
  return (
    <div id='dashboard-network'>
      <Row className='match-height'>
        <Col lg='4' md='12'>
          <Row className='match-height'>
            <Col lg='6' md='3' xs='6'>
              <OrdersBarChart warning={colors.warning.main} />
            </Col>
            <Col lg='6' md='3' xs='6'>
              <ProfitLineChart info={colors.info.main} />
            </Col>
            <Col lg='12' md='6' xs='12'>
              <Earnings success={colors.success.main} />
            </Col>
          </Row>
        </Col>
        <Col lg='8' md='12'>
          <RevenueReport primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row>
    </div>
  )
}

export default NetworkDashboard
