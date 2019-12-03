import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    appBar: {
        position: 'relative',
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
})

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default withStyles(styles) (class extends Component {

    constructor(props) {
        super(props)
        this.state = {
          open: false,
          action: {
              name: '',
              type: ''
          }
          }
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

  handleChange = name => ({target: {value}}) => {
    this.setState({
        action: {
            ...this.state.action,
            [name]: value
        }
    })
  }

  handleSubmit = () => {
    //TODO: validate

    const { action } = this.state

    this.props.onCreate({
      ...action
    })

    this.setState({
        open: false,
        action: {
            name: '',
            type: ''
        }
    })
  }

  render() {
    //const { character } = this.props
    //const { classes } = this.props
    //const { open, character: { name, description, race, classType} } = this.state

    const { classes, onCreate } = this.props
    const { open, action: { name, type } } = this.state

  return (
    <div>
        <Fab color="secondary" size="small" aria-label="add" onClick={this.handleClickOpen}>
            <AddIcon />
        </Fab>
      <Dialog fullScreen open={open} onClose={this.handleClose} >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {'D&D'}
            </Typography>
            <Button autoFocus color="inherit" onClick={this.handleSubmit}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <DialogContentText>
            Enter requested information to create character.
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Action Name"
            value={name}
            onChange={this.handleChange('name')}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            id="Action Type"
            label="Type"
            value={type}
            onChange={this.handleChange('type')}
            fullWidth
          />
        </DialogContent>
      </Dialog>
    </div>
  );
  }
})