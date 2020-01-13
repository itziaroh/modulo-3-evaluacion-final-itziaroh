import React from 'react';
import '../styles/App.css';
import { Route, Switch } from 'react-router-dom';
import { fetchCharacters } from '../services/Api'
import SearchInput from './SearchInput';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';


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
        <Switch>
          <Route exact path='/'>
            <SearchInput
              handleChange={this.handleChange}
            />
            <CharacterList
              allCharacters={this.state.allCharacters}
              searchValue={this.state.searchValue}
            />
          </Route>
          <Route path='/character' component={CharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;