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
                class: ''
            },
            characters: [
                {
                    name: 'Hero',
                    description: 'I am no a Hero!.',
                    class: "Mage"
                },
                {
                    name: 'Dorogon',
                    description: 'Description pospadkn.',
                    class: "Warrior"
                },
                {
                    name: 'Raigar',
                    description: 'Description lkcjanouihgdc.',
                    class: "Paladin"
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

        this.setState(({characters}) => ({
            characters: [
              ...characters,
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
                />
            </div>  
        )
    }
})