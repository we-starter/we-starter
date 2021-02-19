export default [
    {
        name: 'USDT>LHB',
        address: '0x845932023c0ec23f905e8e34f46ef8b684297310',
        start_at: new Date('2020/2/19 23:10').getTime() / 1000,
        is_top: true,
        currency: {
            address: '0xa71edc38d189767582c38a3145b5873052c3e47a',
            symbol: 'USDT'
        },
        underlying: {
            address: '0x8F67854497218043E1f72908FFE38D0Ed7F24721',
            symbol: 'LHB',
            name: 'LendHub',
            total_supply: '1000000000',
            holders: '1000000000',
            transfers: ''
        },
        amount: '10000',
        pool_info: {
            token_distribution: 'token_distribution',
            min_allocation: 'min_allocation',
            max_allocation: 'max_allocation',
            min_swap_level: 'min_swap_level',
        },
        website: 'https://www.baidu.com',
        white_paper: 'https://www.baidu.com',
        twitter: 'https://twitter.com/',
    }
]