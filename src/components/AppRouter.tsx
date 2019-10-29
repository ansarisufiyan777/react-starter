import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import ConentBody from '../containers/ContentBody'
import Main from '../containers/Main'

export const history = createBrowserHistory()

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={Main} />
			</Switch>
		</div>
	</Router>
)

export default AppRouter
