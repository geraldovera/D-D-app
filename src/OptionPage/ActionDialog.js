// import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

// export default class extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       open: false,
//       character: {
//         name: '',
//         description: ''
//       }
//     }
//   }

//   handleToggle = () => {
//     this.setState({
//         open: !this.state.open
//     })
//   }

//   //console.log(action)

//   render(){

//     const { open } = this.state
//     const { action } = this.props

//   return (
//     <div>
//         <IconButton onClick={this.handleToggle}>
//             <InfoIcon />
//         </IconButton>
//         <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">{action.name}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             {action.type}
//           </DialogContentText>

//         </DialogContent>
//         <DialogActions>
//           <Button onClick={this.handleToggle} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
//}

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

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
          action: this.props.action
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

    this.props.onEdit({
        ...action,
    })
}

handleEdit = () => {
    this.handleSubmit()
    this.handleClose()
}

  render() {
    //const { character } = this.props
    //const { classes } = this.props
    //const { open, character: { name, description, race, classType} } = this.state

    const { classes, onEdit } = this.props
    const { open, action, action: { name, type } } = this.state

  return (
    <div>
      <IconButton onClick={this.handleClickOpen} aria-label="info">
           <InfoIcon/>
      </IconButton>
      <Dialog fullScreen open={open} onClose={this.handleClose} >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {'D&D'}
            </Typography>
            <Button autoFocus color="inherit" onClick={this.handleEdit}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <DialogContentText>
            Edit option information here!.
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