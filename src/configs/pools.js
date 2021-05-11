import Offering from '../web3/abi/Offering.json'
import Starter from '../web3/abi/Starter.json'
import StarterV2 from '../web3/abi/StarterV2.json'
import StarterV3 from '../web3/abi/StarterV3.json'
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
    type: 1, // 非1 则为公有池，为1 则为私有池
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
    status: 3, // 状态
    ratio: '1MATTER=0.003HT', // 比例
    time: '1614435600', // 结算时间点
    purchasedCurrencyOf: 0, // 已购买币种
    totalPurchasedAmount: '833333330000000000000', // 总购买数量
    totalPurchasedUnderlying: '0', // 总购买金额
    totalPurchasedCurrency: '0', // 总购买币种
    is_flash: false,
    link_url: '',
    project_introduction: '',
  },
  {
    name: 'dFuture',
    address: '0xd9019793189E12ac91892b4D4622E3A315a289Fc',
    abi: Starter,
    start_at: '1614690000',
    is_top: true,
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
    progress: 1038.92,
    status: 3,
    ratio: '1DFT=0.3USDT',
    time: '1614693600',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '50000000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
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
    ratio: '1FIX=0.618HT', // 兑换比例需要确认
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
    progress: 1845.59,
    status: 3,
    ratio: '1FIX=0.618HT',
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
    name: 'DORA',
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
    ratio: '1DORA=0.714HT',
    time: '1616587200',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '3571428571000000000000',
    totalPurchasedUnderlying: '4999989419600000000000',
    totalPurchasedCurrency: '3571421014000000000000',
    is_flash: false,
    link_url: 'https://dorafactory.org', // 跳转外链接
    project_introduction:
      'Fixed-Rate Protocol (official Site：fixed.finance) is the first and the best stable yield investment protocol on HECO. The all-time monitoring of on-chain data and the intelligent aggregating strategy of savings provide the various investment options for distinctive users along with balancing risks and earnings mechanically. By combining liquidity mining, NFT, and community governance(DAO), FIX Token endowed with intrinsic value which will support Fixed-Rate Protocol to become one of the most stable and the most fruitful application among HECO.',
  },
  {
    name: 'Cook',
    address: '0x746ED583756026c5340Fdc8026D2EA7E44b93De0',
    abi: OfferingV2,
    start_at: '1617199200',
    is_top: true,
    is_coming: false, // is_coming 为 true 则不请求合约
    currency: {
      address: '0xa71edc38d189767582c38a3145b5873052c3e47a', // 如果是0x0则是ht
      decimal: 18,
      symbol: 'USDT',
    },
    icon: '',
    type: 1,
    isPrivate: true,
    underlying: {
      address: '0x74189862B069e2Be5f7c8E6ff08eA8E1B1948519', // 地址有问题
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
    progress: 1,
    status: 3,
    ratio: '1COOK=0.03USDT', // 兑换比例需要确认
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
    address: '0xFC5405759Fb8dDB3f90c2d3d238ea50eEbE5618B',
    abi: StarterV2,
    start_at: '1617200400',
    is_top: true,
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
      address: '0x74189862B069e2Be5f7c8E6ff08eA8E1B1948519',
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
    progress: 604.61,
    status: 3,
    ratio: '1COOK=0.03USDT',
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
  {
    name: 'ChainSwap',
    address: '0x543A2aE552D993342A92e87AeFc966B69534A798', // 超募合约地址
    abi: StarterV3,
    start_at: '1619092800',
    is_top: true,
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
      address: '0x3B73c1B2ea59835cbfcADade5462b6aB630D9890',
      decimal: 18,
      symbol: 'TOKEN',
      name: 'TOKEN',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '100000',
    pool_info: {
      token_distribution: 'April 22th 2021, 8:00PM SGT',
      min_allocation: '-',
      max_allocation: '-',
      min_swap_level: '30,000 USDT',
    },
    website: 'https://www.chainswap.com',
    white_paper: '-',
    twitter: 'https://twitter.com/chain_swap',
    Telegram_Channel: 'https://t.me/chainswap',
    Github: 'https://github.com/chainswap',
    yuque: '-',
    progress: 3850.51,
    status: 3,
    ratio: '1TOKEN=0.3USDT',
    time: '1619182800',
    timeClose: '1619095500',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '30000000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://www.chainswap.com', // 跳转外链接
    project_introduction: 'Chainswap is the hub for all smart chains.',
  },
  {
    name: 'WAR(Influencer)',
    address: '0x2E9d797e1A0342630938aE28B6A32DA7D04B525B',
    abi: OfferingV2,
    start_at: '1619697600',
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
      address: '0x910651F81a605a6Ef35d05527d24A72fecef8bF0', // 地址有问题
      decimal: 18,
      symbol: 'WAR',
      name: 'WAR',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '120000',
    pool_info: {
      token_distribution: 'April 29th 2021, 8:00PM SGT',
      min_allocation: '0',
      max_allocation: '16 HT',
      min_swap_level: '1,600 HT',
    },
    website: 'https://www.westarter.org',
    white_paper: '-',
    twitter: 'https://twitter.com/westarter_org',
    Telegram_Channel: 'https://t.me/westarter_official',
    Github: 'https://github.com/we-starter',
    yuque: '-',
    progress: 1,
    status: 3,
    ratio: '1WAR=0.0133HT',
    time: '1619701200',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '1600000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://www.westarter.org', // 跳转外链接
    project_introduction:
      'WeStarter is a cross-chain token initial swap platform which based on HECO network. Through the fluency of the product and sufficient industry resources, it carries the requirement of funds and resources for a variety of asset types. With the role of gatekeeper, through the decentralized incentive and governance mechanism of tokens, to achieve the goal of selecting high-quality assets.',
  },
  {
    name: 'WAR',
    address: '0x77968c29755794ABABbD58661E9Ee55A1c900e1F',
    abi: OfferingV2,
    start_at: '1619697600',
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
      address: '0x910651F81a605a6Ef35d05527d24A72fecef8bF0', // 地址有问题
      decimal: 18,
      symbol: 'WAR',
      name: 'WAR',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '120000',
    pool_info: {
      token_distribution: 'April 29th 2021, 8:00PM SGT',
      min_allocation: '0',
      max_allocation: '5.33 HT',
      min_swap_level: '1,600 HT',
    },
    website: 'https://www.westarter.org',
    white_paper: '-',
    twitter: 'https://twitter.com/westarter_org',
    Telegram_Channel: 'https://t.me/westarter_official',
    Github: 'https://github.com/we-starter',
    yuque: '-',
    progress: 1,
    status: 3,
    ratio: '1WAR=0.0133HT', // 兑换比例需要确认
    time: '1619701200',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '1600000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://www.westarter.org', // 跳转外链接
    project_introduction:
      'WeStarter is a cross-chain token initial swap platform which based on HECO network. Through the fluency of the product and sufficient industry resources, it carries the requirement of funds and resources for a variety of asset types. With the role of gatekeeper, through the decentralized incentive and governance mechanism of tokens, to achieve the goal of selecting high-quality assets.',
  },
  {
    name: 'WAR',
    address: '0xC36C08879EfbAdDbEbaF8D1EF878E660476E3905',
    abi: StarterV2,
    start_at: '1619698800',
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
      address: '0x910651F81a605a6Ef35d05527d24A72fecef8bF0', // 地址有问题
      decimal: 18,
      symbol: 'WAR',
      name: 'WAR',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '120000',
    pool_info: {
      token_distribution: 'April 29th 2021, 8:20PM SGT',
      min_allocation: '',
      max_allocation: '',
      min_swap_level: '1,600 HT',
    },
    website: 'https://www.westarter.org',
    white_paper: '-',
    twitter: 'https://twitter.com/westarter_org',
    Telegram_Channel: 'https://t.me/westarter_official',
    Github: 'https://github.com/we-starter',
    yuque: '-',
    progress: 7771.49,
    status: 3,
    ratio: '1WAR=0.0133HT',
    time: '1619701200',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '1600000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://www.westarter.org', // 跳转外链接
    project_introduction:
      'WeStarter is a cross-chain token initial swap platform which based on HECO network. Through the fluency of the product and sufficient industry resources, it carries the requirement of funds and resources for a variety of asset types. With the role of gatekeeper, through the decentralized incentive and governance mechanism of tokens, to achieve the goal of selecting high-quality assets.',
  },
  {
    name: 'BLACK',
    address: '0x60c393C658904B102C12041055fcA36B5C72e038',
    abi: OfferingV2,
    start_at: '1619611200',
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
      address: '0xd714d91A169127e11D8FAb3665d72E8b7ef9Dbe2', // 地址有问题
      decimal: 18,
      symbol: 'BLACK',
      name: 'BLACK',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '600000',
    pool_info: {
      token_distribution: 'April 28th 2021, 8:00PM SGT',
      min_allocation: '0',
      max_allocation: '5.33 HT',
      min_swap_level: '1,600 HT',
    },
    website: 'https://www.blackhole.black',
    white_paper: '-',
    twitter: 'https://twitter.com/BlackHoleBurn',
    Telegram_Channel: 'https://t.me/BlackholeProtocolOfficial',
    Github: 'https://github.com/black-hole-finance',
    yuque: '-',
    progress: 1,
    status: 3,
    ratio: '1BLACK=0.0026HT', // 兑换比例需要确认
    time: '1619701200',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '1600000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://www.blackhole.black', // 跳转外链接
    project_introduction:
      'BlackHole is an approval-free decentralized & cross-chain burning protocol, innovator of perpetual deflationary blockchain ecosystem.',
  },
  {
    name: 'BLACK',
    address: '0xB616eBb93262B51143962e6826Ec0552915A13c2',
    abi: StarterV2,
    start_at: '1619611200',
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
      address: ' 0xd714d91A169127e11D8FAb3665d72E8b7ef9Dbe2', // 地址有问题
      decimal: 18,
      symbol: 'BLACK',
      name: 'BLACK',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '200000',
    pool_info: {
      token_distribution: 'April 28th 2021, 8:00PM SGT',
      min_allocation: '',
      max_allocation: '',
      min_swap_level: '540 HT',
    },
    website: 'https://www.blackhole.black',
    white_paper: '-',
    twitter: 'https://twitter.com/BlackHoleBurn',
    Telegram_Channel: 'https://t.me/BlackholeProtocolOfficial',
    Github: 'https://github.com/black-hole-finance',
    yuque: '-',
    progress: 13082.02,
    status: 3,
    ratio: '1BLACK=0.0027HT',
    time: '1619701200',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '540000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://www.blackhole.black', // 跳转外链接
    project_introduction:
      'BlackHole is an approval-free decentralized & cross-chain burning protocol, innovator of perpetual deflationary blockchain ecosystem.',
  },
  {
    name: 'Lever',
    address: '0xa09dcb3b2066da2f17e2a1657c347a34038b8946',
    abi: StarterV3,
    start_at: '1620054000',
    is_top: true,
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
      address: ' 0xbc194e6f748a222754C3E8b9946922c09E7d4e91', // 地址有问题
      decimal: 18,
      symbol: 'LEV',
      name: 'LEV',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '60000',
    pool_info: {
      token_distribution: 'May 3th 2021, 11:00PM SGT',
      min_allocation: '',
      max_allocation: '',
      min_swap_level: '30,000 USDT',
    },
    website: 'https://www.lever.network/',
    white_paper: '-',
    twitter: 'https://twitter.com/LeverNetwork',
    Telegram_Channel: 'https://t.me/LeverNetwork',
    Github: 'https://github.com/levernetwork',
    yuque: '-',
    progress: 6114.57,
    status: 3,
    ratio: '1LEV=0.5USDT',
    time: '1620486000',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '30000000000000000000000',
    totalPurchasedUnderlying: '366874480000000000000000000',
    totalPurchasedCurrency: '183437240275702999999549440',
    is_flash: false,
    link_url: 'https://www.lever.network', // 跳转外链接
    project_introduction:
      'The #1 AMM-Based Decentralized Margin Trading Platform.',
  },
  {
    name: 'YFX.COM',
    address: '0xD795d35875089514818AF643558d6f354C8803A7',
    abi: OfferingV2,
    start_at: '1620295200',
    is_top: true,
    is_coming: false,
    currency: {
      address: '0x0', // 如果是0x0则是ht
      decimal: 18,
      symbol: 'HT',
    },
    icon: '',
    type: 1,
    isPrivate: false,
    underlying: {
      address: '0xF55a93b613D172b86c2Ba3981a849DaE2aeCDE2f', // 地址有问题
      decimal: 18,
      symbol: 'YFX',
      name: 'YFX',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '62500',
    pool_info: {
      token_distribution: 'May 6th 2021, 6:00PM SGT',
      min_allocation: '0',
      max_allocation: '8 HT',
      min_swap_level: '2,000 HT',
    },
    website: 'https://www.yfx.com/',
    white_paper: '-',
    twitter: 'https://twitter.com/YFX_Defi',
    Telegram_Channel: 'https://t.me/YFX_EN',
    Github: '-',
    yuque: '-',
    progress: 1,
    status: 3,
    ratio: '1YFX=0.032HT',
    defaultRatio: '31250000000000000000',
    time: '1620554400',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '2000000000000000000000',
    totalPurchasedUnderlying: '62498920687500000000000',
    totalPurchasedCurrency: '1999965462000000000000',
    is_flash: false,
    link_url: 'https://www.yfx.com/', // 跳转外链接
    project_introduction: 'Decentralized Futures Trading Platform YFX.COM',
  },
  {
    name: 'YFX.COM',
    address: '0x4c1A48cB2e3AEEf598f3a461160ec24056e52911',
    abi: StarterV3,
    start_at: '1620296400',
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
      address: '0xF55a93b613D172b86c2Ba3981a849DaE2aeCDE2f', // 地址有问题
      decimal: 18,
      symbol: 'YFX',
      name: 'YFX',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '62500',
    pool_info: {
      token_distribution: 'May 6th 2021, 6:20PM SGT',
      min_allocation: '',
      max_allocation: '-',
      min_swap_level: '2,000 HT',
    },
    website: 'https://www.yfx.com/',
    white_paper: '-',
    twitter: 'https://twitter.com/YFX_Defi',
    Telegram_Channel: 'https://t.me/YFX_EN',
    Github: '-',
    yuque: '-',
    progress: 2764.43,
    status: 3,
    ratio: '1YFX=0.032HT',
    time: '1620554400',
    defaultRatio: '31250000000000000000',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '2000000000000000000000',
    totalPurchasedUnderlying: '172777089000000000000000000',
    totalPurchasedCurrency: '5528866854336999999909888',
    is_flash: false,
    link_url: 'https://www.yfx.com/', // 跳转外链接
    project_introduction: 'Decentralized Futures Trading Platform YFX.COM',
  },
  {
    name: 'O3 Swap',
    address: '0x01', // 超募合约地址
    abi: StarterV3,
    start_at: '1620822000', //1620820800
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
      address: '0xeCBF96Dd4fBfD666A849252EC022Bf311A4cA002',
      decimal: 18,
      symbol: 'O3',
      name: 'O3',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '20000',
    pool_info: {
      token_distribution: 'May 14th 2021, 10:15PM SGT',
      min_allocation: '',
      max_allocation: '-',
      min_swap_level: '20,000 USDT',
    },
    website: 'https://o3swap.com/',
    white_paper: '-',
    twitter: 'https://twitter.com/O3_Labs',
    Telegram_Channel: 'https://t.me/O3LabsOfficial',
    Github: 'https://github.com/O3Labs',
    yuque: '-',
    progress: 0,
    status: 0,
    ratio: '1O3=1USDT',
    time: '1621001700',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '20000000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://o3swap.com/', // 跳转外链接
    project_introduction:
      'O3 Swap, a proprietary cross-chain aggregation protocol',
  },
  {
    name: 'O3 Swap',
    address: '0x02', // 超募合约地址
    abi: OfferingV2,
    start_at: '1620820800',
    is_top: true,
    is_coming: true,
    currency: {
      address: '0xa71edc38d189767582c38a3145b5873052c3e47a', // 如果是0x0则是ht
      decimal: 18,
      symbol: 'USDT',
    },
    icon: '',
    type: 1,
    isPrivate: false,
    underlying: {
      address: '0xeCBF96Dd4fBfD666A849252EC022Bf311A4cA002',
      decimal: 18,
      symbol: 'O3',
      name: 'O3',
      total_supply: '100,000,000',
      holders: '-',
      transfers: '-',
    },
    amount: '30000',
    pool_info: {
      token_distribution: 'May 14th 2021, 10:15PM SGT',
      min_allocation: '0',
      max_allocation: '100 USDT',
      min_swap_level: '30,000 USDT',
    },
    website: 'https://o3swap.com/',
    white_paper: '-',
    twitter: 'https://twitter.com/O3_Labs',
    Telegram_Channel: 'https://t.me/O3LabsOfficial',
    Github: 'https://github.com/O3Labs',
    yuque: '-',
    progress: 0,
    status: 0,
    ratio: '1O3=1USDT',
    time: '1621001700',
    purchasedCurrencyOf: 0,
    totalPurchasedAmount: '30000000000000000000000',
    totalPurchasedUnderlying: '0',
    totalPurchasedCurrency: '0',
    is_flash: false,
    link_url: 'https://o3swap.com/', // 跳转外链接
    project_introduction:
      'O3 Swap, a proprietary cross-chain aggregation protocol',
  },
]
