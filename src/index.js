import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import './index.css';
import App from './containers/app'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import { searchRobots } from './reducers';

const logger = createLogger();

//Used to combine different reducers
const store = createStore( searchRobots , applyMiddleware(logger))

ReactDOM.render(
					<Provider store={store}>
						<App />
					</Provider>, document.getElementById('root'));

serviceWorker.unregister();

