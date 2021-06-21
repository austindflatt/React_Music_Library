import React, { Component } from 'react';
import SearchBar from './SearchBar/searchBar';
import SongForm from './SongForm/songForm';
import MusicTable from './MusicTable/musicTable';

class App extends Component {

    state = { }
    render() {
        return (
            <div>
                <span>
                    <MusicTable />
                </span>
                <span>
                    <SongForm />
                </span>
            </div>
        );
    }
}

export default App;