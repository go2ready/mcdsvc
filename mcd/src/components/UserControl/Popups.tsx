import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import demo from './demo.jpg';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
});

export interface IPopupsProps extends WithStyles<typeof styles> {
  shouldShowHelper?: boolean;
  shouldShowExplainer?: boolean;

  setShouldShowHelper?: (shouldShowHelper: boolean) => void;
  setShouldShowExplainer?: (shouldShowExplainer: boolean) => void; 
}

function Transition(props : any) {
  return <Slide direction="up" {...props} />;
}

export const Popups = withStyles(styles)(
  class extends React.Component<IPopupsProps>{
    constructor(props : IPopupsProps) {
      super(props);
      this.handleClose = this.handleClose.bind(this);
      this.handleExplainerClose = this.handleExplainerClose.bind(this);
    }

    public handleExplainerClose(){
      if (typeof this.props.setShouldShowExplainer === 'function'){
        this.props.setShouldShowExplainer(false);
      } else {
        console.error('setShouldShowExplainer function not available');
      }
    }

    public handleClose(){
      if (typeof this.props.setShouldShowHelper === 'function'){
        this.props.setShouldShowHelper(false);
      } else {
        console.error('setShouldShowHelper function not available');
      }
    }

    public render() : JSX.Element {
      const {
        classes,
        shouldShowHelper,
        shouldShowExplainer} = this.props;

      let shouldShow = false;
      if (shouldShowHelper)
      {
        shouldShow = shouldShowHelper;
      }

      let shouldShowExplain = false;
      if (shouldShowExplainer)
      {
        shouldShowExplain = shouldShowExplainer;
      }

      return (
        <div>
          <Dialog
            open={shouldShowExplain}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleExplainerClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"What is this?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                This is an automatic bot that will help you fill out mcdonald's £1.99 big mac and fries 
                survey. Simply enter the code and the money spent, my bots behind the scene will fill
                out the survey and bring your voucher back to you within a minute.
              </DialogContentText>
              <DialogContentText id="alert-dialog-slide-description">
                <Typography variant="h6" gutterBottom>
                  What is the catch of using it?
                </Typography>
                NOTHING! This service is provided free of charge, to anyone, I also don't save any of your date or cookie.
              </DialogContentText>
              <DialogContentText id="alert-dialog-slide-description">
                <Typography variant="h6" gutterBottom>
                  Do you earn money out of this?
                </Typography>
                NO! However the server and my bots costing money to run, I may terminate this web app at anytime
                without given notice when it turns out to be too costly or anti-bot approach was adopted by mcdonald. 
                If you like my work and want to keep it running, please consider donating.
              </DialogContentText>
              <DialogContentText id="alert-dialog-slide-description">
                <Typography variant="h6" gutterBottom>
                  Who are you why you are making this?
                </Typography>
                I love big mac so I love the £1.99 deal, but I have to fill out the survey again and again.
                One day my wife said, can't you write a bot to do this for you? Well turns out I can, and I am now sharing this with you.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={shouldShow}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Where can I find these code?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Please input these code and the amount you spent according to what is shown on your receipt,
                as demostrated below.
              </DialogContentText>
              <img src={demo} alt="demo" />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
)