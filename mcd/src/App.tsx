import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

import logo from './logo.svg';

import './App.css';

import { TitleIntroContainer } from './components/UserControl/containers/TitleIntroContainer';
import { ReceiptInputContainer } from './components/UserControl/containers/ReceiptInputContainer';
import { ResultPanelContainer } from './components/UserControl/containers/ResultPanelContainer';
import { PopupsContainer } from './components/UserControl/containers/PopupsContainer';
import { FootNote } from './components/UserControl/FootNote'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPoundSign } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faPoundSign, fab)
console.log(library)

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
    textAlign: 'center',
    display: 'inline',
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
            <div>
              <TitleIntroContainer />
              <Paper className={classes.root} elevation={1}>
                <PopupsContainer />
                <ReceiptInputContainer />
                <ResultPanelContainer />
                <FootNote />
              </Paper> 
            </div>
          }
        </React.Fragment>
      );
    }

  }
);
