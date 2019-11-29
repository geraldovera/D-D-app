import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      character: {
        name: '',
        description: ''
      }
    }
  }

  handleToggle = () => {
    this.setState({
        open: !this.state.open
    })
  }

  //console.log(action)

  render(){

    const { open } = this.state
    const { action } = this.props

  return (
    <div>
        <IconButton onClick={this.handleToggle}>
            <InfoIcon />
        </IconButton>
        <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{action.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {action.type}
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleToggle} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}