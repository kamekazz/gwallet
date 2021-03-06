import React from 'react';
import ReactDOM from 'react-dom';

import App from './componets/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './store/reducers';

import './index.css'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
  );

ReactDOM.render(

<Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root'));



