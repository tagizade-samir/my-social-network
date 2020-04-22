import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Nav from './Components/Nav/Nav';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Dialogs from './Components/Dialogs/Dialogs.jsx'
import News from './Components/News/News.jsx'
import Music from './Components/Music/Music.jsx'
import Settings from './Components/Settings/Settings.jsx'
import { Route, BrowserRouter } from 'react-router-dom'
import UsersContainer from './Components/Users/UsersContainer'

const App = (props) => {

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
                <Dialogs />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' render={() => <Settings />} />
              <Route path='/users'
                render={() => <UsersContainer />} />
            </div>
          </div>
        </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
