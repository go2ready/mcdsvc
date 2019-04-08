import { createAction } from 'typesafe-actions'
import { IMcInfoState } from '../types/McInfoState';

export const setFirstCode = createAction('mcinfo/SET_1ST_CODE', resolve => {
  return (firstCode : string) => resolve({ firstCode } as IMcInfoState);
});

export const setSecondCode = createAction('mcinfo/SET_2ND_CODE', resolve => {
  return (secCode : string) => resolve({ secCode } as IMcInfoState);
});

export const setThirdCode = createAction('mcinfo/SET_3RD_CODE', resolve => {
  return (thirdCode : string) => resolve({ thirdCode } as IMcInfoState);
});

export const setAmountPound = createAction('mcinfo/SET_POUND', resolve => {
  return (amountPound : string) => resolve({ amountPound } as IMcInfoState);
});

export const setAmountPence = createAction('mcinfo/SET_PENCE', resolve => {
  return (amountPence : string) => resolve({ amountPence } as IMcInfoState);
});

export const setRecaptcha = createAction('mcinfo/SET_RECAPTCHA', resolve => {
  return (recaptcha : string) => resolve({ recaptcha } as IMcInfoState);
});

export const setSubmitClicked = createAction('mcinfo/TOGGLE_SUBMIT', resolve => {
  return (isSubmitClicked: boolean) => resolve({ isSubmitClicked } as IMcInfoState);
});

export const setOfferCode = createAction('mcinfo/SET_OFFER_CODE', resolve => {
  return (offerCode: string) => resolve({ offerCode } as IMcInfoState);
});

export const setShouldShowHelper = createAction('mcinfo/SHOW_HELPER', resolve => {
  return (shouldShowHelper: boolean) => resolve({ shouldShowHelper } as IMcInfoState);
});

export const setShouldShowExplainer = createAction('mcinfo/SHOW_EXPLAIN', resolve => {
  return (shouldShowExplainer: boolean) => resolve({ shouldShowExplainer } as IMcInfoState);
});