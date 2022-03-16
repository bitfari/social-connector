import mock from '../mock'

export const searchArr = [
  {
    groupTitle: 'Pages',
    searchLimit: 4,
    data: [
      {
        id: 1,
        target: 'development',
        isBookmarked: false,
        title: 'Bitfari Stats',
        icon: 'Home',
        link: '/dashboard/development'
      },
      {
        id: 2,
        target: 'network',
        isBookmarked: true,
        title: 'Home',
        icon: 'Home',
        link: '/dashboard/network'
      },
      {
        id: 3,
        target: 'tellfari',
        isBookmarked: false,
        title: 'Tellfari',
        icon: 'Mail',
        link: '/apps/tellfari'
      },
      {
        id: 4,
        target: 'instafriend',
        isBookmarked: false,
        title: 'InstaFriend',
        icon: 'MessageSquare',
        link: '/apps/instafriend'
      },
      {
        id: 5,
        target: 'focus',
        isBookmarked: true,
        title: 'Focus',
        icon: 'CheckSquare',
        link: '/apps/focus'
      },
      {
        id: 6,
        target: 'book',
        isBookmarked: true,
        title: 'Book Ads',
        icon: 'Calendar',
        link: '/apps/book'
      },     
      {
        id: 28,
        target: 'faq',
        isBookmarked: true,
        title: 'FAQ',
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
        isBookmarked: true,
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
mock.onGet('/api/main-search/data').reply(() => {
  return [200, { searchArr }]
})

// GET Search Data & Bookmarks
mock.onGet('/api/bookmarks/data').reply(() => {
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
