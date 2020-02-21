import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Mylogin from './containers/login';
import Games from './containers/games';
import Game1Attribute from "./components/Game1Attribute";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <div className="App">
                Hola Deliss
                <Route exact path="/" component={Mylogin}/>
                <Route exact path='/games' component={Games}/>
                <Route exact path="/game-attributes" component={Game1Attribute} />
            </div>
            </BrowserRouter>
        );
    }
}

export default App;

// function App(props) {
//     console.log('App props', props);
//     return (
//         <div className="App">
//             Hola deliss me
//             <Login/>
//             <Juegos/>
//         </div>
//     );
// }

