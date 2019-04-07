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

import demo from './demo.jpg';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
});

export interface IPopupsProps extends WithStyles<typeof styles> {
  shouldShowHelper?: boolean;

  setShouldShowHelper?: (shouldShowHelper: boolean) => void; 
}

function Transition(props : any) {
  return <Slide direction="up" {...props} />;
}

export const Popups = withStyles(styles)(
  class extends React.Component<IPopupsProps>{
    constructor(props : IPopupsProps) {
      super(props);
      this.handleClose = this.handleClose.bind(this);
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
        shouldShowHelper} = this.props;

      let shouldShow = false;
      if (shouldShowHelper)
      {
        shouldShow = shouldShowHelper;
      }

      return (
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
      );
    }
  }
)