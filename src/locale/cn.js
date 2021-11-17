import AdjustmentTipsPopup from "../components/AdjustmentTipsPopup";

const zh_CN = {
  fundraisingPool: '兑换池',
  farm: '农场',
  bridge: '迁移',
  mortgage: '抵押挖矿',
  liquidityPool: '流动性挖矿',
  crowdfund: '众筹池',
  projectApplication: '项目申请',
  linkWallet: '链接钱包',
  coinCollar: '累计币龄',
  transactionSuccess: '交易成功',
  transactionFail: '交易失败',
  noNetwork: '暂无网络',
  cannotSubscribe: '当前无法申购',
  bannerTitle: '流动性价值发现平台',
  bannerContent1:
    'WeStarter是跨链代币初始兑换平台，起步于HECO网络，通过资产跨链桥和多链部署为ETH、HECO、BSC等多条网络上的项目资产进行初始兑换。',
  bannerContent2:
    'WeStarter通过流畅的产品与充足的行业资源，承载多种类型资产的资源需求。以守门人的角色职责，通过代币的去中心化激励与治理机制，实现甄选优质资产的目标。',
  money: '输入投资金额',
  FundraisingRecord: '兑换记录',
  invest: '抵押',
  num: '数量',
  winningRate: '预计中签率',
  winningAmount: '预计中签量',
  unsettlement: '未结算',
  obtain: '获取',
  comingSoon1: '即将上线',
  recruit: '募集中',
  recruitOver: '等待中',
  settlement: '结算中',
  completed: '已完成',
  settled: '已结算',
  waitingSettlement: '等待结算',
  totalRaised: '可兑换总量',
  LBPSupply: 'LBP 供给量',
  totalMortgage: '抵押总量',
  myMortgage: '我的抵押',
  balance: '余额',
  income: '收益',
  appoveStake: '确认抵押', //翻译中文
  claim: '领取奖励', //翻译中文
  unstakeClaim: '解除质押&领取奖励', //翻译中文
  recruitMaterials: '募集申请资料',
  projectTitle: '项目名',
  role: '您在项目中的职位/角色',
  email: '邮箱',
  telegramID: '您的TelegramID',
  openSubscription: '您想什么时间开启认购',
  raiseMoney: '您希望筹集多少资金',
  raiseCoin: '您理想的募集币种',
  subscriptionRatio: '您设定的认购比例',
  projectInstruction: '项目说明',
  introduction: '简介、网址、官方账号URL',
  projectModel: '项目的代币经济模型',
  modelTip: '投融资进度、代币分配与分发情况、代币使用场景概述',
  shareFile: '您想与我们分享的其他文件',
  uploadFile: '点击或将文件拖拽到这里上传',
  support: '支持扩展名：',
  tip:
    '提示：参与募集的项目需提交相关的安全证明资料（如代码审计、合规性证明等，可在“其他资料”栏添加）',
  submit: '提交',
  errorTip: '请输入内容，该内容不能为空',
  myJoinPool: '我参与的兑换池',
  noData: '暂无数据',
  guide: '使用教程',
  bannerTitle1: '更早一步发现价值',
  certik: 'Certik审计报告',
  partner: '合作伙伴',
  productManual: '产品简介',
  tutorial: '认购教程',
  poolsDetailText1: '可兑换数量',
  poolsDetailText2: '兑换进度',
  poolsDetailText3: '进入兑换池',
  poolsDetailText4: '在HECO上查看',
  poolsDetailText5: '领取Token',
  poolsDetailText6: '兑换池详情',
  poolsDetailText7: '项目简介',
  poolsDetailText8: '兑换池信息',
  poolsDetailText9: 'Token分配时间',
  poolsDetailText10: '单个地址额度',
  poolsDetailText11: '总兑换上限',
  poolsDetailText12: '资产池种类 ',
  poolsDetailText13: 'Token名称',
  poolsDetailText14: 'Token合约地址',
  poolsDetailText15: '总发行数量',
  poolsDetailText16: '完成时间',
  poolsDetailText17: '申请总人数',
  poolsDetailText18: '申请中签率',
  poolsDetailText19: '超募比例',
  poolsDetailText20: '参与资金规模',
  poolsDetailText21: '定向',
  poolsDetailText22:
    '该项目代币尚未正式发行,可能存在不确定性风险, 请知晓. WeStarter 不承担任何投资损失责任。',
  poolsIndexText1: '兑换比例',
  poolsIndexText2: '当前进度',
  poolsIndexText3: '兑换',
  poolsIndexText4: 'TOKEN兑换池',
  stakingSuccessText1: '恭喜您抵押成功!',
  stakingSuccessText2: '100.222345 GLF',
  stakingSuccessText3: 'Ok',
  accountText1: 'by',
  accountText2: 'Redeemed Jan 15, 2020',
  accountText3: 'Reward points',
  accountText4: 'GLF Votes',
  accountText5: 'Token ID',
  accountText6: 'METAMASK',
  accountText7: 'WalletConnect',
  accountText8: 'Connect to your Metamask Wallet',
  accountText9: 'Connect to your WalletConnect',
  auctionText1: 'Purchased',
  accountText2: 'GLF',
  bannerText1: 'Live on',
  exhibitionHallText1: 'Become a sponsor',
  exhibitionHallText2:
    'You can sponsor an artist to publish his artwork here on Exhibition hall',
  exhibitionHallText3: 'Join a Contest',
  exhibitionHallText4:
    "Independent digital art gallery 'Aadvark' statrs a new digital artwork contest",
  exhibitionHallText5: 'NFT for free!',
  exhibitionHallText6:
    'Publish your artwork this weekend and get NFT token for it - for free!',
  modalsText1: 'You Must Change Networks',
  modalsText2:
    "We've detected that you need to switch your wallet's network from local to mainnet network for this Dapp.",
  modalsText3:
    '*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.',
  modalsText4: 'Switch Wallet',
  modalsText5: 'Dismiss',
  modalsText6: 'You have successfully claimed',
  modalsText7: 'Claim Reward',
  modalsText8: 'Your reward pool:',
  modalsText9: 'Current staking time:',
  modalsText10: 'hours',
  modalsText11:
    'You will get { data1 } GLF { data2 }% of your GLF will be burned) if you will claim your reward now',
  modalsText12:
    'If you claim GLF from the rewards pool before a10-day staking period is over, part of your reward will be subject to burn. The burn rate is as follows',
  modalsText13: 'I understand, claim my reward anyway',
  modalsText14: '取消',
  modalsText15: '确认',
  modalsText16: 'Please connect wallet to Ethereum Main Network',
  modalsText17: 'Create an Artwork Preview',
  modalsText18: 'Apply',
  modalsText19: 'Transaction failed, please try again',
  modalsText20: 'Close',
  modalsText21: 'Login and Authorize Your wallet',
  modalsText22:
    'This dapp requires access to your wallet,please login and authorize access to your MetaMask accounts to continue',
  modalsText23: 'Dismiss',
  modalsText24: 'Propose a New Figure',
  modalsText25: 'Note: no more than 200 caharcters',
  modalsText26:
    'Please describe the person and attach his linkedin or social media links where artists can find photos.',
  modalsText27:
    'You need to stake <b>50 GLF tokens</b> to proposea figure and tokens will be staked for 4 days.',
  modalsText28: 'You can propose more than one figure',
  modalsText29: 'Submit',
  modalsText30: 'Token ID:',
  modalsText31: 'Name:',
  modalsText32: 'Details:',
  modalsText33: 'OK',
  modalsText34: 'Redeem an Artwork',
  modalsText35: 'Name:',
  modalsText36: 'Details:',
  modalsText37: 'Reward Points will be spent to redeem this artwork. You have',
  modalsText38: 'Reward Points now.',
  modalsText39: 'Cancel',
  modalsText40: 'Redeem',
  modalsText41: 'You have successfully staked',
  modalsText42: 'OK',
  modalsText43: 'Deposit LP Token',
  modalsText44: 'SLP Available',
  modalsText45: 'Max',
  modalsText46: 'Cancel',
  modalsText47: 'Confirm',
  modalsText48: 'Congratulations!',
  modalsText49: 'OK',
  modalsText50: 'Transation rejected',
  modalsText51: 'Confirm',
  modalsText52: 'Your tokens were successfully unlocked',
  modalsText53: 'OK',
  modalsText54: 'Unstake',
  modalsText55: 'Max',
  modalsText56: 'Balance:',
  modalsText57: 'Cancel',
  modalsText58: 'Confirm',
  modalsText59: 'ACCOUNT',
  modalsText60: 'Copy Address',
  modalsText61: 'Switch Wallet',
  modalsText62: 'Disconnect Wallet',
  modalsText63: 'Withdraw',
  modalsText64: 'Deposited',
  modalsText65: 'Your Unclaimed WAR',
  modalsText66: 'Unstake &Claim',
  modalsText67: '授权失败, 请重新尝试授权',
  modalsText68: '参与成功, 请返回页面查看',
  poolText1: 'by',
  poolText2: 'Token ID:',
  poolText3: 'Reward points',
  poolText4: 'Stake',
  poolText5: 'Earn Reward points',
  poolText6: 'to redeem NFTs',
  poolText7: 'Staked',
  poolText8: 'Reward Points',
  poolText9: 'NFTs redeemed',
  poolText10: 'NFTs left',
  poolText11: 'Stake',
  poolText12: 'Earn GLF',
  poolText13: 'Staked',
  poolText14: 'Pool total',
  poolText15: 'Time left',
  poolText16: 'Join',
  poolText17: 'Pool',
  poolText18: '余额:',
  poolText19: 'Max',
  poolText20: 'Cancel',
  poolText21: 'Approve',
  poolText22: 'Confirm',
  poolText23: '最大申购额度:',
  poolTextS128: '切换到 HECO',
  poolTextS137: '切换到 Matic',
  poolTextS56: '切换到 BSC',
  poolText27: '切换成功',
  workShopText1: 'Time in',
  workShopText2: 'Status',
  workShopText3: 'by',
  workShopText4: '#vangogh',
  workShopText5: 'Vote',
  workShopText6: 'GLF Votes',
  workShopText7: 'Vote',
  backbutton: 'Back',
  transaction1: 'Waiting For Confirmation',
  transaction2: 'Confirm this transaction in your wallet',
  noJoinPool: '你还没有参与的项目',
  comingSoon: '即将开放',
  htPublic: 'HT 已发布',
  detailTitlePrivate: '白名单兑换池',
  detailTitlePublic: '公开兑换池',
  logoTitle1: 'MATTER 白名单兑换池',
  logoTitle2: 'dFuture 公开兑换池',
  logoTitle3: 'FIX 白名单兑换池',
  logoTitle4: 'FIX 公开兑换池',
  logoTitle5: 'DORA 白名单兑换池',
  logoTitle6: 'COOK 白名单兑换池',
  logoTitle7: 'COOK 公开兑换池',
  aboutProject:
    'Westarter是一个连接加密货币创新者和投资者的对接平台，任何创新者都可以无需许可的使用标准化的界面来发起和管理流动性拍卖。',
  willStart: '将开始于',
  accessType: '进入方式',
  private: '白名单兑换池',
  public: '无限制兑换池',
  svip: 'SVIP',
  svipTips: '该池仅面向 SVIP 开放',
  privateTips: '这是一个私有池，只有获得白名单才能兑换',
  publicTips: '这是一个公有池，按照资金比例配售',
  publicTips1: '这是一个公有池',
  publicTips2:
    'LBP 的价格由市场真实交易情况确定, 具有高度投机性, 盲目买入卖出可能会造成不必要的损失, 请慎重操作',
  cannotProject: '对不起，你不在白名单内，无法参与项目',
  whiteList: '白名单',
  supportWallet: '支持钱包',
  countdown: '距离募集开始还有',
  myQuota: '我的额度',
  alreadySubscribed: '已申购过',
  notInWhitelist: '无申购额度',
  undergoingOver: '申购结束，请等待结算',
  flashPool: '“24小时”池',
  withdrawTip: '这是兑换池合约地址，请不要向合约地址直接转币',
  fixAboutProject:
    'Fixed-Rate Protocol （官网：fixed.finance）是基于HECO开发的首个智能化稳定保底产品投资协议。实时链上数据监测+产品发掘智能聚合策略，平衡风险的同时挖掘更高收益，为不同的用户群体提供了固定收益和浮动收益相对稳定的产品选择。FIX结合挖矿、NFT、社区治理DAO等多种运营模式，充分发挥平台币的价值，打造HECO生态最强、最稳定的固定收益应用.',
  doraAboutProjectP1:
    'Dora Factory （官网：DoraFactory.org）是基于波卡的 DAO 即服务基础设施，基于 Substrate 的开放、可编程的链上治理协议平台，为新一代去中心化组织和开发者提供二次方投票、曲线拍卖、Bounty 激励、跨链资产管理等可插拔的治理功能。同时，开发者可以向这个 DAO 即服务平台提交新的治理模块，并获得持续的激励。',
  doraAboutProjectP2: ' ',
  cookAboutProject:
    '库克协议是一个基于区块链搭建的，无需信任的、透明的和具有良好激励机制的财富管理服务市场协议。该协议将为投资者提供多种资产管理服务选择，并且为资产管理机构提供资金和多元化投资工具。',
  chainswapAboutProject1:
    'ChainSwap is a cross-chain asset bridge & application hub for smart chains. ChainSwap allows projects to seamlessly bridge between ETH, BSC and HECO. In the future ChainSwap will be integrating chains and provide full cross-chain solutions between BTC, DOT, SOL and more.',
  chainswapAboutProject2:
    'ChainSwap has closed a $3M strategic funding round with participation from Alameda Research, OK Block Dream Fund (OKEx), NGC Ventures, Spark Digital Capital, Metaconstant Ventures, CMS Holdings, Rarestone Captial, Monday Capital, Continue Capital, SRC Capital, DAO Ventures, Mask network, Particle and Power Law Capital.',
  chainswapAboutProject3: 'Token distribution:',
  chainswapAboutProject4:
    'TOKEN is the token of the ChainSwap platform.The total amount is 100M, 2% of the total amount is 100% unlock token, and will be distributed to public sale and airdrop.Public sale will be held as IDO on 5 different platforms with a total amount of 1M.Airdrop that is given to users is also 1M.',
  blackAboutProject1:
    'BlackHole is an approval-free decentralized & cross-chain burning protocol, innovator of perpetual deflationary blockchain ecosystem.',
  westarterAboutProject1:
    'WeStarter是跨链代币初始兑换平台，起步于HECO网络，通过资产跨链桥和多链部署为ETH、HECO、BSC等多条网络上的项目资产进行初始兑换。',
  leverAboutProject1:
    'Lever 旨在打造 DeFi 世界中首个基于 AMM （自动做市商模式）的杠杆交易经纪平台，支持用户在 DeFi 中进行现货等资产的杠杆交易，以提高 DeFi 的资产使用效率。可以让用户一气呵成地进行抵押、借贷、杠杆交易，做多或做空任何标的资产。',
  yfxAboutProject1:
    'YFX.COM是一个基于以太坊、波场、币安智能链、火币生态链、OKEx公链、波卡的跨链去中心化的永续合约交易平台，提供高达100倍杠杆交易BTC、ETH等资产。平台采用领先的QIC-AMM做市商池交易方式，为用户提供极高的流动性、极低的交易滑点。',
  O3AboutProject1:
    'O3 Swap——跨链聚合协议主要通过两种方式实现更有效的交易路径。第一种是聚合流动性——聚合各大主流生态的去中心化交易所的流动性，寻找到最优价格进行交易。 第二种是跨链资产兑换——引用跨链协议让DeFi用户实现主流资产的一键跨链兑换。',
  corraAboutProject1:
    'Corra（官网：Corra.finance）是一个使用NFT技术将线上数字化内容变现的平台。所有人都无需支付任何费用即可在Corra平台上创建NFT，这意味着无论您的年龄，背景，收入水平如何，您都将有机会从Facebook，Instagram，Twitter，YouTube和其他社交媒体平台上通过您发布的内容变现。这包括Facebook帖子，推文，Instagram照片，Memes，歌曲，TikTok视频或几乎任何在线上发布的数字化内容。无论您是KOL，明星，公众人物，YouTuber，Instagram模特，学生或是任何人，您都有平等的机会将自己线上发布的数字化内容变现。您可以与朋友，粉丝，关注者和社区进行分享，这样他们就可以在Corra平台上竞拍并拥有一部分您的IP，从而帮助推广您的品牌内容，提高您的品牌价值。此外，Corra还将推出CORA代币，将用于提高您的NFT点赞支持率。您的NFT获得的点赞支持越多，作品在Corra拍卖页面上的排名就越靠前，知名度也就越高----这与Google搜索结果中的付费营销非常相似，可以提高您作品的知名度从而增加作品竞拍成功的机率。所有人都可以使用CORA代币对平台作品进行点赞支持，您也可以通过与朋友和粉丝分享来获得更多支持，提高曝光率。您可以使用法定货币或加密货币从分散式和集中式加密交易所中获取CORA代币。',
  cowAboutProject1:
    'CoinWind是一个DeFi生态智能挖矿金融平台，通过合约自动将质押的币种进行撮合配对，配合对冲无常损失策略，将用户收益最大化，有效解决了用户单币种挖矿收益低、LP挖矿无常损失大等风险问题。',
  cowAboutProject2:
    'CoinWind旨在打造一个DeFi数字资产银行，推出高收益与安全可靠并存的产品，将用户存入的不同代币汇集到不同的池中，然后根据策略调动某代币池的资金参与不同的流动性挖矿，从而为用户实现更高的收益。CoinWind产品会通过组合策略有效降低流动性挖矿中的无常损失。',
  paulAboutProject1:
    '我们基于当前的跨链网络设计了基础架构，该架构基于全球顶级组织在高频自动交易中针对多个交易场景中的单个基准的报价系统引入和修改。 质押资产报价和套利验证用于构建实时报价验证机制。 在极端情况下，可以通过统计假设检验更平滑地生成价格曲线。',
  momatAboutProject1:
    'Moma协议发起于2020年12月，是一种满足用户对借贷市场的流动性、扩展性、投机性需求的解决方案。',
  momatAboutProject2:
    'Moma协议通过独创的智能合约工厂，对借贷市场进行生产、管理，加速和聚合，形成了一个可以对借贷流动性与市场多样性进行无限扩展的生态系统。',
  momatAboutProject3:
    'Moma协议的四大核心组件，分别为： Factory、Launch Pool、 Lending Pool以及Aggregator。其中，Factory是一个智能合约工厂，它可以对Launch Pool和Lending Pool进行生产和管理。Launch Pool是一种可自定义的用于社区化挖矿的“Pre”- Lending Pool，通过Launch Pool可以进行任何项目的社区化代币分配。Lending Pool是一个可自定义的超额抵押借贷市场池，它可以支持任何市场的Lend和Borrow。Aggregator是一个基于Pool和市场数据的计算与分析器，它可以帮助用户解决存、借以及社区化挖矿的个性化需求。',
  momatAboutProject4:
    'Moma协议采用了委员会喂价机制与去中心化喂价机制相结合的独特预言机系统。',
  momatAboutProject5:
    '在风险管理方面，Moma协议提供了独创的解决方案，包括：加密资产评级数据库、吹哨人、储备金池、管理质押池。',
  xNFTAboutProject1:
    'xNFT Protocol，致力于实现NFT的快速发行与自动化交易协议，相关的生态产品还包括：DigiCenter数字藏品钱包、xNFT Oracle 价格预言机、聚合市场 NFTMarketcap、收益聚合器 NFTBank、链上加密艺术画廊NFTPark等。',
  xNFTAboutProject2:
    'xNFT Protocol 已获得 Huobi Ventures、LD Capital、Fundamental Labs、Gateio.labs、Continue Capital、隆领资本、Dealean Capital、Signum、安比实验室、Mars Blockchain、LinkVC、Primitive Ventures、DU Capital、Redline Capital、DragonRoark Fund、499Block、Crasolum、7’O Clock Foundation、YBB foundation、LatticeX Foundation等全球多家知名机构投资。',
  xNFTAboutProject3:
    'Primitive Ventures 创始合伙人、全球知名区块链投资人 Dovey Wan 为 xNFT Protocol 战略顾问。',
  plutAboutProject1:
    'DePlutus协议——新一代DeFi资产管理协议，构建链上金融基础设施，开启属于每个人的链上基金时代。',
  phmAboutProject1:
    'Phantom 是一个支持合成资产创建及NFT 发行的跨链DeFi 协议，依托智能合约让用户可以使用主流的加密货币、NFT 作为抵押品，然后以去中心化的方式创建合成资产Phant（也叫做pAssets) ，可合成的资产包含加密货币衍生品以及大宗商品，股票，债券等传统金融产品。让更多人可以低门槛的形式参与到多元化的品类投资中。',
  phmAboutProject2:
    '合成资产在传统金融行业里，是专门为大投资者设计的一种工具。合成资产的优势在于能够模拟真实资产价格走向，投资者不用承受资产转移的成本和风险，就可以在一个平台方便的参与其他品类的投资。而 Phantom 利用 DeFi 技术，让广大交易者可以生成或投资 pAsset，以低门槛的方式参与到 NFT、加密资产、预测、股票等市场的投资中。',
  hctAboutProject1:
    'HurricaneSwap是一个建立在Avalanche上的跨链DEX。通过独创的LP跨链桥机制（Roke Protocol），HurricaneSwap旨在提供一种更有效的、更先进的跨链交易机制，让用户无障碍地跨链交换资产，并为他们提供高效且低费用的跨链交易体验。',
  hctAboutProject2:
    'HurricaneSwap创新性地提出了一种流动性跨链方式。LP跨链，LP在源链上提供交易对的流动性，通过协议将流动性映射到HurricaneSwap，我们称该协议为 "Roke Protocol"。',
  hctAboutProject3:
    'HurricaneStation是资产跨链的第一站。根据HurricaneSwap中支持的跨链资产（aToken）类型，Station将部署相应的基础链上。流动性供应者可以将其资产锁定在Station中，生成LP代币，并通过Roke Protocol实现流动性跨链，为HurricaneSwap提供流动性并获取收益。',
  hctAboutProject4:
    'HurricaneAlliance旨在通过 "单币跨链桥 "和套利策略来缩小HurricaneSwap的价格差距，改善用户体验，并为套利者带来可观利润。将获取套利的权利与链上治理及节点绑定，还能促进Alliance节点自发地保护HurricaneSwap利益。',
  related_title1: '累计金额',
  related_title2: '参与地址总数',
  related_title3: '总成立的池子数',
  warLBP1: '参与 {LBPType} LBP',
  warLBP2: '购买',
  warLBP3: '我的余额: ',
  warLBP4: '交易设置',
  warLBP5: '最大滑点',
  warLBP6: '成功',
  warLBP7: '请到 MDEX 上进行交易',
  warLBP8: '{token} 流动性挖矿奖励现已开启, 组 ',
  warLBP9: '{token} LPT(MDEX LP Token)',
  warLBP10: '前去 “农场” 抵押享 WAR 奖励',
  farm1: '农场',
  farm2: '抵押你的 LPT, 来获得更多的收益',
  farm3: '抵押',
  farm4: '可用',
  farm5: '赎回 & 领取奖励',
  farm6: '{coin} 奖励',
  farm7: '领取奖励',
  farm8: '倒计时',
  farm10: '收益',
  farm11: '总抵押额',
  farm12: '我的抵押',
  farm13: '获取',
  DayM: '天',
  HourM: '时',
  MinM: '分',
  SecondM: '秒',
  farm14: '永久有效',
  farm15: '请输入抵押数量',
  farm16: '领取奖励',
  farm17: '购买',
  farm18: '当前价',
  farm19: 'WAR合约地址:',
  farm20: '授权',
  farm21: '复投',
  farm22: 'Compound {icon} Earned',
  farm23: '每日进行复投',
  farm24: 'SVIP 用户可以参加指定的 IWO 特权池',
  farm25: '每次最低抵押数量 {num} {icon}',
  farm26: '每次最高抵押数量 {num} {icon}',
  buyPopup1: '滑点',
  buyPopup2: '价格影响',
  buyPopup3: '最低收到',
  buyPopup4: '手续费',
  buyPopup5: '该服务由 MDEX 提供支持',
  buyPopup6: '确认兑换',
  buyPopup7: '预计收到',
  buyPopup8: '交易成功',
  netWork1: '选择网络',
  netWork2: '选择钱包',
  netWork3: '切换网络',
  bridge1: '跨链到',
  bridge2: '目标地址',
  bridge300: '注意：该迁移不可逆，',
  bridge301: '将会彻底转化成 RAW(Matic)',
  bridge4: 'Powered by BlackHole & ChainSwap',
  bridge5: '转移历史',
  bridge6: '资产',
  bridge7: 'From',
  bridge8: 'To',
  bridge9: '数量',
  bridge10: '提取',
  waitingText: '这个过程可能需要一些时间 ... ',
  waitingText1: '这个过程可能需要一些时间',
  amount: '请输入数量',
  switchTo: '切换到',
  withdraw: '提取',
  add: '添加',
  to: '到',
  applicationText1: '无许可，社区自治 IWO',
  applicationText2: '发起提案',
  applicationText3: '进行中',
  applicationText4: '已结束',
  applicationText5: '当前没有任何提案',
  applicationText6: 'Project',
  applicationText7: 'Total Raise',
  applicationText8: 'Vote',
  applicationText9: 'Closed',
  applicationText10: 'Success',
  applicationText11: 'Failed',
  applicationText12: 'Project Information',
  applicationText13:
    'To learn more about APENFT, the chefs advise you to visit their official communication channels:',
  applicationText14:
    'The Syrup Pool: Stake CAKE tokens to earn APENFT’s $NFT tokens!',
  applicationText15: 'Proposals',

  applicationText26 : '建议上传 SVG 格式的图片，PNG 等其他格式建议分辨率为 400 * 400',
  applicationText27 : '发起投票提案时，要抵押此金额的{percentage}',
  applicationText28: '请仔细核对输入的信息，创建成功后会铸造 HECO-721 NFT Token，信息不可更改。如需更改需要创建新的 Project NFT Card',
  applicationText29: '创建新的',
  applicationText30: '什么是 NFT Card？',
  applicationText31: '当前价',
  applicationText32: '项目申请募资',
  applicationText33: '建议抵押金额',
  applicationText34: '抵押的 WAR 价值不能小于总募资金额，否则影响后续的募资计划',
  applicationText35: "从投票开始计时，周期为 {day1} 天，资金将在投票结束后 {day2} 天后释放",
  applicationText36: '规则',
  applicationText37: '如果提案在周期内，等于或者超过项目 IWO 总额度的 50%，则为成功，投票方和项目发起人（提案人）可以在 5 天后 Claim 回来自己的 WAR',
  applicationText38: '如果提案在周期内，低于项目方 IWO 总额度的 50%，则为失败。提案抵押金额的 50% 将空投给投票方，余下 50% 抵押金额将燃烧。投票方可以在 5 天后 Claim 回来自己的 WAR。',

  adjustmentTips1: '亲爱的用户：',
  adjustmentTips2: 'WeStarter近期做出一系列运营调整，现将限制以下国家IP访问：',
  adjustmentTips3: '日本、古巴、伊朗、中国内地、中国香港、中国澳门、朝鲜、苏丹、叙利亚、美利坚合众国及其海外领地（美属萨摩亚、关岛、北马里亚纳群岛、波多黎各和美属维京群岛）、加拿大、新加坡。',
  adjustmentTips4: '感谢您对WeStarter的支持！',
  adjustmentTips5: '我已确认不属于以上地区'
}
export default zh_CN
