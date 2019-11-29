import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core'
import Header from './Header'
import ActionList from './ActionList'

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
          actions: [
            {
              name: 'Fireball',
              type: 'Fire spell',
            },
            {
              name: 'Sword Swing',
              type: 'Phisical attck'
            },
            {
              name: 'Fireball2',
              type: 'Stronger Fire spell',
            }
          ],
          open: false
        }
    }

    // onOptionClick = (option) => {
    //     console.log('Pepito was here!!!' + option)
    // }
    
    onDialogOpen = () => {
      this.setState({open: true})
    }

    onDialogClose = () => {
      this.setState({open: false})
    }

    render() {
      const { actions, open } = this.state
      const optionType = this.props.match.params.option

        return (
            <div >
                <CssBaseline/>
                <Header
                  optionType={optionType}
                />
                <ActionList
                  actions={actions}
                  handleItemClick={this.onDialogOpen}
                  handleDialogClose={this.onDialogClose}
                  open={open}
                />
            </div>  
        )
    }
})