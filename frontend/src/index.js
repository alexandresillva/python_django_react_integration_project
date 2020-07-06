import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserLists from './UserLists'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <UserLists />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
