import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs.jsx'
import News from './Components/News/News.jsx'
import Music from './Components/Music/Music.jsx'
import Settings from './Components/Settings/Settings.jsx'
import { Route, BrowserRouter } from 'react-router-dom'

const App = (props) => {

  return (
    <BrowserRouter>
      <body>
        <div className='wrapper'>
          <div className='wrap-in'>
            <Header />
            <Nav />
            <div className='wrapContent'>
              <Route path='/profile' render={() => 
                <Profile />} />
              <Route path='/dialogs' render={() => 
                <Dialogs />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' render={() => <Settings />} />
            </div>
          </div>
        </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
