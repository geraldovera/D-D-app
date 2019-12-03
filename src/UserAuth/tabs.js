import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import axios from 'axios';
import { Redirect } from 'react-router-dom'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  dir: theme.direction
});

export default withStyles(styles) (class FullWidthTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            value: 0,
            name: '',
            password: '',
            auth: false
        }
    }

    // componentDidMount() {
    //   this.isAuthenticated()
    // }

    // isAuthenticated() {
    //   let auth = JSON.parse(localStorage.getItem('user'))
    //   if(auth)
    //   this.setState({
    //     auth: true
    //   })
    // }

    handleTabChange = (event, value) => {
        this.setState({
            value: value
        })
    }

    handleChange = name => ({target: {value}}) => {
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    setRedirect = () => {
      console.log(this.state.name + '\n' + this.state.password + '\n')
      this.setState({
        redirect: true
      })
    }

    handleLogin = () => {
      console.log('Here mothafuck!')
      return  <Redirect  to="/homepage" />

      // Creating form to be sent to API
      // const user = {
      //   name: this.state.name,
      //   password: this.state.password
      // }

      // Contacting API to validate user password
      // eslint-disable-next-line no-useless-concat
      //console.log(user)
      // axios.post('https://vera-fit-app-backend.herokuapp.com/users/login', user)
      //     .then(res => {
      //         if (res.data["token"]) {
      //             localStorage.setItem('user', JSON.stringify(res.data["token"]));
      //             //this.props.history.push("/homepage")
      //             this.isAuthenticated()
      //         }
      //     }).catch( res => {
      //       this.setState({
      //         loginErr: 'Username or password is wrong. Please try again or sign up if no account.'
      //       })
      //         //console.log(res)
      //         // const err = document.getElementById('id_invalid_user');
      //         // err.style.visibility = "visible";
      //         // err.innerText = "Invalid username or password";
      //         // show error
      //     })
    }
  
    handleSignup = () => {
        // Creating form to be sent to API
        // const user = {
        //   name: this.state.name,
        //   password: this.state.password
        // }

        // Contacting API to validate user password
        // eslint-disable-next-line no-useless-concat
        //console.log(user)
        // axios.post('https://vera-fit-app-backend.herokuapp.com/users', user)
        //     .then(res => {
        //         if (res.data["token"]) {
        //             localStorage.setItem('user', JSON.stringify(res.data["token"]));
        //             //this.props.history.push("/homepage")
        //             this.isAuthenticated()
        //         }
        //     }).catch( res => {
        //         this.setState({
        //           signUpErr: 'Password not valid. Must be at least 7 characters long and can not be the word "password". Username may already be taken.'
        //         })
        //         //console.log(res)
        //         // const err = document.getElementById('id_invalid_user');
        //         // err.style.visibility = "visible";
        //         // err.innerText = "Invalid username or password";
        //         // show error
        //     })
    }

  render() {
    const { classes } = this.props,
        { value, name, password, signUpErr, loginErr, redirect } = this.state

    if (redirect) {
      return <Redirect to='/homepage'/>
    }
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Login" />
            <Tab label="Sign up" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={classes.dir === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          //onChangeIndex={this.handleChange('value')}
        >
          <TabContainer dir={classes.dir}>
            {loginErr !== '' 
            ? <Typography color='primary' variant="body2">{loginErr}</Typography>
            : null
            }
              <form>
                  <TextField
                      id='id_email_edit'
                      label="Username"
                      value={name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                      //className={classes.FormControl}
                  >   
                  </TextField>
                  <br/>
                  <TextField
                      id='id_pw_edit'
                      label="Password"
                      type="password"
                      value={password}
                      onChange={this.handleChange('password')}
                      margin="normal"
                      //className={classes.FormControl}
                  >   
                  </TextField>
                  <br/>
                  <Button 
                      id='id_button_submit'
                      color="primary"
                      variant='contained'
                      onClick={() => this.setRedirect()}
                  >
                      Login
                  </Button>
              </form>
          </TabContainer>
          <TabContainer dir={classes.dir}>
            {signUpErr !== '' 
            ? <Typography color='primary' variant="body2">{signUpErr}</Typography>
            : null
            }
              <form>
                  <TextField
                      id='id_email_edit'
                      label="Username"
                      value={name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                      //className={classes.FormControl}
                  >   
                  </TextField>
                  <br/>
                  <TextField
                      id='id_pw_edit'
                      label="Password"
                      value={password}
                      type="password"
                      onChange={this.handleChange('password')}
                      margin="normal"
                      //className={classes.FormControl}
                  >   
                  </TextField>
                  <br/>
                  <Button 
                      id='id_button_submit'
                      color="primary"
                      variant='contained'
                      onClick={() => this.setRedirect()}
                  >
                      Sign up
                  </Button>
              </form>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
})