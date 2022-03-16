import React, { Component } from 'react';
import { userSession } from '../auth';

export default class Signout extends Component {
  state = {
    userState: null
  }

  handleSignOut(e) {
    e.preventDefault()
    this.setState({ userState: null })
    userSession.signUserOut(window.location.origin)
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, '/')
        this.setState({ userData: userState })
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: userSession.loadUserData() })
    }
  }
}