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
        race: '',
        classType: '',
        level: 1
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
            race: '',
            classType: ''
        }
    })
  }

  render() {

    const { open, character: { name, description, race, classType} } = this.state
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
            <InputLabel shrink id="race-select">
              Race
            </InputLabel>
            <Select
              id="simple-race-select"
              value={race}
              onChange={this.handleChange('race')}
              displayEmpty
              //className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Raceless</em>
              </MenuItem>
              <MenuItem value={'Dwarf'}>Dwarf</MenuItem>
              <MenuItem value={'Elf'}>Elf</MenuItem>
              <MenuItem value={'Halfling'}>Halfling</MenuItem>
              <MenuItem value={'Human'}>Human</MenuItem>
              <MenuItem value={'Dragonborn'}>Dragonborn</MenuItem>
              <MenuItem value={'Gnome'}>Gnome</MenuItem>
              <MenuItem value={'Half-elf'}>Half-elf</MenuItem>
              <MenuItem value={'Half-orc'}>Half-orc</MenuItem>
              <MenuItem value={'Tiefling'}>Tiefling</MenuItem>
            </Select>
          </FormControl>
          <br/>
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
              <MenuItem value={'Barbarian'}>Barbarian</MenuItem>
              <MenuItem value={'Bard'}>Bard</MenuItem>
              <MenuItem value={'Cleric'}>Cleric</MenuItem>
              <MenuItem value={'Druid'}>Druid</MenuItem>
              <MenuItem value={'Fighter'}>Fighter</MenuItem>
              <MenuItem value={'Monk'}>Monk</MenuItem>
              <MenuItem value={'Paladin'}>Paladin</MenuItem>
              <MenuItem value={'Ranger'}>Ranger</MenuItem>
              <MenuItem value={'Rogue'}>Rogue</MenuItem>
              <MenuItem value={'Sorcerer'}>Sorcerer</MenuItem>
              <MenuItem value={'Warlock'}>Warlock</MenuItem>
              <MenuItem value={'Wizard'}>Wizard</MenuItem>
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