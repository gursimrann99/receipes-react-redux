import React, { Component } from 'react';
import SearchReceipe from './SearchReceipe';
import '../styles/index.css';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Receipe Finder</h2>
                <SearchReceipe/>
            </div>
        )
    }
}

export default App;