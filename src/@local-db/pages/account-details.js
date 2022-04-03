import mock from '../mock'
const data = {
  accountDetails: {
    general: {
      avatar: require('@src/assets/images/portrait/small/avatar-s-11.jpg').default,
      username: 'bitfari',
      fullName: 'Bitfari SC',
      email: 'sc@bitfari.com',
      company: 'Bitfari Social Ads'
    },
    info: {
      bio: '',
      dob: null,
      country: 'USA',
      website: 'https://www.bitfari.com',
      phone: 9177196292
    },
    social: {
      socialLinks: {
        twitter: 'https://www.twitter.com/#/bitfari',
        facebook: '',
        google: '',
        linkedIn: 'https://www.linkedin.com/in/bitfari',
        instagram: '',
        quora: ''
      },
      connections: {
        twitter: {
          profileImg: require('@src/assets/images/avatars/11-small.png').default,
          id: 'johndoe'
        },
        google: {
          profileImg: require('@src/assets/images/avatars/3-small.png').default,
          id: 'luraweber'
        },
        facebook: {},
        github: {}
      }
    },
    notification: {
      commentOnArticle: true,
      answerOnForm: true,
      followMe: false,
      newAnnouncements: true,
      productUpdates: true,
      blogDigest: false
    }
  }
}

mock.onGet('/account-details/data').reply(() => [200, data.accountDetails])
