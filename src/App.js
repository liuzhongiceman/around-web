import React from 'react';
import { TopBar } from './components/TopBar';
import { Main } from './components/Main';

import './styles/App.css';

function App() {
    return (
        <div className="App">
            <TopBar/>
            <Main/>
        </div>
    );
}

export default App;
