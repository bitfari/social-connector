import { Tool, Database, PenTool, Circle, CameraOff, Eye, Tv} from 'react-feather'
export default [
  {
    id: 'billboards',
    title: 'Digital Billboards',
    icon: <Tv />,
    children: [
      { id: 'billboards',
        title: 'Digital Billboard Directory',
        icon: <Database />,
        externalLink: false,
        newTab: false,
        navLink: '/datatables/advance'
      },
      { id: 'networks',
        title: 'Networks',
        icon: <Eye />,
        externalLink: true,
        newTab: true,
        navLink: 'https://www.bitfari.org/2021/07/30/bitfari-domain-portfolio/'
      },
      {
        id: 'screens',
        title: 'Native Smart Screens',
        icon: <Tv />,
        externalLink: true,
        newTab: true,
        navLink: 'https://www.bitfari.org/developer-tools/on-chain-analytics/'
      },
     {
        id: 'registration',
        title: 'Screen Registration',
        icon: <PenTool />,
        externalLink: true,
        newTab: true,
        navLink: 'https://explorer.stacks.co/txid/0x5c43079bcf1784315753121b799bc884a521b4ab54505a4f5c5d597336760f7a?chain=testnet'
      }
    ]
  }
]
