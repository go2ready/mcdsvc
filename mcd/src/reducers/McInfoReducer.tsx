import { ActionType, getType } from 'typesafe-actions'

import * as mcInfoAction from '../actions/McInfoAction'
export type McInfoAction = ActionType<typeof mcInfoAction>

import { IMcInfoState } from '../types/McInfoState'

export function mcInfoActionReducer(state: IMcInfoState | undefined, action: McInfoAction){
  if (state === undefined)
  {
    state = {
      firstCode: '',
      secCode: '',
      thirdCode: '',
      amountPound: '',
      amountPence: '',
      recaptcha: '',
      isSubmitClicked: false,
      offerCode: '',
    }
  }

  switch (action.type) {
    case getType(mcInfoAction.setFirstCode):
      return { ...state,
        firstCode: action.payload.firstCode,
      };
    case getType(mcInfoAction.setSecondCode):
      return { ...state,
        secCode: action.payload.secCode,
      };
    case getType(mcInfoAction.setThirdCode):
      return { ...state,
        thirdCode: action.payload.thirdCode,
      };
    case getType(mcInfoAction.setAmountPound):
      return { ...state,
        amountPound: action.payload.amountPound,
      };
    case getType(mcInfoAction.setAmountPence):
      return { ...state,
        amountPence: action.payload.amountPence,
      };
    case getType(mcInfoAction.setSubmitClicked):
      return { ...state,
        isSubmitClicked: action.payload.isSubmitClicked,
      };
    case getType(mcInfoAction.setOfferCode):
      return { ...state,
        offerCode: action.payload.offerCode,
      };
    case getType(mcInfoAction.setRecaptcha):
      return { ...state,
        recaptcha: action.payload.recaptcha,
      };
    default:
      return state;
  }
}