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
        this.allSongs();
    }

    async allSongs(){
        let response = await axios.get("http://127.0.0.1:8000/music/");
        this.setState({
            songs: response.data,
        })
    }

    delete = (id) => {
        axios.delete(`http://127.0.0.1:8000/info/${id}`)
        .then(() => this.setState({ status: 'Delete succesful' }))
        window.location.reload();
    }


    // Implement componentDidMount
    // Make API call in componentDidMount
    // Update the state "songs" property to the API's response data


    render() {
        return (
            
            <Container textAlign='justified'>
                <NavBar />
                <SearchBar />
                <MusicTable songs={this.state.songs} delete={this.delete} />
            </Container>
        );
    }
}

export default App;