import React, { useContext, useEffect, useState } from 'react'
import { usage } from 'browserslist'
import { formatAmount, numToWei, splitFormat } from '../../utils/format'
import { getRandomIntInclusive } from '../../utils/index'
import { Select } from 'antd'
import { useBalance } from '../../pages/Hooks'
import { getPointAddress } from '../../web3/address'
import Web3 from 'web3'
import { getContract, useActiveWeb3React } from '../../web3'
import { injectIntl } from 'react-intl'
import ERC20 from '../../web3/abi/ERC20.json'
import { FormattedMessage } from 'react-intl'
import { useFarmInfo } from '../../pages/pools/Hooks'
import {
  HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
  HANDLE_SHOW_TRANSACTION_MODAL,
  HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
  waitingForInit,
  waitingPending,
} from '../../const'
import { mainContext } from '../../reducer'
import BigNumber from 'bignumber.js'

const { Option } = Select

const DepositPopup = (props) => {
  const { intl, icon, onClose, farmPools } = props
  const { account, active, library, chainId } = useActiveWeb3React()
  const { dispatch } = useContext(mainContext)
  const [approve, setApprove] = useState(true)
  const [amount, setAmount] = useState('')
  const [fee, setFee] = useState(0)

  const { balance } = useBalance(farmPools && farmPools.MLP)
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  useEffect(() => {
    const gas_limit = new BigNumber('1006182')
    const gas_price = new BigNumber(
      Web3.utils.toWei(`${getRandomIntInclusive(5, 20)}`, 'gwei')
    )
    const _fee = gas_limit.multipliedBy(gas_price).toString()
    setFee(_fee)
  }, [])

  useEffect(() => {
    if (farmPools && farmPools.allowance > 0) {
      setApprove(false)
    }
  }, [farmPools])

  const onMax = () => {
    let max = balance

    setAmount(formatAmount(max, farmPools && farmPools.decimal, 6))
  }

  const onChange = (e) => {
    const { value } = e.target
    const re = /^[0-9]+([.|,][0-9]+)?$/g
    if (
      value === '' ||
      re.test(value) ||
      (value.split('.').length === 2 && value.slice(value.length - 1) === '.')
    ) {
      setAmount(value)
    }
  }

  const onApprove = (e) => {
    const contract = getContract(library, ERC20.abi, farmPools.address)
    contract.methods
      .approve(
        farmPools.address,
        '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
      )
      .send({
        from: account,
      })
      .on('receipt', (_, receipt) => {
        console.log('approve success')
        setApprove(false)
      })
      .on('error', (err, receipt) => {
        console.log('approve error', err)
        dispatch({
          type: HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
          showFailedTransactionModal: true,
        })
        dispatch({
          type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
          showWaitingWalletConfirmModal: waitingForInit,
        })
      })
  }

  const onConfirm = (e) => {
    if (!amount) {
      return false
    }
    if (isNaN(parseInt(amount))) {
      return false
    }
    const pool_contract = getContract(library, farmPools.abi, farmPools.address)
    pool_contract.methods
      .offer(Web3.utils.toWei(`${amount}`, 'ether'))
      .send({
        from: account,
      })
      .on('receipt', (_, receipt) => {
        console.log('BOT staking success')
        dispatch({
          type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
          showWaitingWalletConfirmModal: waitingForInit,
        })
        dispatch({
          type: HANDLE_SHOW_TRANSACTION_MODAL,
          showTransactionModal: true,
        })
      })
      .on('error', (err, receipt) => {
        console.log('BOT staking error', err)
        dispatch({
          type: HANDLE_SHOW_FAILED_TRANSACTION_MODAL,
          showFailedTransactionModal: true,
        })
        dispatch({
          type: HANDLE_SHOW_WAITING_WALLET_CONFIRM_MODAL,
          showWaitingWalletConfirmModal: waitingForInit,
        })
      })
    onClose()
  }

  return (
    <div className='modal'>
      <div className='modal__box'>
        <form className='form-app farm_popup' action='/'>
          <div className='form-app__inner deposit'>
            <h1
              className='form-app__title h3'
              style={{ marginTop: 0, marginBottom: '10px' }}
            >
              <FormattedMessage id='farm3' />
              <a className='farm_popup_close_btn' onClick={onClose}></a>
            </h1>
            <p className='form-app__inputbox-after-text farm_popup_avaliable'>
              <FormattedMessage id='farm4' />
              <span>
                {farmPools && balance - 0 ? balance + farmPools.rewards : '--'}
              </span>
            </p>

            <div className='deposit__inputbox form-app__inputbox'>
              <div className='form-app__inputbox-control'>
                <div className='form-app__inputbox-input'>
                  <input
                    value={amount}
                    onChange={onChange}
                    className='input'
                    placeholder={intl.formatMessage({
                      id: 'money',
                    })}
                  />
                </div>

                <div className='form-app__inputbox-up' onClick={onMax}>
                  <div className='form-app__inputbox-up-pref'>
                    <FormattedMessage id='poolText19' />
                  </div>
                </div>
              </div>
            </div>

            <div className='form-app__submit form-app__submit--row'>
              {approve && (
                <button
                  type='button'
                  className='btn btn--medium'
                  onClick={onApprove}
                >
                  <FormattedMessage id='poolText21' />
                </button>
              )}
              {!approve && (
                <button
                  type='button'
                  className='btn btn--medium'
                  onClick={onConfirm}
                >
                  <FormattedMessage id='farm3' />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default injectIntl(DepositPopup)
