import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <body>
      <div className='wrapper'>
        <div className='wrap-in'>
          <Header />
          <Nav />
          <Profile />
        </div>
      </div>
    </body>
  );
}

export default App;
