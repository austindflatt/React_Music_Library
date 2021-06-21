import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
import { Container, Divider } from 'semantic-ui-react'
import SearchBar from './SearchBar/searchBar';
import NavBar from './NavBar/navBar';
import SongForm from './SongForm/songForm';
import MusicTable from './MusicTable/musicTable';

class App extends Component {
    // Set a "songs" property in the state object
    state = {
        songs: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/music/')
        .then(response => {this.setState({
            songs: response.data
        })});
    }

    // Implement componentDidMount
    // Make API call in componentDidMount
    // Update the state "songs" property to the API's response data


    render() {
        return (
            <Container textAlign='justified'>
                <NavBar />
                <SearchBar />
                <MusicTable songs={this.state.songs} />
            </Container>
        );
    }
}

export default App;