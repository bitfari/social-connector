import mock from '../mock'

const data = {
  // knowledge base
  knowledgeBase: [
    {
      id: 1,
      category: 'sales-automation',
      img: require('@src/assets/images/illustration/sales.svg').default,
      title: 'Sales Automation',
      desc: 'How to automate sales with Bitfari.'
    },
    {
      id: 2,
      category: 'marketing-automation',
      img: require('@src/assets/images/illustration/marketing.svg').default,
      title: 'Marketing Automation',
      desc: 'How to automate marketing with Bitfari.'
    },
    {
      id: 3,
      category: 'api-questions',
      img: require('@src/assets/images/illustration/api.svg').default,
      title: 'API Questions',
      desc: 'How to connect to the blockchain and interface with Bitfari.'
    },
    {
      id: 4,
      category: 'personalization',
      img: require('@src/assets/images/illustration/personalization.svg').default,
      title: 'Personalization',
      desc: 'How to gain advantage of Bitfari\'s personalization features.'
    },
    {
      id: 5,
      category: 'email-marketing',
      img: require('@src/assets/images/illustration/email.svg').default,
      title: 'Email Marketing',
      desc: 'Discover Bitfari\'s novel approach to email marketing.'
    },
    {
      id: 6,
      category: 'demand-generation',
      img: require('@src/assets/images/illustration/demand.svg').default,
      title: 'Demand Generation',
      desc: 'Learn about demand generation and Bitfari\'s role in this area.'
    }
  ],
  categoryData: [
    {
      id: 0,
      title: 'Bitfari Networks',
      icon: 'Settings',
      iconColor: 'text-primary',
      questions: [
        {
          id: 0,
          question: 'How to pick my ad distribution network?',
          slug: 'how-pick-network'
        },
        {
          id: 1,
          question: 'Understanding private networks',
          slug: 'private-network-essentials'
        },
        {
          id: 2,
          question: 'How to create my network?',
          slug: 'create-network'
        },
        {
          id: 3,
          question: 'Community Network Essentials',
          slug: 'community-network-essentials'
        },
        {
          id: 4,
          question: 'The Bitfari Billboard Network',
          slug: 'billboard-network'
        }
      ]
    },
    {
      id: 1,
      title: 'API Questions',
      icon: 'Link',
      iconColor: 'text-success',
      questions: [
        {
          id: 0,
          question: 'What is an API?',
          slug: 'api-basics'
        },
        {
          id: 1,
          question: 'How do I connect my app to Bitfari?',
          slug: 'connecting-to-bitfari'
        },
        {
          id: 2,
          question: 'Key Bitfari Smart Contracts to Connect To',
          slug: 'key-smart-contracts'
        },
        {
          id: 3,
          question: 'Extracting ad performance data',
          slug: 'get-performance-data'
        }
      ]
    },
    {
      id: 2,
      title: 'Booking Fees',
      icon: 'FileText',
      iconColor: 'text-danger',
      questions: [
        {
          id: 0,
          question: 'How price fluctuates across time, locations and networks',
          slug: 'price-across-networks'
        },
        {
          id: 1,
          question: 'Saving on booking fees',
          slug: 'booking-savings'
        },
        {
          id: 2,
          question: 'How to deply your budget to minimize problems',
          slug: 'budget-deployment'
        },
        {
          id: 3,
          question: 'Choosing betweent quantity vs quality of screens',
          slug: 'quality-or-quantity-booking'
        }
      ]
    },
    {
      id: 3,
      title: 'Legal',
      icon: 'Lock',
      iconColor: 'text-warning',
      questions: [
        {
          id: 0,
          question: 'Legal guidance across jurisdictions',
          slug: 'legal-across-jurisdictions'
        },
        {
          id: 1,
          question: 'Legal Issues in USA',
          slug: 'legal-issues-usa'
        },
        {
          id: 2,
          question: 'Legal Issues in Canada',
          slug: 'legal-issues-canada'
        },
        {
          id: 3,
          question: 'Legal Issues in China',
          slug: 'legal-issues-china'
        },
        {
          id: 4,
          question: 'Legal Issues in Brasil',
          slug: 'legal-issues-brasil'
        },
        {
          id: 5,
          question: 'Legal Issues in the UK',
          slug: 'legal-issues-uk'
        }
      ]
    },
    {
      id: 4,
      title: 'Mobile Ads',
      icon: 'Smartphone',
      iconColor: 'text-info',
      questions: [
        {
          id: 0,
          question: 'How are Bitfari Ads Different?',
          slug: 'bitfari-is-different'
        },
        {
          id: 1,
          question: 'Undestanding Crypto Ads',
          slug: 'crypto-ads-basics'
        },
        {
          id: 2,
          question: 'Think of Personalised Ads as Navigation',
          slug: 'personalised-ads'
        },
        {
          id: 3,
          question: 'Personalised Ads and Focus',
          slug: 'personalised-focus'
        },
        {
          id: 4,
          question: 'Smartphone Limitations',
          slug: 'mobile-limitations'
        },
        {
          id: 5,
          question: 'Undestanding Device Differences',
          slug: 'device-differences-advertising'
        }
      ]
    },
    {
      id: 5,
      title: 'Advanced Topics',
      icon: 'HelpCircle',
      iconColor: '',
      questions: [
        {
          id: 0,
          question: 'Getting Free Ads',
          slug: 'free-ads'
        },
        {
          id: 1,
          question: 'Go Viral',
          slug: 'how-to-go-viral'
        },
        {
          id: 2,
          question: 'Becoming Analytical',
          slug: 'analytics-based-optimization'
        },
        {
          id: 3,
          question: 'More Learning Resources',
          slug: 'learning-resources'
        }
      ]
    }
  ],
  questionData: {
    title: 'How to Make the Most of Bitfari?',
    lastUpdated: '18 Sep 2021',
    relatedQuestions: [
      {
        id: 0,
        question: 'How to use the FARI Token to save 50% on ads?'
      },
      {
        id: 1,
        question: 'How to connect a bitcoin account for automatic marketing?'
      },
      {
        id: 2,
        question: 'How to buy cryptocurrency and save the most?'
      },
      {
        id: 3,
        question: 'How to buy FARI at a discount?'
      },
      {
        id: 4,
        question: 'How to use Tellfari to promote my brand or business?'
      },
      {
        id: 5,
        question: 'How to join the Bitfari movement and contribute?'
      }
    ],
    // ! Here we have used require for image source but in API it shall be URL of live image, this is just for demo purpose
    content: `<p>Content pending. Please read about Bitfari at <a href="https://www.bitfari.org">https://www.bitfari.org</a> </p>`
  }
}

mock.onGet('/faq/data/knowledge_base').reply(() => [200, data.knowledgeBase])
mock.onGet('/faq/data/category').reply(() => [200, data.categoryData])
mock.onGet('/faq/data/question').reply(() => [200, data.questionData])
