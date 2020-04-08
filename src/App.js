import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Profile from './Components/Profile';

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
