import React from 'react'
import List from './List'

class SearchFrom extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      characters : [],
    }
  }

  stateSearchTerm = (term) => {
    this.setState ({
      searchTerm : term
    });
  }

  listOfCharacters = (characters) => {
    characters.results.map(character => 
      this.setState ({
        characters: [...this.state.characters, character.name]
      })
    )
  }

  handleSearchTerm = (e) => {
    e.preventDefault()
    const searchTerm = this.state.searchTerm
    const url = `https://swapi.co/api/people/?search=${searchTerm}`
    fetch(url)
      .then(res => res.json())
      .then(characters => this.listOfCharacters(characters))
  }
render(){
  return (
    <div>
    <h3>Search for any Star Wars characters name.</h3>
      <p>For example, a search for "Skywalker" should list "Luke Skywalker", "Anakin Skywalker" and "Shmi Skywalker"</p>
    <form onSubmit={this.handleSearchTerm}>
      <label>Character Name:</label>
      <input type="text" name="term" id="term" placeholder="star wars name.." onChange={e => this.stateSearchTerm(e.target.value)}></input>
    </form>
    <List characters={this.state.characters}/>
    </div>
  )
}}
export default SearchFrom 