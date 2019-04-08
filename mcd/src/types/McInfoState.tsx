export interface IMcInfoState {
  readonly firstCode?: string;
  readonly secCode?: string;
  readonly thirdCode?: string;
  
  readonly amountPound?: string;
  readonly amountPence?: string;

  readonly recaptcha?: string;
  readonly isSubmitClicked? : boolean;

  readonly offerCode? : string;

  readonly shouldShowHelper?: boolean;
  readonly shouldShowExplainer?: boolean;
}