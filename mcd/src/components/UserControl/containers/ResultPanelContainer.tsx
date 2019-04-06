import { ResultPanel } from '../ResultPanel';
import { RootState } from '../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { McInfoAction } from '../../../reducers/McInfoReducer';

export function mapStateToProps(state: RootState) {
  const { mcinfo: { offerCode, isSubmitClicked }} = state;
    return {
      offerCode,
      isSubmitClicked,
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<McInfoAction>) {
  return {
  }
}

export const ResultPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ResultPanel);