import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export interface IResultPanelProps extends WithStyles<typeof styles> {
  offerCode?: string;
  isSubmitClicked?: boolean;
}

export const ResultPanel = withStyles(styles)(
  class extends React.Component<IResultPanelProps> {
    constructor(props : IResultPanelProps) {
      super(props);
    }

    public render() : JSX.Element {
      const { offerCode,
        isSubmitClicked,
        classes } = this.props;
      
      let shouldShow = false;
      if (isSubmitClicked != undefined)
      {
        shouldShow = isSubmitClicked;
      }

      return (
        <Fade
        in={shouldShow}
        unmountOnExit={true}
        timeout={500}
        >
          <div>
            <Fade
            in={offerCode == ''}
            unmountOnExit={true}
            timeout={300}
            >
              <div>
                <Typography variant="subtitle1" gutterBottom>
                  I am filling it out for you, this can take up to 1 minute, please be patient...
                </Typography>
                <CircularProgress className={classes.progress} color="secondary" />
              </div>
            </Fade>
            <Fade
            in={offerCode != ''}
            unmountOnExit={true}
            timeout={300}
            >
              <Typography variant="h2" gutterBottom>
                {offerCode}
              </Typography>
            </Fade>
          </div>
        </Fade>
      );
    }
  }
)