import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { mainContext } from '../../reducer'
import loading from '../../assets/icon/loading.png'
import {useActiveWeb3React} from "../../web3";
import {getScanLink} from "../../connectors";

export const WaitingWalletConfirmModal = () => {
  const { history } = useHistory
  const { dispatch, state } = useContext(mainContext)
  const {chainId} = useActiveWeb3React()
  const { showWaitingWalletConfirmModal } = state

  // useEffect(() => {
  //     new modalLoader("canvas");
  // }, []);

  return (
    <div className='modal'>
      <div className='modal__box'>
        <div className='form-app'>
          <div className='form-app__inner transction-submitted'>
            <div className='transction-submitted__loading'>
              <img src={loading} />
            </div>
            <h3 className='form-app__title h3'>
              {showWaitingWalletConfirmModal.title}
            </h3>
            {showWaitingWalletConfirmModal.hash ? (
              <a
                target='_blank'
                href={getScanLink(chainId, showWaitingWalletConfirmModal.hash, 'transaction')}
                className='transction-submitted__text'
              >
                {showWaitingWalletConfirmModal.content}
              </a>
            ) : (
              <p className='transction-submitted__text'>
                {showWaitingWalletConfirmModal.content}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
