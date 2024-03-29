import { Popups } from '../Popups';
import { RootState } from '../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { McInfoAction } from '../../../reducers/McInfoReducer';

import { setShouldShowHelper, setShouldShowExplainer } from '../../../actions/McInfoAction';

export function mapStateToProps(state: RootState) {
  const { mcinfo: { shouldShowHelper, shouldShowExplainer }} = state;
    return {
      shouldShowHelper, shouldShowExplainer
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<McInfoAction>) {
  return {
    setShouldShowHelper: (shouldShowHelper: boolean) => dispatch(setShouldShowHelper(shouldShowHelper)),
    setShouldShowExplainer: (shouldShowExplainer: boolean) => dispatch(setShouldShowExplainer(shouldShowExplainer)),
  }
}

export const PopupsContainer = connect(mapStateToProps, mapDispatchToProps)(Popups);