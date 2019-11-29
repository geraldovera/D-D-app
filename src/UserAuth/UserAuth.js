import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core'
import Header from './Header'
import Tabs from './tabs'

const styles = {
    root: {
      flexGrow: 1,
      margin: 0
    },
    grow: {
      flexGrow: 1,
    }
  };

export default withStyles(styles) (class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <Header/>
                <Tabs
                  
                />
            </div>  
        )
    }
})