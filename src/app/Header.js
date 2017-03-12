import React, { Component } from 'react'
import { Link } from 'react-router'
import NavBar from '../navbar/NavBar'
import logo from './images/logo.png'

export default class Header extends Component {
  render(){
    return (
      <header className="header">
        <Link to="/"><img className="logo" src={logo} /></Link>
        <NavBar />
      </header>
    );
  }
}
