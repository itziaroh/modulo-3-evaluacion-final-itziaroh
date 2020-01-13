import React from 'react';
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import { fetchCharacters, fetchDetail } from '../services/Api'
import CharacterDetail from './CharacterDetail';
import Home from './Home';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      searchValue: '',
      characterDetail: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchDetail = this.fetchDetail.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this)
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

  fetchDetail(id) {
    if (id !== this.state.characterDetail.id) {
      fetchDetail(id)
        .then(data => {
          this.setState({ characterDetail: data })
        })
    }
  }

  renderCharacterDetail(props) {
    this.fetchDetail(props.match.params.id)
    return <CharacterDetail character={this.state.characterDetail} />
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home
              handleChange={this.handleChange}
              allCharacters={this.state.allCharacters}
              searchValue={this.state.searchValue}
            />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;