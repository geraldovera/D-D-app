import React, { Component } from 'react';
import { Route } from "react-router";
import HomePage from './HomePage/HomePage';
import UserAuth from './UserAuth/UserAuth'
import CharacterPage from './CharacterPage/CharacterPage'
import OptionPage from './OptionPage/OptionPage'

class App extends Component {

    render() {
    return (
        <div>
          <Route exact path="/" component={UserAuth}/>
          <Route exact path="/homepage" component={HomePage}/>
          <Route exact path="/characterpage/:id" component={CharacterPage}/>
          <Route exact path="/optionpage/:option" component={OptionPage}/>
        </div>
    );
  }
}

export default App;
