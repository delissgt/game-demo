import React, {Component} from "react";
import SideNavigation from "../components/SideNavigation";



class Games extends Component{
    state = {
        games: [
            {id:1, title:'Atributos', description:'Aprenderas Atributos', gamePage:'/games/attributes'},
            {id:2, title:'Metodos', description:'Aprenderas Metodos', gamePage:'/../games/methods'},
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