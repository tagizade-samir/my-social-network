import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import State, {subscribe} from './Redux/State.js'
import {addPost} from './Redux/State.js'
import * as serviceWorker from './serviceWorker';
import {updateNewPostText} from './Redux/State'


const rerenderTree = (State) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={State} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderTree(State)

subscribe(rerenderTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
