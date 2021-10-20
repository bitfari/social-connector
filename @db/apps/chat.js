import mock from '../mock'
/*eslint-disable */
const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
const dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2)

const data = {
  profileUser: {
    id: 11,
    avatar: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
    fullName: 'InstaFriend - Blackboy',
    role: 'Tour Guide',
    about:
      'Hi! Blackboy here. I can help you with place navigation, location tips and tricks and screen validation. Just tell me what you need and boom! Tour charge: 10 STX, Location Video charge: 5 STX.',
    status: 'online',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false
    }
  },
  contacts: [
    {
      id: 1,
      fullName: 'FlowerPower',
      role: 'Auditor',
      about: 'Bitfari Auditor, ready to take pictures of your ads running so you can double check foot traffic at any hour of the day. Location Video charge: 7 STX.',

      avatar: require('@src/assets/images/portrait/small/avatar-s-2.jpg').default,
      status: 'offline'
    },
    {
      id: 2,
      fullName: 'VirtualNeighbor',
      role: 'Local Friend',
      about:
        'For 5 STX you get 15 mins to ask me anything about the place. General inquiries also welcome. Glad to help!',
      avatar: require('@src/assets/images/portrait/small/avatar-s-1.jpg').default,
      status: 'busy'
    }
  ],
  chats: [
    {
      id: 1,
      userId: 1,
      unseenMsgs: 0,
      chat: [
        {
          message: 'Hi, this is an InstaFriend Preview 👍',
          time: 'Mon Aug 20 2021 07:45:00 GMT+0000 (GMT)',
          senderId: 11
        },
        {
          message: 'Bitfari users gather here to talk about the place!',
          time: 'Mon Aug 20 2021 07:45:15 GMT+0000 (GMT)',
          senderId: 2
        },
        {
          message: 'They can book tours, gain location insights and even see their ads running in realtime via InstaFriend',
          time: 'Mon Aug 20 2021 07:46:10 GMT+0000 (GMT)',
          senderId: 11
        },
        {
          message: 'InstaFriend goes live with the Parra release!!',
          time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
          senderId: 2
        }
      ]
    }
  ]
}
/*eslint-enable */
// ------------------------------------------------
// GET: Return Chats Contacts and Contacts
// ------------------------------------------------
mock.onGet('/apps/chat/chats-and-contacts').reply(() => {
  const chatsContacts = data.chats.map(chat => {
    const contact = data.contacts.find(c => c.id === chat.userId)
    contact.chat = { id: chat.id, unseenMsgs: chat.unseenMsgs, lastMessage: chat.chat[chat.chat.length - 1] }
    return contact
  })
  const profileUserData = {
    id: data.profileUser.id,
    avatar: data.profileUser.avatar,
    fullName: data.profileUser.fullName,
    status: data.profileUser.status
  }
  return [200, { chatsContacts, contacts: data.contacts, profileUser: profileUserData }]
})

// ------------------------------------------------
// GET: Return User Profile
// ------------------------------------------------
mock.onGet('/apps/chat/users/profile-user').reply(() => [200, data.profileUser])

// ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------
mock.onGet('/apps/chat/get-chat').reply(config => {
  // Get event id from URL

  let userId = config.id

  //  Convert Id to number
  userId = Number(userId)

  const chat = data.chats.find(c => c.id === userId)
  if (chat) chat.unseenMsgs = 0
  const contact = data.contacts.find(c => c.id === userId)
  if (contact.chat) contact.chat.unseenMsgs = 0
  return [200, { chat, contact }]
})

// ------------------------------------------------
// POST: Add new chat message
// ------------------------------------------------
mock.onPost('/apps/chat/send-msg').reply(config => {
  // Get event from post data
  const { obj } = JSON.parse(config.data)

  let activeChat = data.chats.find(chat => chat.userId === obj.contact.id)

  const newMessageData = {
    message: obj.message,
    time: new Date(),
    senderId: 11
  }
  // If there's new chat for user create one
  let isNewChat = false
  if (activeChat === undefined) {
    isNewChat = true

    const { length } = data.chats
    // const lastId = data.chats[length - 1].id

    data.chats.push({
      id: obj.contact.id,
      userId: obj.contact.id,
      unseenMsgs: 0,
      chat: [newMessageData]
    })
    activeChat = data.chats[data.chats.length - 1]
  } else {
    activeChat.chat.push(newMessageData)
  }

  const response = { newMessageData, id: obj.contact.id }
  if (isNewChat) response.chat = activeChat

  return [201, { response }]
})
