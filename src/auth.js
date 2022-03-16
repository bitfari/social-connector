import { AppConfig, UserSession, showConnect } from '@stacks/connect'
import { Person } from '@stacks/profile'

const appConfig = new AppConfig(['store_write', 'publish_data'])

export const Session = new UserSession({ appConfig })

export function authenticate() {
  showConnect({
    appDetails: {
      name: 'Bitfari',
      icon: 'https://bitfari.com/assets/logo-hiro-wallet.png'
    },
    redirectTo: '/',
    onFinish: () => { 
      window.location.reload()
    },
    userSession: Session
  })
}

export function getUserData() {
  return Session.loadUserData()
}

export function getPerson() {
  return new Person(getUserData().profile)
}