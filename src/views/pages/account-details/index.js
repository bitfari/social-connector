// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { Session } from '../../../auth'
import CurrencyFormat from 'react-currency-format'

// ** Import Axios to read APIs
import axios from 'axios'

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'

// ** Account Updates
import Tabs from './Tabs'
import Breadcrumbs from '@components/breadcrumbs'
import CensusTabContent from './CensusTabContent'
import PerksTabContent from './PerksTabContent'
import EarningsTabContent from './EarningsTabContent'
import StackingTabContent from './StackingTabContent'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-details.scss'

const WalletDetails = () => {
  // ** States
  const [activeTab, setActiveTab] = useState('1')
  const [data, setData] = useState(null)

  const toggleTab = tab => {
    setActiveTab(tab)
  }

  useEffect(() => {
    axios.get('/account-details/data').then(response => setData(response.data))
  }, [])
 
const theAddress = Session.loadUserData()?.profile?.stxAddress?.testnet
const CurrencyFormat = require('react-currency-format')

//mainnet
//const theToken = 'SP213KNHB5QD308TEESY1ZMX1BP8EZDPG4JWD0MEA.fari-token-mn'

//testnet
//const theToken = 'ST3FYGS9F88Y5FW2DT2Q5C7FVX99Y9HREGCXH5T9D.token-v4'

const WalletInfo = () => {

const [wallet, setWallet]  = useState(null) 

const fariBalance = 15000
 
// query account balance
const apiLink1 = "https://stacks-node-api.testnet.stacks.co/extended/v1/address/"

// query account assets
//const apiLink2 = "https://stacks-node-api.testnet.stacks.co/extended/v1/address/"

// create a function to fetch the data
 const fetchData = async () => {
    const res = await axios.get(`${apiLink1}${theAddress}/balances`, { headers: { Accept: "application/json" } })
    console.log(res.data)
    console.log(res.data.stx.balance)
    setWallet([res.data.stx.balance])
    //fariBalance = res['data']['fungible_tokens']['ST3FYGS9F88Y5FW2DT2Q5C7FVX99Y9HREGCXH5T9D.token-v4::fari']['balance']
    }

return (
<div>
 <h1>In my wallet:</h1>
 {/*Fetch data from url*/}

 <button onClick={ fetchData }>Load wallet data</button>
 
{/* stx data from the api printed here */}
{wallet && wallet.map((j, index) => (
<div className="data" key={index}>

<h2>STX Address</h2><h5>{theAddress}</h5>
<hr/>

<h2>FARI:<CurrencyFormat value={fariBalance} displayType={'text'} thousandSeparator={true} prefix={'ⓘ '} 
renderText={value => <div>{value}</div>} /></h2>
<hr/> 

<h2>STX
<CurrencyFormat value={j} displayType={'text'} thousandSeparator={true} prefix={'Ӿ '} renderText={value => <div>{value}</div>} /></h2>
<hr/>

<h2>BTC  
<CurrencyFormat value={0.028} displayType={'text'} thousandSeparator={true} prefix={'₿ '} renderText={value => <div>{value}</div>} /></h2>
<hr/>

<h2>USDA  
<CurrencyFormat value={1250.75} displayType={'text'} thousandSeparator={true} prefix={'$ '} renderText={value => <div>{value}</div>} /></h2>
<hr/>
   </div>
 ))}
     </div>
   )
}

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Account Details' breadCrumbParent='Pages' breadCrumbActive='Account Details' />
      {data !== null ? (
        <Row>
          <Col xs={12}>
            <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />

            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
              < WalletInfo/>
              </TabPane>
              <TabPane tabId='2'>
              <CensusTabContent data={data.general} />
              </TabPane>
              <TabPane tabId='3'>
                <PerksTabContent />
              </TabPane>
              <TabPane tabId='4'>
                <EarningsTabContent />
              </TabPane>
              <TabPane tabId='5'>
                <StackingTabContent />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default WalletDetails
