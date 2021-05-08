import React, { useContext, useEffect } from 'react'
import { WalletConnect } from '../components/account/WalletConnect'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { mainContext } from '../reducer'
import {
  StakeModal,
  UnstakeModal,
  ClaimRewardModal,
  StakedTokensModal,
  FailedTransactionModal,
  WaitingWalletConfirmModal,
  TransactionModal,
} from '../components/Modals'
import { MenuMask } from '../components/menumask/index'
import {
  GALLERY_SELECT_WEB3_CONTEXT,
  HANDLE_WALLET_MODAL,
  HANDLE_SHOW_MENUMASK_MODAL,
  HANDLE_CHANGE_NETWORKS,
  TOOL_DATA,
} from '../const'
import {
  InjectedConnector,
  NoEthereumProviderError,
} from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { LedgerConnector } from '@web3-react/ledger-connector'
import { WalletModal } from '../components/Modals/WalletModal'
import DepositPopup from '../components/farm/depositPopup'
import ClaimPopup from '../components/farm/claimPopup'
import PoolsJoin from '../components/staterPools/poolsJoin'
import PoolsSlippage from '../components/staterPools/poolsSlippage'
import PoolsSuccess from '../components/staterPools/poolsSuccess'
import { WalletChange } from '../components/account/WalletChange'
import { LoginModal } from '../components/Modals/LoginModl'
import { ChangeNetworks } from '../components/Modals/ChangeNetworks'
import { TXStatusModal } from '../components/Modals/TXStatusModal'
import satellite from '../assets/image/satellite.png'
import toolApi from '../apis/toolApi'

const injected = new InjectedConnector({
  supportedChainIds: [3, 128],
})

const POLLING_INTERVAL = 12000

const walletconnect = new WalletConnectConnector({
  rpc: { 128: 'https://http-mainnet-node.huobichain.com' },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
})

const ledger = new LedgerConnector({
  chainId: 128,
  url: 'https://http-mainnet-node.huobichain.com',
  pollingInterval: POLLING_INTERVAL,
})

const wallets = {
  MetaMask: injected,
  WalletConnect: walletconnect,
  Ledger: ledger,
  //TrustWallet: injected,
  //Squarelink: squarelink,
  //Torus: torus,
  //Aut
}

export const InitPage = () => {
  const { dispatch, state } = useContext(mainContext)

  const context = useWeb3React()
  const { activate } = context

  const {
    showConnectModal,
    showStakeModal,
    showUnstakeModal,
    showRewardModal,
    showStakedTokensModal,
    showUnstakedTokensModal,
    showFailedTransactionModal,
    showWaitingWalletConfirmModal,
    showTransactionModal,
    walletModal,
    txStatus,
    pool,
    farmPools,
    showMenuMaskModal,
    changeNetworkStatus,
  } = state

  useEffect(() => {
    toolApi
      .getTotalNumAddresses(1)
      .then((res) => {
        if (res.data.data) {
          dispatch({
            type: TOOL_DATA,
            toolData: res.data.data,
          })
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    const localContent =
      (window && window.localStorage.getItem(GALLERY_SELECT_WEB3_CONTEXT)) ||
      'MetaMask'
    console.log('wallet content', localContent)
    if (localContent) {
      console.log('activate', wallets[localContent])
      activate(wallets[localContent]).then(() => {
        console.log(wallets[localContent])
      })
    }
  }, [])

  return (
    <>
      {/*<img src={satellite} className="satellite"/>*/}
      {showMenuMaskModal && (
        <MenuMask
          onClick={() =>
            dispatch({
              type: HANDLE_SHOW_MENUMASK_MODAL,
              showMenuMaskModal: true,
            })
          }
        />
      )}

      {showStakeModal && (
        <div className='modal-show'>
          <div className='wrapper'>
            <StakeModal />
          </div>
        </div>
      )}
      {showUnstakeModal && (
        <div className='modal-show'>
          <div className='wrapper'>
            <UnstakeModal />
          </div>
        </div>
      )}
      {showRewardModal && (
        <div className='modal-show'>
          <div className='wrapper'>
            <ClaimRewardModal />
          </div>
        </div>
      )}
      {showStakedTokensModal && (
        <div className='modal-show'>
          <div className='wrapper'>
            <StakedTokensModal />
          </div>
        </div>
      )}

      {showFailedTransactionModal && (
        <div className='modal-show'>
          <div className='wrapper' style={{ zIndex: 11 }}>
            <FailedTransactionModal />
          </div>
        </div>
      )}
      {showWaitingWalletConfirmModal.show && (
        <div className='modal-show'>
          <div className='wrapper' style={{ zIndex: 11 }}>
            <WaitingWalletConfirmModal />
          </div>
        </div>
      )}
      {/*{showWaitingWalletConfirmModal.show && (*/}
      {/*    <div className="modal-show" style={{zIndex: 11}}>*/}
      {/*        <div className="wrapper" >*/}
      {/*            <WaitingWalletConfirmModal />*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*)}*/}

      {showTransactionModal && (
        <div className='modal-show'>
          <div className='wrapper' style={{ zIndex: 11 }}>
            <TransactionModal />
          </div>
        </div>
      )}

      {txStatus && (
        <div className='modal-show'>
          <div className='wrapper' style={{ zIndex: 11 }}>
            <TXStatusModal />
          </div>
        </div>
      )}

      {walletModal === 'connect' && (
        <div className='modal-show'>
          <div className='wrapper'>
            <WalletConnect />
          </div>
        </div>
      )}

      {walletModal === 'connecting' && (
        <div className='modal-show'>
          <div className='wrapper'>
            <LoginModal
              onDismiss={() =>
                dispatch({
                  type: HANDLE_WALLET_MODAL,
                  walletModal: null,
                })
              }
            />
          </div>
        </div>
      )}

      {walletModal === 'status' && (
        <div className='modal-show'>
          <div className='wrapper' style={{ zIndex: 11 }}>
            <WalletModal
              onClose={() =>
                dispatch({
                  type: HANDLE_WALLET_MODAL,
                  walletModal: null,
                })
              }
              onChange={() =>
                dispatch({
                  type: HANDLE_WALLET_MODAL,
                  walletModal: 'change',
                })
              }
            />
          </div>
        </div>
      )}
      {walletModal === 'change' && (
        <div className='modal-show'>
          <div className='wrapper'>
            <WalletChange
              onClose={() =>
                dispatch({
                  type: HANDLE_WALLET_MODAL,
                  walletModal: null,
                })
              }
              onCancel={() =>
                dispatch({
                  type: HANDLE_WALLET_MODAL,
                  walletModal: 'status',
                })
              }
            />
          </div>
        </div>
      )}
      {walletModal === 'join' && (
        <div className='modal-show'>
          <div className='wrapper' style={{ zIndex: 10 }}>
            <PoolsJoin
              pool={pool}
              onClose={() =>
                dispatch({
                  type: HANDLE_WALLET_MODAL,
                  walletModal: null,
                })
              }
              onChange={() => {}}
            />
          </div>
        </div>
      )}

      {walletModal === 'slippageSuccess' && (
        <div className='modal-show'>
          <div className='wrapper' style={{ zIndex: 10 }}>
            <PoolsSuccess
              pool={pool}
              onClose={() =>
                dispatch({
                  type: HANDLE_WALLET_MODAL,
                  walletModal: null,
                })
              }
              onChange={() => {}}
            />
          </div>
        </div>
      )}

      {walletModal === 'slippage' && (
        <div className='modal-show'>
          <div className='wrapper' style={{ zIndex: 10 }}>
            <PoolsSlippage
              pool={pool}
              onClose={() =>
                dispatch({
                  type: HANDLE_WALLET_MODAL,
                  walletModal: null,
                })
              }
              onChange={() => {}}
            />
          </div>
        </div>
      )}

      {changeNetworkStatus && (
        <div className='modal-show'>
          <div className='wrapper'>
            <ChangeNetworks
              onClose={() =>
                dispatch({
                  type: HANDLE_CHANGE_NETWORKS,
                  walletModal: false,
                })
              }
            />
          </div>
        </div>
      )}
      {walletModal === 'deposit' && (
        <div className='modal-show'>
          <div className='wrapper' style={{ zIndex: 10 }}>
            <DepositPopup
              pool={farmPools}
              onClose={() =>
                dispatch({
                  type: HANDLE_WALLET_MODAL,
                  walletModal: null,
                })
              }
              onChange={() => {}}
            />
          </div>
        </div>
      )}
      {walletModal === 'claim' && (
        <div className='modal-show'>
          <div className='wrapper' style={{ zIndex: 10 }}>
            <ClaimPopup
              pool={farmPools}
              onClose={() =>
                dispatch({
                  type: HANDLE_WALLET_MODAL,
                  walletModal: null,
                })
              }
              onChange={() => {}}
            />
          </div>
        </div>
      )}
    </>
  )
}
