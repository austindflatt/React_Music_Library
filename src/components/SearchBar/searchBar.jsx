import React from 'react';
import './searchBar.css';

function SearchBar(props) { 
    return (
        <div className='row row-spacer'>
            <div className='col-md-12' style={{padding: 0}}>
                <div className='titlebar-nav'>
                    <h1>dCC Library</h1>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;