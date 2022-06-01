//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {CardList} from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
     monsters: [],
     search_field: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( {monsters: users})
      );
  }

    handleChange = (e) => {
      this.setState({search_field: e.target.value});
    }

  render(){
    
    const {monsters, search_field}= this.state;

    const filtered_monsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(search_field.toLowerCase())
      )
      


    return(
    <div className="App">   
      <h1>Monsters Rolodex</h1>

      <SearchBox 
      placeholder= {'search box'}
      handleChange= {this.handleChange}
      />
      <CardList monsters = {filtered_monsters}/> 
     
    </div>
    )
  }
}

export default App;
