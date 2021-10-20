import mock from '../mock'

const data = {
  pricing: {
    basicPlan: {
      title: 'Private Screens',
      img: require('@src/assets/images/illustration/Pot1.svg').default,
      subtitle: 'Use Bitfari at home or the office',
      monthlyPrice: 0,
      yearlyPlan: {
        perMonth: 0,
        totalAnnual: 0
      },
      planBenefits: [
        'Place Unlimited Ads',
        'Unlimited forms and surveys',
        'Unlimited apps',
        'Free tools',
        'Can be integrated with your apps via APIs'
      ],
      popular: true
    },
    standardPlan: {
      title: 'Billboards',
      img: require('@src/assets/images/illustration/Pot2.svg').default,
      subtitle: 'Place my ads on a real digital billboard',
      monthlyPrice: 0.99,
      yearlyPlan: {
        perMonth: 0.83,
        totalAnnual: 9.99
      },
      planBenefits: [
        'Lowest CPM cost anywhere',
        'Unlimited Billboards',
        'Global locations',
        'Dynamic performance reporting',
        'Programmable Ads'
      ],
      popular: true
    },
    enterprisePlan: {
      title: 'Agency',
      img: require('@src/assets/images/illustration/Pot3.svg').default,
      subtitle: 'Agency Ad Solutions',
      monthlyPrice: 9.99,
      yearlyPlan: {
        perMonth: 8.33,
        totalAnnual: 99.99
      },
      planBenefits: [
        'Setup your own network',
        'Operate a private network of screens',
        'Sell your own ads',
        'Integrate everything with custom solutions',
        'Change the brnading as you please'
      ],
      popular: true
    },
    qandA: [
      {
        question: 'How much does it cost to book an ad?',
        ans:
          'While Bitfari is free, you do have to pay for ad space. The cost varies across networks. While large portion of ad space in Bitfari is free, regular ads can cost anywhere from micro pennies for a single impression to hundreds of dollars for a single block of exposure in a real billboard on Times Square. Prices are market determined and change every day as new inventory hits the system!!'
      },
      {
        question: 'Why do I need to use cryptocurrencies to pay?',
        ans:
          'Bitfari runs on top of the Stacks blockchain which is a distributed supercomputer that requires mining fee payments to support the network. While these payments are usually less than pennies, they do need to be paid in cryptocurrencies. Stablecoins like USDC allow customers to pay for ad bookings using a one-to-one equivalency to the dollar for easier reporting. Cryptocurrencies allow everyone to save on processing fees, avoid fraud and process microscopic transaction costs to avoid spam and charge for microtransactions.'
      },
      {
        question: 'Can I get a refund?',
        ans:
          'Bitfari does not issue refunds.'
      }
    ]
  }
}

mock.onGet('/pricing/data').reply(() => [200, data.pricing])
