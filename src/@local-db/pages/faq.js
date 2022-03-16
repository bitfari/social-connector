import mock from '../mock'
const data = {
  faqData: {
    // payment
    payment: {
      icon: 'CreditCard',
      title: 'Payment',
      subtitle: 'Questions about pricing and payment',
      qandA: [
        {
          question: 'Is Bitfari free to use?',
          ans:
            'Bitfari is free to use, ad space is not. You can use Bitfari for free in your home, office and apartment complex and never pay a cent. In fact, you can earn crypto by hosting ads in your screen! If you want to place ad on digital billboards or public screens, you will have to pay the screen operator fee. Good news is that since Bitfari takes no commission you get the cheapest price!'
        },
        {
          question: 'If Bitfari is free to use why do I need a wallet?',
          ans:
            'A Stacks wallet allows you to connect to the blockchain and verify your account belongs to the network.'
        },
        {
          question: 'How much does it cost to place ads inside my hotel or apartment building?',
          ans:
            'Private screens can charge nothing or place a public fee to receive and display ads. The suggested fee is 25 cents for these types of publications.'
        },
        {
          question: 'How much does it cost to register a screen?',
          ans:
            'Screen registration is free.'
        }
      ]
    },
    // fari token
    delivery: {
      icon: 'ShoppingBag',
      title: 'Fari Token',
      subtitle: 'About the Fari',
      qandA: [
        {
          question: 'What is the FARI Token?',
          ans:
            'The FARI token is an attention and loyalty crypto token that allows you to pay 50% less when booking ads. A unit of FARI is equal to time of exposure in a number of screeens in the Bitfari network.'
        },
        {
          question:
            'What gives the FARI it\'s value?',
          ans:
            'The value of a fari (a whole unit of a Bitfari) is given by the number of screens connected to the network and the foot traffic exposed to them.'
        }
      ]
    },
    // network operation
    cancellationReturn: {
      icon: 'RefreshCw',
      title: 'Network Operation',
      subtitle: 'How does Bitfari work?',
      qandA: [
        {
          question: 'Who reviews the ads?',
          ans:
            'Ads are reviewed by a set of computer programs called social oracles, a panel of auditors and pre-auditors, screen operators, and advertisers.'
        },
        {
          question: 'Who controls Bitfari?',
          ans:
            'Nobody! Bitfari is an autonomous DAO running on top of the Stacks blockchain.'
        },
        {
          question: 'What is Stacks?',
          ans:
            'Stacks is an L1 blockchain that runs pegged to Bitcoin and allows for the execution of smart contracts and the creation of Web 3.0 distributed applications. Stacks is better than Ethereum because it works with Bitcoin to better secure the network. Via proof of transfer Stacks allows network stakers to earn bitcoin and process transactions by recycling Bitcoin\'s proof of work. Stacks is so advanced that we are confident it will become a leading decentralised blockchain in the coming years.'
        },
        {
          question: 'How is ad fraud prevented in Bitfari?',
          ans:
            'Customers are dynamically requested to become auditors and verify the screens are real and functioning. The application also includes filters, checks, and balances to avoid ad fraud.'
        },
        {
          question: 'Can I have multiple identities or accounts?',
          ans:
            'Yes you can!!'
        },
        {
          question: 'Do non-profits get free ads?',
          ans:
            'Yes, we have a special program for non-profits. Please email info@bitfari.org for the details.'
        }
      ]
    }
  }
}

mock.onGet('/faq/data').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const filteredData = {}

  Object.entries(data.faqData).forEach(entry => {
    const [categoryName, categoryObj] = entry
    const filteredQAndAOfCategory = categoryObj.qandA.filter(qAndAObj => {
      return qAndAObj.question.toLowerCase().includes(queryLowered)
    })
    if (filteredQAndAOfCategory.length) {
      filteredData[categoryName] = { ...categoryObj, qandA: filteredQAndAOfCategory }
    }
  })

  return [200, filteredData]
})
