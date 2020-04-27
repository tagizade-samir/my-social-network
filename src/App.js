import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Nav from './Components/Nav/Nav';
import ProfileContainer from './Components/Profile/ProfileContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import News from './Components/News/News.jsx'
import Music from './Components/Music/Music.jsx'
import Settings from './Components/Settings/Settings.jsx'
import { Route, BrowserRouter } from 'react-router-dom'
import UsersContainer from './Components/Users/UsersContainer'
import Login from './Components/Login/Login'
import { connect } from 'react-redux';
import {initializeApp} from './Redux/appReducer'
import Preloader from './Components/Common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

  return (
    <BrowserRouter>
      <body>
        <div className='wrapper'>
          <div className='wrap-in'>
            <HeaderContainer />
            <Nav />
            <div className='wrapContent'>
              <Route path='/profile/:userId?' render={() => 
                <ProfileContainer />} />
              <Route path='/dialogs' render={() => 
                <DialogsContainer />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' render={() => <Settings />} />
              <Route path='/users'
                render={() => <UsersContainer />} />
              <Route path='/login'
                render={() => <Login />} />
            </div>
          </div>
        </div>
      </body>
    </BrowserRouter>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {
  initializeApp,
})(App);
