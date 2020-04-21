import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Login from '../src/containers/Login';

import Games from '../src/containers/Games';
import Attribute from "../src/components/GameAttribute/Attribute";
import Methods from "./components/GameMethods/Methods";
import Settings from "../src/containers/Settings";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
                {/*<Route  path="/"  exact render={() => <Login/>}/>*/}
                <Route path="/login" exact component={Login}  />
                <Route path='/games' exact component={Games}/>
                <Route exact path="/games/attributes" component={Attribute} />
                <Route exact path="/games/methods" component={Methods} />
                <Route exact path="/settings" component={Settings} />
            </div>
            </BrowserRouter>
        );
    }
}

export default App;

