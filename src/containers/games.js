import React, {Component} from "react";
// import {Link} from 'react-router-dom';
import SideNavigation from "../components/SideNavigation";



class Games extends Component{
    state = {
        games: [
            {id:1, title:'Atributos', description:'Aprenderas Atributos', gamePage:'/game-attributes'},
            {id:2, title:'Metodos', description:'Aprenderas Metodos', gamePage:'/../game/metodos'},
        ]
    };

    render() {
        return (
            <div>
                {/*<h1>Pagina de Juegos</h1>*/}
                <SideNavigation games={this.state.games} />


            </div>
        )
    }
}

export default Games