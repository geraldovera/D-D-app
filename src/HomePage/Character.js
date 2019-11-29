import React from 'react';
import { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      flexGrow: 1,
      margin: 0
    },
    grow: {
      flexGrow: 1,
    },
    inline: {
      display: 'inline',
    }
  };

export default withStyles(styles) (class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        const {characterName, shortDescription, classes} = this.props

        return (
            <Fragment>
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary={characterName}
                secondary={
                    <Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {shortDescription}
                        </Typography>
                    </Fragment>
                }
                />
            </Fragment>  
        )
    }
})