import { Popups } from '../Popups';
import { RootState } from '../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { McInfoAction } from '../../../reducers/McInfoReducer';

import { setShouldShowHelper} from '../../../actions/McInfoAction';

export function mapStateToProps(state: RootState) {
  const { mcinfo: { shouldShowHelper, }} = state;
    return {
      shouldShowHelper,
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<McInfoAction>) {
  return {
    setShouldShowHelper: (shouldShowHelper: boolean) => dispatch(setShouldShowHelper(shouldShowHelper)),
  }
}

export const PopupsContainer = connect(mapStateToProps, mapDispatchToProps)(Popups);