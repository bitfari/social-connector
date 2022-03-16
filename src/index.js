// ** React Imports
import React, { Suspense} from 'react'
import ReactDOM from 'react-dom'
import { Signin } from './components/Signin'
import { Header } from './components/Header'
import { Session } from './auth'
 
// ** Router Import
import Router from './router/Router'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from './redux/store'

// ** Intl, CASL & ThemeColors Context
import { ToastContainer } from 'react-toastify'
import { ThemeContext } from './utility/context/ThemeColors'

// ** i18n
import './configs/i18n'

// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner'

// ** Ripple Button
import './@core/components/ripple-button'

// ** Local Database
import './@local-db'

// ** PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx.min'

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** React Toastify
import '@styles/react/libs/toastify/toastify.scss'

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css'
import './@core/scss/core.scss'
import './assets/scss/style.scss'

// ** Service Worker
import * as serviceWorker from './serviceWorker'
 
  function Display(props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
     return <Router />
    }
     return <Signin />
  }

  ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
          <ThemeContext>
          <Display isLoggedIn = {Session.isUserSignedIn()}/>
          <Header />
          <ToastContainer newestOnTop />
        </ThemeContext>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()