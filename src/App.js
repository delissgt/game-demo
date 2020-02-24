import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Login from './containers/Login';
import Games from './containers/Games';
import Attribute from "./components/GameAttribute/Attribute";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <div className="App">
                {/*Hola Deliss*/}
                <Route exact path="/" component={Login}/>
                <Route exact path='/games' component={Games}/>
                <Route exact path="/games/attributes" component={Attribute} />
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

