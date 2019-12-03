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
          optionType: this.props.match.params.option,
          actionList: [],
          actions: [
            {
              name: 'Fireball',
              type: 'Fire spell',
              idx: 0,
            },
            {
              name: 'Sword Swing',
              type: 'Phisical attck',
              idx: 1,
            },
            {
              name: 'Fireball2',
              type: 'Stronger Fire spell',
              idx: 2,
            }
          ],
          bonusActions: [
            {
              name: 'Bonus Action 1',
              type: 'Fire spell',
              idx: 0,
            }
          ],
          reactions: [
            {
              name: 'Reaction 1',
              type: 'Fire spell',
              idx: 0,
            }
          ],
          others: [
            {
              name: 'Other 1',
              type: 'Fire spell',
              idx: 0,
            }
          ],
          open: false
        }
    }

    componentDidMount = () =>{
      const { actionList, optionType, actions, bonusActions, reactions, others } = this.state

      if(actionList.length == 0){
        if(optionType == 'Action'){
          this.setState({
            actionList:[
              ...actions
            ]
          })
        } else if (optionType == 'Bonus Action') {
          this.setState({
            actionList:[
              ...bonusActions
            ]
          })
        } else if (optionType == 'Reaction') {
          this.setState({
            actionList:[
              ...reactions
            ]
          })
        } else {
          this.setState({
            actionList:[
              ...others
            ]
          })
        }
      }
    }

    // onOptionClick = (option) => {
    //     console.log('Pepito was here!!!' + option)
    // }
    
    onDialogOpen = () => {
      this.setState({
        open: true,

      })
    }

    onDialogClose = () => {
      this.setState({open: false})
    }

    handleActionCreate = action => {

      const newAction = {...action,
        idx: this.state.actionList.length
      }

      this.setState(({actionList}) => ({
          actionList: [
            ...actionList,
            newAction
          ]
      }))
  }

  handleActionEdit = action => {
    this.setState(({ actionList }) => ({
      actionList: [
          ...actionList.filter(act => act.idx !== action.idx),
          action
      ]
    }))
  }


    render() {
      const { actionList, optionType } = this.state

      return (
          <div >
              <CssBaseline/>
              <Header
                optionType={optionType}
                onCreate={this.handleActionCreate}
              />
              <ActionList
                onEdit={this.handleActionEdit}
                actions={actionList}
              />
          </div>  
      )
    }
})