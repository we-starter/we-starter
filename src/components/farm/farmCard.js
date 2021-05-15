import React, { useContext, useEffect, useState } from 'react'
import cs from 'classnames'
import { FormattedMessage, injectIntl } from 'react-intl'
import BigNumber from 'bignumber.js'
import { HANDLE_WALLET_MODAL } from '../../const'
import { mainContext } from '../../reducer'
import { formatAmount } from '../../utils/format'
import { useAPR, useMdxARP } from '../../pages/pools/Hooks'
import WARHT_Small from '../../assets/icon/farm/WAR HT_small@2x.png'
import { useBalance } from '../../pages/Hooks'

const FarmCard = (props) => {
  const { dispatch, state } = useContext(mainContext)
  const { pools } = props
  const farmPools = pools
  const { balance } = useBalance(farmPools && farmPools.MLP)
  const [balanceProportion, setBalanceProportion] = useState(0)

  const apr = useAPR(
    farmPools.address,
    farmPools.abi,
    farmPools.MLP,
    farmPools.rewards1Address
  )
  const mdexApr = useMdxARP(
    farmPools.address,
    farmPools.abi,
    farmPools.MLP,
    farmPools.rewards1Address
  )
  const [aprPercentage, setPercentage] = useState('-')
  useEffect(() => {
    console.log('apr', apr)
    console.log('mdexApr', mdexApr)
    if (!isNaN(apr) && apr > 0 && mdexApr > 0) {
      setPercentage((apr * 100 + mdexApr * 100).toFixed(2))
    }
  }, [apr, mdexApr])

  useEffect(() => {
    if (farmPools && farmPools.balanceOf && farmPools.totalSupply) {
      setBalanceProportion(
        new BigNumber(farmPools.balanceOf)
          .dividedBy(new BigNumber(formatAmount(farmPools.totalSupply)))
          .multipliedBy(new BigNumber(100))
          .toNumber()
          .toFixed(2) * 1
      )
    } else {
      setBalanceProportion(0)
    }
  }, [farmPools, farmPools.balanceOf, farmPools.totalSupply])

  return (
    <div className='farm_index_card'>
      <h3 className='farm_index_card_title'>{farmPools && farmPools.name}</h3>
      <div className='farm_index_card_content'>
        <p className='apr'>
          {aprPercentage}%
          <span className='content_name'>
            {farmPools && farmPools.earnName}
          </span>
        </p>
        <p className='countdown'>
          {/* {farmPools && typeof farmPools.openDate == 'object' ? (
                <span>
                  {farmPools.openDate.hour}
                  <b>
                    <FormattedMessage id='HourM' />
                  </b>{' '}
                  <i>/</i> {farmPools.openDate.minute}
                  <b>
                    <FormattedMessage id='MinM' />
                  </b>
                </span>
              ) : typeof farmPools.dueDate == 'object' ? (
                <span>
                  {farmPools.dueDate.day}
                  <b>
                    <FormattedMessage id='DayM' />
                  </b>
                  <i>/</i>
                  {farmPools.dueDate.hour}
                  <b>
                    <FormattedMessage id='HourM' />
                  </b>
                </span>
              ) : (
                <span>{farmPools.dueDate}</span>
              )} */}
          <span>
            {' '}
            <FormattedMessage id='farm14' />
          </span>
          <span className='content_name'>
            <FormattedMessage id='farm8' />
          </span>
        </p>
      </div>
      <p className='farm_index_card_value'>
        <FormattedMessage id='farm10' />
        <img src={WARHT_Small} />
      </p>
      <p className='farm_index_card_value'>
        <FormattedMessage id='farm11' />
        <span>
          {farmPools && farmPools.totalSupply
            ? formatAmount(farmPools.totalSupply)
            : '--'}
        </span>
      </p>
      <p className='farm_index_card_value'>
        <FormattedMessage id='farm12' />
        <span>
          {farmPools && farmPools.balanceOf
            ? farmPools.balanceOf +
              '(' +
              (balanceProportion - 0 === 0 ? '0.00' : balanceProportion) +
              '%)'
            : '--'}
        </span>
      </p>
      <p className='farm_index_card_value'>
        <FormattedMessage id='farm4' />
        {/* 为了和 farmPools.balanceOf 展示同步 */}
        <span>
          {farmPools && farmPools.balanceOf ? formatAmount(balance) : '--'}
        </span>
      </p>
      <a
        className='farm_index_card_getMLP'
        href='https://ht.mdex.com/#/add/HT/0x910651F81a605a6Ef35d05527d24A72fecef8bF0'
        target='_black'
      >
        <FormattedMessage id='farm13' /> {farmPools && farmPools.name}(MDEX LP
        Token)
      </a>
      <div className='farm_index_card_btn'>
        <a
          className='deposit_btn'
          onClick={() => {
            dispatch({
              type: HANDLE_WALLET_MODAL,
              walletModal: 'deposit',
              pool: farmPools && farmPools,
            })
          }}
        >
          <FormattedMessage id='farm3' />
        </a>
        <a
          className='claim_btn'
          onClick={() => {
            dispatch({
              type: HANDLE_WALLET_MODAL,
              walletModal: 'claim',
              pool: farmPools && farmPools,
            })
          }}
        >
          <FormattedMessage id='farm16' />
        </a>
      </div>
      <div className='farm_index_card_rewards'>
        <p className='form-app__inputbox-after-text farm_popup_avaliable'>
          <FormattedMessage
            id='farm6'
            values={{ coin: farmPools && farmPools.rewards1 }}
          />
          <span>
            {farmPools && farmPools.earned
              ? formatAmount(farmPools.earned)
              : '--'}
          </span>
        </p>
        <p className='form-app__inputbox-after-text farm_popup_avaliable'>
          <FormattedMessage
            id='farm6'
            values={{ coin: farmPools && farmPools.rewards2 }}
          />
          <span>
            {farmPools && farmPools.earned2
              ? formatAmount(farmPools.earned2)
              : '--'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default injectIntl(FarmCard)
