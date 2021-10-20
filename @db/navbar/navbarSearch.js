import mock from '../mock'

export const searchArr = [
  {
    groupTitle: 'Pages',
    searchLimit: 4,
    data: [
      {
        id: 1,
        target: 'analyticsDash',
        isBookmarked: false,
        title: 'Bitfari Stats',
        icon: 'Home',
        link: '/dashboard/analytics'
      },
      {
        id: 2,
        target: 'eCommerceDash',
        isBookmarked: false,
        title: 'Personal Dashboard',
        icon: 'Home',
        link: '/'
      },
      {
        id: 3,
        target: 'email',
        isBookmarked: true,
        title: 'Tellfari',
        icon: 'Mail',
        link: '/apps/email'
      },
      {
        id: 4,
        target: 'chat',
        isBookmarked: true,
        title: 'InstaFriend',
        icon: 'MessageSquare',
        link: '/apps/chat'
      },
      {
        id: 5,
        target: 'todo',
        isBookmarked: true,
        title: 'Life Filter',
        icon: 'CheckSquare',
        link: '/apps/todo'
      },
      {
        id: 6,
        target: 'calendar',
        isBookmarked: true,
        title: 'Schedule Ads',
        icon: 'Calendar',
        link: '/apps/calendar'
      },     
      {
        id: 28,
        target: 'faq',
        isBookmarked: false,
        title: 'Bitfari FAQ',
        icon: 'Zap',
        link: '/pages/faq'
      },
      {
        id: 29,
        target: 'knowledgeBase',
        isBookmarked: false,
        title: 'Knowledge Base',
        icon: 'AlignLeft',
        link: '/pages/knowledge-base'
      },

      {
        id: 30,
        target: 'pricing',
        isBookmarked: false,
        title: 'Pricing',
        icon: 'DollarSign',
        link: '/pages/pricing'
      },

      {
        id: 34,
        target: 'comingSoon',
        isBookmarked: false,
        title: 'Coming Soon',
        icon: 'Watch',
        link: '/misc/coming-soon'
      }
    ]
  }
]

// GET Search Data
mock.onGet('/api/main-search/data').reply(config => {
  return [200, { searchArr }]
})

// GET Search Data & Bookmarks
mock.onGet('/api/bookmarks/data').reply(config => {
  const bookmarks = searchArr[0].data.filter(item => item.isBookmarked)
  const suggestions = searchArr[0].data
  return [200, { suggestions, bookmarks }]
})

// POST Update isBookmarked
mock.onPost('/api/bookmarks/update').reply(config => {
  const { id } = JSON.parse(config.data)

  const obj = searchArr[0].data.find(item => item.id === id)

  Object.assign(obj, { isBookmarked: !obj.isBookmarked })

  return [200]
})
