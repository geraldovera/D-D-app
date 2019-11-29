import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
})

export default withStyles(styles)  (class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      character: {
        name: '',
        description: '',
        classType: ''
      }
    }
  }

  handleToggle = () => {
    this.setState({
        open: !this.state.open
    })
  }

  handleChange = name => ({target: {value}}) => {
    this.setState({
        character: {
            ...this.state.character,
            [name]: value
        }
    })
  }

  handleSubmit = () => {
    //TODO: validate

    const { character } = this.state

    this.props.onCreate({
      ...character
    })

    this.setState({
        open: false,
        character: {
            name: '',
            description: '',
            classType: ''
        }
    })
  }

  render() {

    const { open, character: { name, description, classType} } = this.state
            //{ classes } = this.props

  return (
    <div>
        <Fab color="secondary" size="medium" aria-label="add" onClick={this.handleToggle}>
            <AddIcon />
        </Fab>
        <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Character</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter requested information to create character.
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Charcater Name"
            value={name}
            onChange={this.handleChange('name')}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            id="description"
            label="Description"
            value={description}
            onChange={this.handleChange('description')}
            fullWidth
          />
          <FormControl >
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Class
            </InputLabel>
            <Select
              id="demo-simple-select-placeholder-label"
              value={classType}
              onChange={this.handleChange('classType')}
              displayEmpty
              //className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Classless</em>
              </MenuItem>
              <MenuItem value={10}>Warrior</MenuItem>
              <MenuItem value={20}>Mage</MenuItem>
              <MenuItem value={30}>Paladin</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
})