import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const store = configureStore();
const mountNode = document.getElementById('app');

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  mountNode
);
