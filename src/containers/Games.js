import React, {Component} from "react";
import SideNavigation from "../components/SideNavigation";
import Cards from "../components/Cards/Cards";

import {checkTokenValid, refreshToken} from "../Helpers/TokenValid";

import {DataGames} from "../utils/HttpRequestGame";

class Games extends Component {

    rateValue = 5;
    rateValue2 = 2;

    state = {
        games: [
            {id:1, title:'Atributos', description:'Aprenderas Atributos', gamePage:'/games/attributes', buttonStatus: this.rateValue },
            {id:2, title:'Metodos', description:'Aprenderas Metodos', gamePage:'#', buttonStatus: this.rateValue2 },
            // {id:2, title:'Metodos', description:'Aprenderas Metodos', gamePage:'/games/methods', buttonStatus: this.rateValue2 },
        ],
        loading: true,
    };


    setGames = (games) => {
        this.setState({'games2': games});
        this.setState({'loading': false});
    };


    componentDidMount() {
        DataGames(this.setGames)
        // DataGames((games) => {
        //     this.setState({'games2': games});
        //     this.setState({'loading': false});
        // })
    }

    render() {
        console.log('render Games...');
        if (checkTokenValid() === false) {
            refreshToken(this.props.history);
        }

        const {games2} = this.state;

        return (
            this.state.loading === true ? <h2>Loading...</h2> :
            <SideNavigation currentKey="1">
                <Cards games={games2}/>
            </SideNavigation>
        )
    }
}

export default Games;