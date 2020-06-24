import React, {Component} from "react";
import SideNavigation from "../components/SideNavigation";
import Cards from "../components/Cards/Cards";

import {checkTokenValid, refreshToken} from "../Helpers/TokenValid";

import {DataGames} from "../utils/HttpRequestGame";

class Games extends Component {

    state = {
        loading: true,
    };


    setGames = (games) => {
        this.setState({'games': games});
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

        const {games} = this.state;

        return (
            this.state.loading === true ? <h2>Loading...</h2> :
            <SideNavigation currentKey="1">
                <Cards games={games}/>
            </SideNavigation>
        )
    }
}

export default Games;