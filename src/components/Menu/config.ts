import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.blaxion.app/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.blaxion.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.blaxion.app/pools',
  },
  {
    label: 'Blaxion Token',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dex Guru',
        href: 'https://dex.guru/token/0x33e020D046Cd410d12021DFaf01B3a0e483FfA02-bsc',
      },
      {
        label: 'Contract',
        href: 'https://bscscan.com/token/0x33e020D046Cd410d12021DFaf01B3a0e483FfA02#readContract',
      },
    ],
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
]

export default config
