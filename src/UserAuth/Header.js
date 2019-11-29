import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
//import LogoutDialog from './LogoutDialog'


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    }
  };

export default withStyles(styles) (class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {"D&D"}
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>  
        )
    }
})