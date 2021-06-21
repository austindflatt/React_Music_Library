import React, { Component } from "react";
import TitleBar from './SearchBar/searchBar';

class App extends Component {
    state = {  }
    render() {
        return (
            <div className='container'>
                <SearchBar />
            </div>
        );
    }
}

export default App;