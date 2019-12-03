import React from 'react';
import { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Character from './Character'
import { Redirect } from 'react-router-dom'
import EditDialog from './EditDialog'
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const styles = {
  root: {
    width: '100%',
    maxWidth: 360
  },
  inline: {
    display: 'inline',
  },
};

export default withStyles(styles) (class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          redirect: false,
          characterName: ''
        }
    }

    setRedirect = (name) => {
      this.setState({
        redirect: true,
        characterName: name
      })
    }

    handleInfoClick = (e, character) => {
      e.stopPropagation()
      console.log('Aquii\n')
      console.log(character)
    }

    render() {
      const { classes, characters, onLevelUp, onEdit } = this.props
      const { redirect, characterName } = this.state

      if(redirect){
        return(
          <Redirect to={'/characterpage/' + characterName}/>
        )
      }

      return (
          <List className={classes.root}>
            {
              characters.map((character) => 
              <ListItem 
              button 
              alignItems="flex-start" 
              key={character.name}
              onClick={() => this.setRedirect(character.name)}
              >
                <Character
                  characterName={character.name}
                  shortDescription={character.description}
                />
                <ListItemSecondaryAction>
                  <EditDialog 
                    character={character}
                    onLevelUp={onLevelUp}
                    onEdit={onEdit}
                  />
                </ListItemSecondaryAction>
                {/* <IconButton onClick={(e) => this.handleInfoClick(e, character)} aria-label="info">
                  <InfoIcon/>
                </IconButton> */}
              </ListItem>
              )
            }
          </List>
        );
    }
})