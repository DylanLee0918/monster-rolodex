import React from 'react'
import SearchBox from './Components/search-box/SearchBox'
import { CardList } from './Components/card-list/CardList'
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    this.searchField = this.searchField.bind(this);
  }

  monsterData(users) {
    this.setState({ monsters: users })
  }

  searchField(e) {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.monsterData(users)) 
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters" 
          handleChange={this.searchField}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
