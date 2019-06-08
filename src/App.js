import React from 'react';
import "./App.css"
import Main from './coponents/main/main'
import SideBar from './coponents/side-bar/side-bar'
import NavBar from './coponents/nav-bar/nav-bar'


function App() {
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

export default App;
