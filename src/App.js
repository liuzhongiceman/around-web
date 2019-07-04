import React,{Component} from 'react';
import { TopBar } from './components/TopBar';
import { Main } from './components/Main';
import {TOKEN_KEY} from "./constants"

import './styles/App.css';

class App extends Component {

    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
    }

    handleLogin = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        this.setState({ isLoggedIn: true });
    }

    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({ isLoggedIn: false });
    }
    render() {
        return (
            <div className="App">
                <TopBar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout} />
                <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
            </div>
        );
    }
}

export default App;
