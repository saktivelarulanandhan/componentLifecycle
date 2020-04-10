import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.module.css';

import Persons from './components/Persons/Persons';

class App extends Component {


  static getDerivedStateFromProps() {
    console.log("You Are in Get Derived State From Props Hook");
    return null;
  }

  shouldComponentUpdate() {
    console.log("You Are In Shoud Component Update Hook");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("You Are In Get Snapshot Before Update Hook");
  }

  componentDidUpdate() {
    console.log("You Are In Component Did Update Hook");
  }


  state = {
    Persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steph', age: 27 }
    ]
  };

 /*  constructor() { 
    super();       
    console.log("You Have Called Constructor...");
  }; */


  togglePersons = () => {
    console.log("You clicked me ");
  }

  removeHandler = (id) => {
    console.log(id);
    const copyState = this.state;
    copyState.Persons.splice(copyState.Persons[id], 1);
    this.setState(copyState);
  }
  
  nameChanged = (changedName,index) => {
    console.log(changedName);
    console.log(index);
    const copyState = this.state;
    copyState.Persons[index].name = changedName.target.value;
    console.log(copyState)
    this.setState(copyState);
  }
  
  render() {
    console.log(this.state);
    return (
      <div className={classes.wrapper} >
        <h1>Hi I am a React App!</h1>
        <p>This is really working</p>
        <button name="Toggle Button" onClick={this.togglePersons}>Toggle Button</button>

        <div className={classes.personsPos}>
          <Persons persons={this.state.Persons} nameChangeEvent={this.nameChanged} removeHandler={this.removeHandler}/>
        </div>

      </div>
    );
  }

}

export default App;
