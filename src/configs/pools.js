import Offering from '../web3/abi/Offering.json'
import Starter from '../web3/abi/Starter.json'
import StarterV2 from '../web3/abi/StarterV2.json'
import OfferingV2 from '../web3/abi/OfferingV2.json'

export default [
  {
    name: 'MATTER',
    address: '0x4F7d4aCF1A2d92C5b64a7365e3cD2185c91F9e40',
    abi: Offering,
    start_at: '1614432600',
    is_top: true,
    is_coming: false,
    currency: {
      address: '0x0', // 如果是0x0则是ht
      symbol: 'HT',
      decimal: 18,
    },
    icon: '',
    type: 1,
    isPrivate: true,
    underlying: {
      address: '0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F',
      decimal: 18,
      symbol: 'MATTER',
      name: 'MATTER ',
      total_supply: '100,000,000.00',
      holders: '-',
      transfers: '-',
    },
    amount: '250000',
    pool_info: {
      token_distribution: 'February 27th 2021, 9:30PM SGT',
      min_allocation: '0',
      max_allocation: '6.6 HT',
      min_swap_level: '833 HT',
    },
    website: 'https://antimatter.finance',
    white_paper: '-',
    twitter: 'https://twitter.com/antimatterdefi',
    Telegram_Channel: 'https://t.me/antimatterchat',
    Github: 'https://github.com/antimatter-finance',
    yuque: '-',
    progress: 1,
    status: 3,
    ratio: '1HT=300MATTER',
    time: '1614435600',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '833333330000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: '',
    project_introduction: '',
  },
  {
    name: 'dFuture',
    address: '0xd9019793189E12ac91892b4D4622E3A315a289Fc',
    abi: Starter,
    start_at: '1614690000',
    is_top: false,
    is_coming: false,
    currency: {
      address: '0xa71edc38d189767582c38a3145b5873052c3e47a', // 如果是0x0则是ht
      decimal: 18,
      symbol: 'USDT',
    },
    icon: '',
    type: 0,
    isPrivate: false,
    underlying: {
      address: '0x42712dF5009c20fee340B245b510c0395896cF6e',
      decimal: 18,
      symbol: 'DFT',
      name: 'dFuture',
      total_supply: '400,000,000.00',
      holders: '-',
      transfers: '-',
    },
    amount: '166667',
    pool_info: {
      token_distribution: 'March 2th 2021, 9:00PM SGT',
      min_allocation: '-',
      max_allocation: '',
      min_swap_level: '50000 USDT',
    },
    website: 'https://www.dfuture.com',
    white_paper: '-',
    twitter: 'https://twitter.com/dFuture_finance',
    Telegram_Channel: 'https://t.me/dfutureglobal',
    Github: '-',
    yuque: '-',
    progress: 1,
    status: 3,
    ratio: '1USDT=3.33DFT',
    time: '1614693600',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '50000000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: true,
    link_url: 'https://heco.dfuture.com/home',
    project_introduction:
        'dFuture is an experimental derivative trading protocol initiated and incubated by Mix Lab of the Mix group. As a decentralized derivatives exchange, dFuture is based on external quotation, enabling traders to execute long / short trading with leverage safely and efficiently at better price. Compared to the centralized exchanges, traders will also enjoy far better trading depth. Meanwhile LP (liquidity provider) only needs to stake single settlement currency (currently USDT), which can obtain stable, risk-free, high return without any impermanent loss.',
  },
  {
    name: 'FIX',
    address: '0x24DE0C0F84Ca06D9A8225e031D294dfF405bC6aB',
    abi: Offering,
    start_at: '1615377600',
    is_top: true,
    is_coming: false, // is_coming 为 true 则不请求合约
    currency: {
      address: '0x0', // 如果是0x0则是ht
      decimal: 18,
      symbol: 'HT',
    },
    icon: '',
    type: 1,
    isPrivate: true,
    underlying: {
      address: '0xDe9495De889996404b14dDBf05f66Db7401F0733',
      decimal: 18,
      symbol: 'FIX',
      name: 'FIX',
      total_supply: '10,000,000.00',
      holders: '-',
      transfers: '-',
    },
    amount: '6000',
    pool_info: {
      token_distribution: 'March 10th 2021, 8:00PM SGT',
      min_allocation: '0',
      max_allocation: '18.54 HT',
      min_swap_level: '3708 HT',
    },
    website: 'https://www.fixed.finance',
    white_paper: '-',
    twitter: 'https://twitter.com/ProtocolFixed',
    Telegram_Channel: 'https://t.me/FixedRateProtocol',
    Github: '-',
    yuque: '-',
    progress: 1,
    status: 3,
    ratio: '1HT=1.618FIX', // 兑换比例需要确认
    time: '1615384800',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '3708280000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://fixed.finance/home', // 跳转外链接
    project_introduction:
        'Fixed-Rate Protocol (official Site：fixed.finance) is the first and the best stable yield investment protocol on HECO. The all-time monitoring of on-chain data and the intelligent aggregating strategy of savings provide the various investment options for distinctive users along with balancing risks and earnings mechanically. By combining liquidity mining, NFT, and community governance(DAO), FIX Token endowed with intrinsic value which will support Fixed-Rate Protocol to become one of the most stable and the most fruitful application among HECO.',
  },
  {
    name: 'FIX',
    address: '0x1bCaC989BA76C293f56b2Ae7490d5375977F6eb4',
    abi: Starter,
    start_at: '1615381200',
    is_top: true,
    is_coming: false,
    currency: {
      address: '0x0', // 如果是0x0则是ht
      decimal: 18,
      symbol: 'HT',
    },
    icon: '',
    type: 0,
    isPrivate: false,
    underlying: {
      address: '0xDe9495De889996404b14dDBf05f66Db7401F0733',
      decimal: 18,
      symbol: 'FIX',
      name: 'FIX',
      total_supply: '10,000,000.00',
      holders: '-',
      transfers: '-',
    },
    amount: '4000',
    pool_info: {
      token_distribution: 'March 10th 2021, 8:00PM SGT',
      min_allocation: '-',
      max_allocation: '-',
      min_swap_level: '2472 HT',
    },
    website: 'https://www.fixed.finance',
    white_paper: '-',
    twitter: 'https://twitter.com/ProtocolFixed',
    Telegram_Channel: 'https://t.me/FixedRateProtocol',
    Github: '-',
    yuque: '-',
    progress: 1,
    status: 3,
    ratio: '1HT=1.618FIX',
    time: '1615384800',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '2472000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://fixed.finance/home', // 跳转外链接
    project_introduction:
        'Fixed-Rate Protocol (official Site：fixed.finance) is the first and the best stable yield investment protocol on HECO. The all-time monitoring of on-chain data and the intelligent aggregating strategy of savings provide the various investment options for distinctive users along with balancing risks and earnings mechanically. By combining liquidity mining, NFT, and community governance(DAO), FIX Token endowed with intrinsic value which will support Fixed-Rate Protocol to become one of the most stable and the most fruitful application among HECO.',
  },
  {
    name: 'DoraFactory',
    address: '0x637567F333f3C13Ee8d3814563476F848De86A39',
    abi: Offering,
    start_at: '1616392800',
    is_top: true,
    is_coming: false,
    currency: {
      address: '0x0', // 如果是0x0则是ht
      decimal: 18,
      symbol: 'HT',
    },
    icon: '',
    type: 1,
    isPrivate: true,
    underlying: {
      address: '0x7Ab088FedAE4FA8ada4Df638c07CEF6C23Aff002',
      decimal: 18,
      symbol: 'DORA',
      name: 'DORA',
      total_supply: '10,000,000.00',
      holders: '-',
      transfers: '-',
    },
    amount: '5000',
    pool_info: {
      token_distribution: 'March 22th 2021, 2:00PM SGT',
      min_allocation: '0',
      max_allocation: '7.14 HT',
      min_swap_level: '3571 HT',
    },
    website: 'https://dorafactory.org',
    white_paper: '-',
    twitter: 'https://twitter.com/DoraFactory',
    Telegram_Channel: 'https://t.me/dorafactory',
    Github: '-',
    yuque: '-',
    progress: 1,
    status: 3,
    ratio: '1 HT= 1.4 DORA',
    time: '1616587200',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: "3571428571000000000000",
    totalPurchasedUnderlying: "4999989419600000000000",
    totalPurchasedCurrency: "3571421014000000000000",
    is_flash: false,
    link_url: 'https://dorafactory.org', // 跳转外链接
    project_introduction:
        'Fixed-Rate Protocol (official Site：fixed.finance) is the first and the best stable yield investment protocol on HECO. The all-time monitoring of on-chain data and the intelligent aggregating strategy of savings provide the various investment options for distinctive users along with balancing risks and earnings mechanically. By combining liquidity mining, NFT, and community governance(DAO), FIX Token endowed with intrinsic value which will support Fixed-Rate Protocol to become one of the most stable and the most fruitful application among HECO.',
  },
  {
    name: 'Cook',
    address: '0x0000000000000000000000000000000000000000',
    abi: OfferingV2,
    start_at: '1617199200',
    is_top: true,
    is_coming: true, // is_coming 为 true 则不请求合约
    currency: {
      address: '0xa71edc38d189767582c38a3145b5873052c3e47a', // 如果是0x0则是ht
      decimal: 18,
      symbol: 'USDT',
    },
    icon: '',
    type: 1,
    isPrivate: true,
    underlying: {
      address: '0xff75ced57419bcaebe5f05254983b013b0646ef5', // 地址有问题
      decimal: 18,
      symbol: 'COOK',
      name: 'COOK',
      total_supply: '10,000,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '2000000',
    pool_info: {
      token_distribution: 'March 31th 2021, 10:00PM SGT',
      min_allocation: '0',
      max_allocation: '200 USDT',
      min_swap_level: '60000 USDT',
    },
    website: 'https://www.cook.finance',
    white_paper: '-',
    twitter: 'https://twitter.com/cook_finance',
    Telegram_Channel: 'https://t.me/cook_english',
    Github: 'https://github.com/CookFinance',
    yuque: '-',
    progress: 0,
    status: 0,
    ratio: '1USDT=33.3COOK', // 兑换比例需要确认
    time: '1617208320',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '60000000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://www.cook.finance', // 跳转外链接
    project_introduction:
        'Cook Protocol is a completely decentralized asset management platform in the DeFi space built on top of the Ethereum blockchain.',
  },
  {
    name: 'Cook',
    address: '0x0000000000000000000000000000000000000001',
    abi: StarterV2,
    start_at: '1617200400',
    is_top: true,
    is_coming: true,
    currency: {
      address: '0xa71edc38d189767582c38a3145b5873052c3e47a', // 如果是0x0则是ht
      decimal: 18,
      symbol: 'USDT',
    },
    icon: '',
    type: 0,
    isPrivate: false,
    underlying: {
      address: '0xff75ced57419bcaebe5f05254983b013b0646ef5',
      decimal: 18,
      symbol: 'COOK',
      name: 'COOK',
      total_supply: '10,000,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '1333333.33',
    pool_info: {
      token_distribution: 'March 31th 2021, 10:20PM SGT',
      min_allocation: '-',
      max_allocation: '-',
      min_swap_level: '40000 USDT',
    },
    website: 'https://www.cook.finance',
    white_paper: '-',
    twitter: 'https://twitter.com/cook_finance',
    Telegram_Channel: 'https://t.me/cook_english',
    Github: 'https://github.com/CookFinance',
    yuque: '-',
    progress: 0,
    status: 0,
    ratio: '1USDT=33.3COOK',
    time: '1617208320',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '40000000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://www.cook.finance', // 跳转外链接
    project_introduction:
        'Cook Protocol is a completely decentralized asset management platform in the DeFi space built on top of the Ethereum blockchain.',
  },
]
