/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Promise from 'bluebird';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from 'routers/AppRouter';
import configureStore from 'store/configureStore';
import 'styles/base/base.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faTwitter, faGithub, faInstagram, faLinkedin);

const store = configureStore()
const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.subscribe(() => {
  // console.log('action', store.getState());
});

ReactDOM.render(App, document.getElementById('react-root'));
