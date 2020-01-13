import React from 'react';
import '../styles/App.css';
import { fetchCharacters } from '../services/Api'
import CharacterList from './CharacterList';
import SearchInput from './SearchInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      searchValue: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetchCharacters()
      .then(data => {
        this.setState({ allCharacters: data.results })
      })
  }

  handleChange(value) {
    this.setState({ searchValue: value })
    console.log(this.state.searchValue)
  }

  render() {
    return (
      <div className="App">
        <SearchInput
          handleChange={this.handleChange}
        />
        <CharacterList
          allCharacters={this.state.allCharacters}
        />
      </div>
    );
  }
}

export default App;
