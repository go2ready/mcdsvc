import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconButton from '@material-ui/core/IconButton';
import wotrus from './wotrus.png';

const styles = (theme: Theme) => createStyles({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  centerRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    maxWidth: '500px',
  },
  shareIcon: {
  },
  icon: {
  },
});

export interface IFootNoteProps extends WithStyles<typeof styles> {
}

export const FootNote = withStyles(styles)(
  class App extends Component<IFootNoteProps> {
    constructor(props : IFootNoteProps) {
      super(props);
    }

    render() {
      const { classes } = this.props;
      return (
        <div>
          <div className={classes.shareIcon}>
            <IconButton target="_blank"
            href="https://facebook.com/sharer/sharer.php?u=jojotech.co.uk%2Fmcd"
            className={classes.shareIcon} color='primary' aria-label="Delete">
              <FontAwesomeIcon icon={['fab', 'facebook']} className={classes.icon} />
            </IconButton>
            <IconButton target="_blank"
            href="https://twitter.com/intent/tweet/?text=Automatic%20survey%20filler%20bot%20for%20%C2%A31.99%20Mcdonald&#x27;s%20big%20mac%20voucher!%20jojotech.co.uk%2Fmcd&amp;url=jojotech.co.uk%2Fmcd"
            className={classes.shareIcon} color='primary' aria-label="Delete">
              <FontAwesomeIcon icon={['fab', 'twitter']} className={classes.icon} style={{color: '#55acee'}}/>
            </IconButton>
            <IconButton target="_blank"
            href="https://reddit.com/submit/?url=jojotech.co.uk%2Fmcd&amp;resubmit=true&amp;title=Automatic%20survey%20filler%20bot%20for%20%C2%A31.99%20Mcdonald&#x27;s%20big%20mac%20voucher!%20jojotech.co.uk%2Fmcd"
            className={classes.shareIcon} color='primary' aria-label="Delete">
              <FontAwesomeIcon icon={['fab', 'reddit']} className={classes.icon} style={{color: '#5f99cf'}}/>
            </IconButton>
          </div>
          <Typography variant="h6" gutterBottom color='secondary'>
            By clicking submit, you will agree the following:
          </Typography>
          <Typography variant="subtitle2" gutterBottom color='primary'>
            You agree that you are fully satisfied with your visit to Mcdonalds™, which this service will be filling the survey with the assumption as such.
          </Typography>
          <Typography variant="body1" gutterBottom>
            THE SERVICE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SERVICE OR THE USE OR OTHER DEALINGS IN THE SERVICE.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Identity verified by <a href="https://www.wosign.com/english/index.htm"><img src={wotrus} alt="wotrus" /></a> Your data is encrypted to the highest standard.</b>
          </Typography>
        </div>
      );
    }

  }
);