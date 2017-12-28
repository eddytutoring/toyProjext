import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Root from 'components/Root';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from 'modules';

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
  <Root/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
