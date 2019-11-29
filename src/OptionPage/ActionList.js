import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import { sizing } from '@material-ui/system';
import ActionDialog from './ActionDialog'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export default function SimpleList(props) {
  const classes = useStyles();
  const { actions, handleItemClick, handleDialogClose, open } = props

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {actions.map(action => (
            <ListItem button height={10} key={action.name}>
                <ListItemText primary={action.name} secondary={action.type} />
                <ActionDialog
                    action={action}
                    open={open}
                    handleDialogOpen={handleItemClick}
                    handleDialogClose={handleDialogClose}
                ></ActionDialog>
            </ListItem>
        ))
        }
      </List>
    </div>
  );
}