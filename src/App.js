import React from 'react';
import "./App.css"
import Main from './coponents/main/main'
import SideBar from './coponents/side-bar/side-bar'
import NavBar from './coponents/nav-bar/nav-bar'



export default class App extends React.Component{
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <div className="row">
            <SideBar></SideBar>
            <Main></Main>
        </div>
      </div>
    );
  }
}
