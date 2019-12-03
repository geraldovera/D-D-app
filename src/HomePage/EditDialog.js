import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
          character: this.props.character
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
        character: {
            ...this.state.character,
            [name]: value
        }
    })
  }

  handleEdit = (character) => {
    this.props.onEdit(character)
    this.handleClose()
  }

  levelUp = (character) => {
    this.props.onLevelUp(character)
    this.setState({
      character: {
        ...character,
        level: character.level + 1
      }
    })
  }

  render() {
    //const { character } = this.props
    const { classes } = this.props
    const { open, character: { name, description, race, classType, level}, character } = this.state

  return (
    <div>
      <IconButton onClick={this.handleClickOpen} aria-label="info">
           <InfoIcon/>
      </IconButton>
      <Dialog fullScreen open={open} onClose={(e) => this.handleClose(e)} >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {'D&D'}
            </Typography>
            <Button autoFocus color="inherit" onClick={() => this.handleEdit(character)}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <DialogContentText>
            Edit character info here!
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
              className={classes.selectEmpty}
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
          <Fragment >
            <Typography variant="body1" >
              {'Class: ' + classType}
            </Typography>
            <Typography variant="body1" >
              {'Level: ' + level}
            </Typography>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1} direction="column" alignItems="center">
                <Grid item>
                  <ButtonGroup variant="text" size="small" aria-label="small contained button group">
                    <Button onClick={() => this.levelUp(character)}>+</Button>
                    <Button>-</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>
          </Fragment>
          {/* <FormControl >
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Class
            </InputLabel>
            <Select
              id="demo-simple-select-placeholder-label"
              value={classType}
              onChange={this.handleChange('classType')}
              displayEmpty
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
          </FormControl> */}
        </DialogContent>
      </Dialog>
    </div>
  );
  }
})