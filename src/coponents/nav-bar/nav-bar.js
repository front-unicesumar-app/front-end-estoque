import React from 'react';
import './style.css';


export default class NavBar extends React.Component{
  render() {
    return (
      <nav className="navbar navbar-light bg-primary text-white">
        <p className="navbar-brand text-white">Stock Food</p>
      </nav>
    );
  }
}
