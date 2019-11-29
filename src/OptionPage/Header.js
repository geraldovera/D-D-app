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
        this.state = {
            open: false
        }
        this.handleClickOpen= this.handleClickOpen.bind(this);
        this.handleClose= this.handleClose.bind(this);
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    
    render() {
        const { classes, optionType } = this.props;
        //const { open } = this.state

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {optionType}
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>  
        )
    }
})