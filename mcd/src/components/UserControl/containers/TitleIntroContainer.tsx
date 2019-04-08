import { TitleIntro } from '../TitleIntro';
import { RootState } from '../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { McInfoAction } from '../../../reducers/McInfoReducer';
import { setShouldShowExplainer } from '../../../actions/McInfoAction';

export function mapStateToProps(state: RootState) {
  const { mcinfo: {}} = state;
    return {
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<McInfoAction>) {
  return {
    setShouldShowExplainer: (shouldShowExplainer: boolean) => dispatch(setShouldShowExplainer(shouldShowExplainer)),
  }
}

export const TitleIntroContainer = connect(mapStateToProps, mapDispatchToProps)(TitleIntro);