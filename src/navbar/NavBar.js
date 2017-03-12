import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from './NavLink'
import SignInForm from '../signin/SignInForm'

export default class NavBar extends Component {
  render(){
    return (
      <div className="nav-list">
        <NavLink to="/about" className="nav-list__item">About</NavLink>
        <NavLink to="/skills" className="nav-list__item">Skills</NavLink>
        <NavLink to="/portfolio" className="nav-list__item">Portfolio</NavLink>
        <Link to="/admin" className="nav-list__item signin-link">Sign In</Link>
      </div>
    );
  }
}
