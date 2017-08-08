import Ambrosus from 'ambrosus';
import { executeEthereumTransaction } from './TransactionAction.js';
import { transactionMined } from '../../utils/blockchainEvents.js';
import { statusAddPendingTransaction, statusAddSuccessTransaction, statusAddFailedTransaction } from './TransactionStatusAction.js';
import { showModal, hideModal } from './ModalAction.js';


export const escrow = (offer, quantity, token) => {
  return async(dispatch) => {
    var agreement = new Agreement(offer.address, quantity, token.address);
    agreement.initiateAgreement((transactionHash) => {
      dispatch(statusAddPendingTransaction(transactionHash, "Transfer to escrow", ""));
      dispatch(showModal("TransactionProgressModal", { title: "Transfer to escrow" }));
    }).then((myContract) => {
      dispatch(statusAddSuccessTransaction(myContract.transactionHash, "Transfer to escrow", ""));
      dispatch(hideModal());
    }).catch((reason) => {
      dispatch(showModal("ErrorModal", { reason }));
    });
  }
}