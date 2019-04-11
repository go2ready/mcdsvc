import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';
import { WebSettingProvider } from '../WebSettingProvider';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

export interface ITitleIntroProps extends WithStyles<typeof styles> {
  setShouldShowExplainer?: (shouldShowExplainer: boolean) => void; 
}

export const TitleIntro = withStyles(styles)(
  class extends React.Component<ITitleIntroProps>{

    constructor(props : ITitleIntroProps) {
      super(props);

      this.onExplain = this.onExplain.bind(this);
    }

    public onExplain() {
      if (typeof this.props.setShouldShowExplainer === 'function')
      {
        this.props.setShouldShowExplainer(true);
      } else {
        console.error('setShouldShowExplainer function not available');
      }
    }

    public render() : JSX.Element {
      const {classes} = this.props;

      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Mcdonald's receipt survey automatic filler
              </Typography>
              <Button color="inherit" onClick={this.onExplain}>What is this?</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
)