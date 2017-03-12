import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
import routes from './app/routes.js'

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.getElementById('app')
);