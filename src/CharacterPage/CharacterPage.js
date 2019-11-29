import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core'
import Header from './Header'
import OptionsContainer from './OptionsContainer'
import actionImage from '../imgs/d&daction.jpg';
import reactionImage from '../imgs/d&dreaction.jpg';
import movementImage from '../imgs/d&dmovement.jpg';
import bonusActionImage from '../imgs/d&dbonusaction.jpg';
import { Redirect } from 'react-router-dom'

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
            redirect: false,
            optionType: '',
            optionsData: [
                {
                    img: actionImage,
                    title: 'Action'
                },
                {
                    img: bonusActionImage,
                    title: 'Bonus Action'
                },
                {
                    img: reactionImage,
                    title: 'Reaction'
                },
                {
                    img: movementImage,
                    title: 'Other'
                }
              ]
        }
    }

    onOptionClick = (option) => {
        //console.log('Pepito was here!!!' + option)
        this.setState({
            redirect: true,
            optionType: option

        })
    }
    
    render() {
        const characterName = this.props.match.params.id
        const { optionsData, redirect, optionType } = this.state

        if(redirect){
            return(
                <Redirect to={'/optionpage/' + optionType}/>
            )
        }

        //console.log(this.props.match.params.id)

        return (
            <div >
                <CssBaseline/>
                <Header
                    characterName={characterName}
                />
                <OptionsContainer
                    handleOptionClick={this.onOptionClick}
                    optionsData={optionsData}
                />
            </div>  
        )
    }
})