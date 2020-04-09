import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs.jsx'

const App = () => {

  // <Profile />
  return (
    <body>
      <div className='wrapper'>
        <div className='wrap-in'>
          <Header />
          <Nav />
          <div className='wrapContent'>
          <Dialogs />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
