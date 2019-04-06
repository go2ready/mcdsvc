import * as React from 'react';
import * as request from "superagent";

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WebSettingProvider } from '../WebSettingProvider';
import { ConfirmPanelContainer } from './containers/ConfirmPanelContainer'

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
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
  inlineTypo: {
    paddingTop: 15,
    paddingLeft: 5,
    paddingRight: 5,
    verticalAlign: 'center',
    display: 'inline-block'
  }
});

export interface IReceiptInputProps extends WithStyles<typeof styles> {
  firstCode?: string;
  secCode?: string;
  thirdCode?: string;
  amountPound?: string;
  amountPence?: string;
  isSubmitClicked?: boolean;

  setFirstCode?: (firstCode: string) => void;
  setSecCode?: (secCode: string) => void;
  setThirdCode?: (thirdCode: string) => void;

  setAmountPound?: (amountPound: string) => void;
  setAmountPence?: (amountPence: string) => void;

  setSubmitClicked?: (isSubmitClicked: boolean) => void; 

  setOfferCode?: (offerCode: string) => void;
}

export const ReceiptInput = withStyles(styles)(
  class extends React.Component<IReceiptInputProps>{
    
    private code1id = "text-code1";
    private code2id = "text-code2";
    private code3id = "text-code3";
    private amountPoundid = "text-pound";
    private amountPenceid = "text-pence";
    
    constructor(props : IReceiptInputProps) {
      super(props);
      this.onTextChanged = this.onTextChanged.bind(this);
    }

    public onTextChanged(event: any, textid: string) : void {
      const textValue : string = event.target.value;
      if (typeof this.props.setFirstCode === 'function'
      && typeof this.props.setSecCode === 'function'
      && typeof this.props.setThirdCode === 'function'
      && typeof this.props.setAmountPound === 'function'
      && typeof this.props.setAmountPence === 'function'
      && typeof this.props.setSubmitClicked === 'function') {
        switch (textid)
        {
          case this.code1id:
            this.props.setFirstCode(textValue);
            if (textValue.length >= 4)
            {
              const element = document.getElementById(this.code2id);
              if (element != null)
              {
                element.focus();
              }
            }
            break;
          case this.code2id:
            this.props.setSecCode(textValue);
            if (textValue.length >= 4)
            {
              const element = document.getElementById(this.code3id);
              if (element != null)
              {
                element.focus();
              }
            }
            break;
          case this.code3id:
            this.props.setThirdCode(textValue);
            if (textValue.length >= 4)
            {
              const element = document.getElementById(this.amountPoundid);
              if (element != null)
              {
                element.focus();
              }
            }
            break;
          case this.amountPoundid:
            if (this.isNormalInteger(textValue) || textValue == '')
            {
              this.props.setAmountPound(textValue);
            }
            break;
          case this.amountPenceid:
            if (this.isNormalInteger(textValue) || textValue == '')
            {
              this.props.setAmountPence(textValue);
            }
            break;
          default:
            console.error('invalid text id');
        }
      } else {
        console.error('required function not available');
      }
    }

    public render() : JSX.Element {
      const { firstCode,
        secCode,
        thirdCode,
        amountPound,
        amountPence,
        classes,
        isSubmitClicked} = this.props;
      
      return (
        <div className={classes.root}>
          <div>
            <TextField 
              id={this.code1id}
              label="Code 1"
              value={firstCode}
              placeholder="XXXX-0000-0000"
              className={classes.textField}
              inputProps={{ maxLength: 4 }}
              onChange={(e) => this.onTextChanged(e, this.code1id)}
              />
            <Typography variant="h5" gutterBottom className={classes.inlineTypo}>
              -
            </Typography>
            <TextField 
              id={this.code2id}
              label="Code 2"
              value={secCode}
              placeholder="0000-XXXX-0000"
              className={classes.textField}
              inputProps={{ maxLength: 4 }}
              onChange={(e) => this.onTextChanged(e, this.code2id)}
              />
            <Typography variant="h5" gutterBottom className={classes.inlineTypo}>
              -
            </Typography>
            <TextField 
              id={this.code3id}
              label="Code 3"
              value={thirdCode}
              placeholder="0000-0000-XXXX"
              className={classes.textField}
              inputProps={{ maxLength: 4 }}
              onChange={(e) => this.onTextChanged(e, this.code3id)}
              />
          </div>
          <div>
            <FontAwesomeIcon icon='pound-sign' className={classes.icon} />
            <TextField 
              id={this.amountPoundid}
              label="Pound"
              value={amountPound}
              placeholder="XX"
              className={classes.textFieldSmall}
              onChange={(e) => this.onTextChanged(e, this.amountPoundid)}
              />
            <Typography variant="h5" gutterBottom className={classes.inlineTypo}>
              .
            </Typography>
            <TextField 
              id={this.amountPenceid}
              label="Pence"
              value={amountPence}
              placeholder="XX"
              className={classes.textFieldSmall}
              onChange={(e) => this.onTextChanged(e, this.amountPenceid)}
              />
          </div>
          <div>
            <ConfirmPanelContainer />
          </div>
        </div>
      );
    }

    private isNormalInteger(str: string) {
      var n = Math.floor(Number(str));
      return n !== Infinity && String(n) === str && n >= 0;
    }
  }
);