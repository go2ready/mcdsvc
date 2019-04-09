import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WebSettingProvider } from '../WebSettingProvider';
import { ConfirmPanelContainer } from './containers/ConfirmPanelContainer'

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  paper: { 
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  button: { margin: theme.spacing.unit, },
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
  },
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
  setShouldShowHelper?: (shouldShowHelper: boolean) => void; 

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
      this.onHelp = this.onHelp.bind(this);
    }

    public onHelp() {
      if (typeof this.props.setShouldShowHelper === 'function'){
        this.props.setShouldShowHelper(true);
      } else {
        console.error('setShouldShowHelper function not available');
      }
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
            if (!this.onlyLetters(textValue) && textValue != '')
            {
              return;
            }
            this.props.setFirstCode(textValue.toUpperCase());
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
            if (!this.onlyLetters(textValue) && textValue != '')
            {
              return;
            }
            this.props.setSecCode(textValue.toUpperCase());
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
            if (!this.onlyLetters(textValue) && textValue != '')
            {
              return;
            }
            this.props.setThirdCode(textValue.toUpperCase());
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
            if (textValue.includes('.'))
            {
              const element = document.getElementById(this.amountPenceid);
              if (element != null)
              {
                element.focus();
              }
            } else if (this.isNormalInteger(textValue) || textValue == '')
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
              required={true}
              error={firstCode == undefined || firstCode.length != 4}
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
              required={true}
              error={secCode == undefined || secCode.length != 4}
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
              required={true}
              error={thirdCode == undefined || thirdCode.length != 4}
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
              required={true}
              error={amountPound == ''}
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
              required={true}
              error={amountPound == ''}
              />
            <IconButton color="primary" className={classes.button} aria-label="Where can I find these?" onClick={this.onHelp}>
              <HelpOutlineIcon />
            </IconButton>
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

    private onlyLetters(str: string) {
      return str.match("^[A-z0-9]+$");
    }
  }
);