import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import Root from './components/Root'

const storeFromMiddleWare = applyMiddleware(ReduxPromise)(createStore)
const store = storeFromMiddleWare(reducers)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
                
