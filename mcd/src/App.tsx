import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

import logo from './logo.svg';

import './App.css';

import { ReceiptInputContainer } from './components/UserControl/containers/ReceiptInputContainer';
import { ResultPanelContainer } from './components/UserControl/containers/ResultPanelContainer';
import { PopupsContainer } from './components/UserControl/containers/PopupsContainer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPoundSign } from '@fortawesome/free-solid-svg-icons'

library.add(faPoundSign)

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
});

export interface IAppProps extends WithStyles<typeof styles> {
}

export const App = withStyles(styles)(
  class App extends Component<IAppProps> {
    constructor(props : IAppProps) {
      super(props);
    }

    render() {
      const { classes } = this.props;
      return (
        <React.Fragment>
          <CssBaseline />
          {
            <Paper className={classes.root} elevation={1}>
              <PopupsContainer />
              <ReceiptInputContainer />
              <ResultPanelContainer />
              <Typography variant="h6" gutterBottom color='secondary'>
                By clicking submit, you will agree the following:
              </Typography>
              <Typography variant="subtitle2" gutterBottom color='primary'>
                You agree that you are fully satisfied with your visit to Mcdonalds™, which this service will be filling the survery with the assumption as such.
              </Typography>
              <Typography variant="body1" gutterBottom>
                THE SERVICE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SERVICE OR THE USE OR OTHER DEALINGS IN THE SERVICE.
              </Typography>
            </Paper> 
          }
        </React.Fragment>
      );
    }

  }
);
