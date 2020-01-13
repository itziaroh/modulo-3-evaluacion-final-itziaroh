import React from 'react';
import '../styles/App.css';
import { fetchCharacters } from '../services/Api'
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: []
    }
  }

  componentDidMount() {
    fetchCharacters()
      .then(data => {
        this.setState({ allCharacters: data.results })
      })
  }

  render() {
    return (
      <div className="App">
        <CharacterList />
      </div>
    );
  }
}

export default App;
