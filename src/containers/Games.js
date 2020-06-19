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
        games2: ''
    };

    // componentDidMount() {
    //     const asincronia = () => {
    //         let promise = new Promise((resolve, reject) => {
    //             const g = DataGames();
    //             if (g !== ''){
    //                 console.log('g tiene algo');
    //                 console.log('g', g);
    //                 console.log('re', resolve(g));
    //             } else {
    //                 console.log('nope')
    //             }
    //         });
    //
    //         return promise;
    //         };
    //
    //     asincronia(DataGames)
    //         .then(respuesta => console.log('respuesta', respuesta))
    //         .catch(error => console.log('error', error))
    //
    // }


    render() {
        console.log('render Games...');
        if (checkTokenValid() === false) {
            refreshToken(this.props.history);
        }
        const f = DataGames();
        console.log('f', f);

        return (
            <SideNavigation currentKey="1">
                <Cards games={this.state.games}/>
                {/*<Cards games={this.getGames} />*/}
            </SideNavigation>
        )
    }
}

export default Games;