import React from 'react';
import { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Character from './Character'
import { Redirect } from 'react-router-dom'

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

    render() {
      const { classes, characters } = this.props
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
              </ListItem>
              )
            }
          </List>
        );
    }
})