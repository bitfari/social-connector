import mock from '../mock'

/* eslint-disable */
const data = {
  emails: [
    {
      id: 1,
      from: {
        email: 'darkknight@STX123456789ABCDEFGHIJK',
        name: 'The Dark Knight',
        avatar: require('@src/assets/images/avatars/1.png').default
      },
      to: [
        {
          name: 'me',
          email: 'usa@bitfari.com'
        }
      ],
      subject: 'New App Release - $0.001 STX',
      cc: [],
      bcc: [],
      message:
        '<p>Hi fellow Americans,</p><p>This note is a demonstration of how Tellfari works. With Tellfari, you can send an email to any group of people in a specific location. This new comunication tool is built on top of the Bitfari Network. Messages are sent with location and monetary attachments to entice people to read them and respond. Bitfari dynamically selects adequate readers based on their location and preferences. Charging a minuscule amount of crypto per person eliminates spam and declutters your inbox without you having to miss out on great offers.</p>',
      attachments: [
        {
          fileName: 'log.txt',
          thumbnail: require('@src/assets/images/icons/txt.png').default,
          url: '',
          size: '5mb'
        }
      ],
      isStarred: false,
      labels: ['personal'],
      time: 'Fri Aug 20 2021 07:46:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true
    },
    {
      id: 2,
      from: {
        email: 'instafriend@bitfari.com',
        name: 'Your InstaFriends',
        avatar: require('@src/assets/images/avatars/2.png').default
      },
      to: [
        {
          name: 'me',
          email: 'blackboy@STX123456789ABCDEFGHIJK'
        }
      ],
      subject: 'About the Hot Club on Fashion Ave - $5 STX',
      message:
        ' <p>Yes, the club is packed.</p><p>I have sent you a couple of pictures already. But you can still wait to show up as the opening act hasnt even started. Glad to help with your queries!</p>',
      attachments: [],
      isStarred: true,
      labels: [ 'private'],
      time: 'Fri Aug 20 2021 07:55:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true
    },
    {
      id: 3,
      from: {
        email: 'doghunter@STX123456789ABCDEFGHIJK',
        name: 'Dog Hunter',
        avatar: require('@src/assets/images/avatars/3.png').default
      },
      to: [
        {
          name: 'Squirrel Hill',
          email: 'squirrelhill@bitfari.com'
	}
      ],
      subject: '🎯300 STX for my Dog - $300 STX',
      message:
        '<p>Please find attached photos of my dog. If you see my dog please send me a video or location. I will approve all the relevant messages and distribute 300 STX to the contributors. And thank God for Bitfari! We dont have to use paper and plaster the city anymore to get our voice heard!</p>',
      attachments: [],
      isStarred: false,
      labels: ['important'],
      time: 'Mon Aug 20 2021 08:35:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true
    }
    
  ]
}

// ------------------------------------------------
// GET: Return Emails
// ------------------------------------------------
mock.onGet('/apps/email/emails').reply(config => {
  const { q = '', folder = 'inbox', label } = config.params

  const queryLowered = q.toLowerCase()

  function isInFolder(email) {
    if (folder === 'trash') return email.folder === 'trash'
    if (folder === 'starred') return email.isStarred && email.folder !== 'trash'
    return email.folder === (folder || email.folder) && email.folder !== 'trash'
  }

  const filteredData = data.emails.filter(
    email =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      email.subject.toLowerCase().includes(queryLowered) &&
      isInFolder(email) &&
      (label ? email.labels.includes(label) : true)
  )
  /* eslint-enable  */

  // ------------------------------------------------
  // Email Meta
  // ------------------------------------------------
  const emailsMeta = {
    inbox: data.emails.filter(email => !email.isDeleted && !email.isRead && email.folder === 'inbox').length,
    draft: data.emails.filter(email => email.folder === 'draft').length
  }

  return [
    200,
    {
      emails: filteredData.reverse(),
      emailsMeta
    }
  ]
})

// ------------------------------------------------
// POST: Update Email
// ------------------------------------------------
mock.onPost('/apps/email/update-emails').reply(config => {
  const { emailIds, dataToUpdate } = JSON.parse(config.data)
  function updateMailData(email) {
    Object.assign(email, dataToUpdate)
  }

  data.emails.forEach(email => {
    if (emailIds.includes(email.id)) updateMailData(email)
  })

  return [200]
})

// ------------------------------------------------
// POST: Update Emails Label
// ------------------------------------------------
mock.onPost('/apps/email/update-emails-label').reply(config => {
  const { emailIds, label } = JSON.parse(config.data)

  function updateMailLabels(email) {
    const labelIndex = email.labels.indexOf(label)

    if (labelIndex === -1) email.labels.push(label)
    else email.labels.splice(labelIndex, 1)
  }

  data.emails.forEach(email => {
    if (emailIds.includes(email.id)) updateMailLabels(email)
  })

  return [200]
})

// ------------------------------------------------
// GET: GET Single Email
// ------------------------------------------------
mock.onGet('/apps/email/get-email').reply(config => {
  const { id } = config

  const emailId = Number(id)

  const mail = data.emails.find(i => i.id === emailId)
  const mailIndex = data.emails.findIndex(i => i.id === mail.id)
  mailIndex === 0 ? (mail.hasPreviousMail = true) : (mail.hasPreviousMail = false)
  mailIndex === data.emails.length - 1 ? (mail.hasNextMail = true) : (mail.hasNextMail = false)

  return mail ? [200, mail] : [404]
})

// ------------------------------------------------
// GET: Paginate Existing Email
// ------------------------------------------------
mock.onGet('/apps/email/paginate-email').reply(config => {
  const { dir, emailId } = config.params

  const currentEmailIndex = data.emails.findIndex(e => e.id === emailId)

  const newEmailIndex = dir === 'previous' ? currentEmailIndex - 1 : currentEmailIndex + 1

  const newEmail = data.emails[newEmailIndex]

  return newEmail ? [200, newEmail] : [404]
})
/* eslint-enable */
