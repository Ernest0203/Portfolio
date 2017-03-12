import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import App from './App'
import About from '../about/About'
import Skills from '../skills/Skills'
import Portfolio from '../portfolio/Portfolio'
import SignInPage from '../signin/SignInPage'
import Admin from '../signin/Admin.js'

export default (
	<Route path="/" component={App}>
		<IndexRedirect to="/about" component={About} />
		<Route path="/about" component={About} />
		<Route path="/skills" component={Skills} />
		<Route path="/portfolio" component={Portfolio} />
		<Route path="/admin" component={Admin} onEnter={Admin.onEnter} />
	</Route>
)
