import { ConfirmPanel } from '../ConfirmPanel';
import { RootState } from '../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { McInfoAction } from '../../../reducers/McInfoReducer';
import { 
  setRecaptcha,
  setOfferCode,
  setSubmitClicked} from '../../../actions/McInfoAction';

export function mapStateToProps(state: RootState) {
  const { mcinfo: { recaptcha, firstCode, secCode, thirdCode, amountPound, amountPence, isSubmitClicked }} = state;
    return {
      firstCode,
      secCode,
      thirdCode,
      amountPound,
      amountPence,
      recaptcha,
      isSubmitClicked,
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<McInfoAction>) {
  return {
    setSubmitClicked: (isSubmitClicked: boolean) => dispatch(setSubmitClicked(isSubmitClicked)),
    setOfferCode: (offerCode: string) => dispatch(setOfferCode(offerCode)),
    setRecaptcha: (recaptcha: string) => dispatch(setRecaptcha(recaptcha)),
  }
}

export const ConfirmPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmPanel);