import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './styles/css/global.css';
import './styles/css/nprogress.css';

import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './configs/firebase.config';

import App from './pages/App';
import * as serviceWorker from './serviceWorker';

import './utils/axios';

firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
