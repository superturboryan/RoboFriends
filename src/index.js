import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './containers/app'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import { searchRobots } from './reducers';

//Used to combine different reducers
const store = createStore( searchRobots )

ReactDOM.render(
					<Provider>
						<App store={store}/>
					</Provider>, document.getElementById('root'));

serviceWorker.unregister();

