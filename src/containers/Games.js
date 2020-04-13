import React, {Component} from "react";
import SideNavigation from "../components/SideNavigation";
import Cards from "../components/Cards/Cards";

import {checkTokenValid, refreshToken} from "../Helpers/TokenValid";


class Games extends Component {
    state = {
        games: [
            {id:1, title:'Atributos', description:'Aprenderas Atributos', gamePage:'/games/attributes', buttonStatus: false },
            {id:2, title:'Metodos', description:'Aprenderas Metodos', gamePage:'/games/methods', buttonStatus: true },
        ]
    };


    render() {
        console.log('render Games...');
        if (checkTokenValid() === false) {
            refreshToken(this.props.history);
        }

        return (
            <SideNavigation currentKey="1">
                <Cards games={this.state.games}/>
            </SideNavigation>
        )
    }
}

export default Games;