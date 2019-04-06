import { ReceiptInput } from '../ReceiptInput';
import { RootState } from '../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { McInfoAction } from '../../../reducers/McInfoReducer';
import { setOfferCode, 
  setFirstCode, 
  setSecondCode, 
  setThirdCode, 
  setAmountPound,
  setAmountPence,
  setSubmitClicked} from '../../../actions/McInfoAction';

export function mapStateToProps(state: RootState) {
  const { mcinfo: { firstCode, secCode, thirdCode, amountPound, amountPence, isSubmitClicked }} = state;
    return {
      firstCode,
      secCode,
      thirdCode,
      amountPound,
      amountPence,
      isSubmitClicked,
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<McInfoAction>) {
  return {
    setFirstCode: (firstCode : string) => dispatch(setFirstCode(firstCode)),
    setSecCode: (secCode : string) => dispatch(setSecondCode(secCode)),
    setThirdCode: (thirdCode : string) => dispatch(setThirdCode(thirdCode)),
    setAmountPound: (amountPound : string) => dispatch(setAmountPound(amountPound)),
    setAmountPence: (amountPence : string) => dispatch(setAmountPence(amountPence)),
    setSubmitClicked: (isSubmitClicked: boolean) => dispatch(setSubmitClicked(isSubmitClicked)),
    setOfferCode: (offerCode: string) => dispatch(setOfferCode(offerCode)),
  }
}

export const ReceiptInputContainer = connect(mapStateToProps, mapDispatchToProps)(ReceiptInput);