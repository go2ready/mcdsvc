import * as React from 'react';
import * as request from "superagent";

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';
import { WebSettingProvider } from '../WebSettingProvider';

import ReCAPTCHA from "react-google-recaptcha";

import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  paper: { 
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  button: { /* ... */ },
  icon: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
  submitButtom: {
    margin: theme.spacing.unit,
  },
  textField: {
    maxWidth: '500px',
  },
  textFieldSmall: {
    maxWidth: '100px',
  },
  inline: {
    display: 'inline-block'
  }
});

export interface IConfirmPanelProps extends WithStyles<typeof styles> {
  firstCode?: string;
  secCode?: string;
  thirdCode?: string;
  amountPound?: string;
  amountPence?: string;
  recaptcha?: string;
  isSubmitClicked?: boolean;

  setSubmitClicked?: (isSubmitClicked: boolean) => void; 
  setOfferCode?: (offerCode: string) => void;
  setRecaptcha?: (recaptcha: string) => void;
}

export const ConfirmPanel = withStyles(styles)(
  class extends React.Component<IConfirmPanelProps>{

    constructor(props : IConfirmPanelProps) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    public onChange(value: string | null) {
      if (typeof this.props.setRecaptcha === 'function')
      {
        this.props.setRecaptcha(value == null ? '' : value);
      } else {
        console.error('setRecaptcha function not available');
      }
    }

    public onSubmit()
    {    
      if (typeof this.props.setSubmitClicked === 'function')
      {
        this.props.setSubmitClicked(true);
      } else {
        console.error('setSubmitClicked function not available');
      }

      if (this.props.firstCode == undefined ||
        this.props.secCode == undefined ||
        this.props.thirdCode == undefined ||
        this.props.amountPence == undefined ||
        this.props.amountPound == undefined ||
        this.props.firstCode.length != 4 ||
        this.props.secCode.length != 4 ||
        this.props.thirdCode .length != 4 ||
        this.props.amountPence == '' ||
        this.props.amountPound == '')
      {
        return;
      }

      console.log(request);
      request.get('/mcd/mcdfill/')
      .set('X-CSRFToken', WebSettingProvider.csrfToken)
      .timeout({
        response: 60000,  // Wait 60 seconds for the server to start sending,
      })
      .query({
        code1: this.props.firstCode,
        code2: this.props.secCode,
        code3: this.props.thirdCode,
        amountPound: this.props.amountPound,
        amountPence: this.props.amountPence,
        recaptcha: this.props.recaptcha,
      })
      .then(res => {
        if (res.body != null && res.status >= 200 && res.status < 300)
        {
          const offerCode = res.body.offer_code;
          if (typeof this.props.setOfferCode === 'function')
          {
            this.props.setOfferCode(offerCode);
          } else {
            console.error('setOfferCode function not available');
          }
        } else {
          if (typeof this.props.setSubmitClicked === 'function')
          {
            this.props.setSubmitClicked(false);
          } else {
            console.error('setSubmitClicked function not available');
          }
        }
      }, err => {
        if (err.timeout) { 
          if (typeof this.props.setOfferCode === 'function')
          {
            this.props.setOfferCode('Timed out, check your connection or try again later.');
          } else {
            console.error('setOfferCode function not available');
          } 
        } else {
          if (typeof this.props.setOfferCode === 'function')
          {
            this.props.setOfferCode('Server error, please try again later.');
          } else {
            console.error('setOfferCode function not available');
          }  
        }
      });
    }

    public render() : JSX.Element {
      const { 
        classes,
        isSubmitClicked,
        recaptcha} = this.props;
      
      let shouldHideButton = true || !this.IsDataValid();
      if (recaptcha)
      {
        shouldHideButton = false || !this.IsDataValid();
      }

      return (
        <div>
          <div className={classes.inline}>
            <ReCAPTCHA
              sitekey="6LenmpwUAAAAAPGXJ_Ychi6DwQSY5OHidRJF4Bb_"
              onChange={this.onChange}
            />
          </div>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            Website and bots are not free, to keep this website running please consider
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="RWJE5978RK72N" />
            <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
          </form>


          <div>
            <Fade
            in={!isSubmitClicked}
            unmountOnExit={true}
            timeout={500}
            >
              <Button 
                variant="contained" 
                color="primary" 
                className={classes.submitButtom}
                onClick={this.onSubmit}
                disabled={shouldHideButton}>
                Submit
              </Button>
            </Fade>
          </div>
        </div>
      );
    }

    private IsDataValid()
    {
      return !(this.props.firstCode == undefined ||
        this.props.secCode == undefined ||
        this.props.thirdCode == undefined ||
        this.props.amountPence == undefined ||
        this.props.amountPound == undefined ||
        this.props.firstCode.length != 4 ||
        this.props.secCode.length != 4 ||
        this.props.thirdCode .length != 4 ||
        this.props.amountPence == '' ||
        this.props.amountPound == '');
    }
  }
)