import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core'
import Header from './Header'
import CharacterList from './CharacterList'

const styles = {
    root: {
      flexGrow: 1,
      margin: 0
    },
    grow: {
      flexGrow: 1,
    }
  };

export default withStyles(styles) (class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dialogChar: {
                name: '',
                description: '',
                race: '',
                classType: ''
            },
            characters: [
                {
                    name: 'Hero',
                    description: 'I am no a Hero!.',
                    race: 'Dragonborn',
                    classType: "Wizard",
                    level: 2,
                    idx: 0
                },
                {
                    name: 'Dorogon',
                    description: 'Description pospadkn.',
                    race: 'Elf',
                    classType: "Fighter",
                    level: 1,
                    idx: 1
                },
                {
                    name: 'Raigar',
                    description: 'Description lkcjanouihgdc.',
                    race: 'Dwarf',
                    classType: "Paladin",
                    level: 1,
                    idx: 2
                }
            ]
        }
    }

    //Implement Craete Dialog here.
    handleChange(event, name, desc) {
        // newChar = {
        //     name: name,
        //     description: desc
        // }
        //this.setState({dialogChar: newChar});
    }

    handleCharacterCreate = character => {
        console.log(character)
        const newCharacter = {...character,
            idx: this.state.characters.length
          }

        this.setState(({characters}) => ({
            characters: [
              ...characters,
              newCharacter
            ]
        }))
    }

    handleLevelUp = (character) => {
        const newCharacter = {
            ...character,
            level: character.level + 1
        }
        console.log(newCharacter)

        this.setState((({ characters }) => ({
            characters: [
                ...characters.filter(char => char.idx !== character.idx),
                newCharacter
            ]
        })))
    }

    handleCharacterEdit = character => {
        this.setState(({ characters }) => ({
          characters: [
              ...characters.filter(char => char.idx !== character.idx),
              character
          ]
        }))
      }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        const { characters } = this.state
        return (
            <div >
                <CssBaseline/>
                <Header
                    onCreate={this.handleCharacterCreate}
                />
                <CharacterList
                    characters={characters}
                    onLevelUp={this.handleLevelUp}
                    onEdit={this.handleCharacterEdit}
                />
            </div>  
        )
    }
})