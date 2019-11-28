import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/Signup';
import { auth } from './firebase/firebase.utils';
import Navbar from './components/Navbar';
import { createUserProfile } from './firebase/actions';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
  //     createUserProfile(user).then(userInfo => {
  //       this.setState({ currentUser: userInfo });
  //     }, console.log(this.state));
  //   });
  // }
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userInfo = await createUserProfile(userAuth);
        this.setState({ currentUser: userInfo });
      } else {
        this.setState({ currentUser: null });
      }
      console.log(this.state);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar currentUser={this.state.currentUser} />
          <Switch>
            <div className='container'>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
