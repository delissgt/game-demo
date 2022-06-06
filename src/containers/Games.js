import React, { Component } from "react";
import SideNavigation from "../components/SideNavigation";
import Cards from "../components/Cards/Cards";
import { Spin } from "antd";
import { checkTokenValid, refreshToken } from "../Helpers/TokenValid";

import { DataGames } from "../utils/HttpRequestGame";
import ConfettiComponent from "../components/ConfettiComponent";

import RecognitionVoice from "../components/RecognitionVoice/RecognitionVoice";

class Games extends Component {
    state = {
        loading: true,
    };

    setGames = games => {
        this.setState({ games: games });
        this.setState({ loading: false });
    };

    componentDidMount() {
        if (checkTokenValid() === false) {
            refreshToken(this.props.history, () => {DataGames(this.setGames)})
        }else{
            DataGames(this.setGames);
        }
    }

    render() {
        const { games, loading } = this.state;

        return loading === true ? (
            <div style={SpinStyle.spincontainer}>
                <Spin tip="Cargando Juegos ..." size={"large"} style={SpinStyle.spin} />
            </div>
        ) : (
            <SideNavigation currentKey="1">
                <ConfettiComponent/>
                <Cards games={games} />
            </SideNavigation>
        );
    }
}

export default Games;

const SpinStyle = {
    spincontainer: {
        height: "100%",
        width: "100%",
        padding: "24px",
        alignItems: "center",
    },
    spin: {
        textAlign: "center",
        marginBottom: "50px",
        padding: "30px 50px",
        margin: "40px 0",
    },
};
