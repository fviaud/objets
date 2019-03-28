import React, { Component } from 'react';
import {Header,ObjetList,AddObjet} from './components';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="container p-5">
          <AddObjet/>
        </div>
        <ObjetList />
      </div>
    );
  }
}
export default App;