import React, { Component } from "react";
import SideNavigation from "../components/SideNavigation";
import Cards from "../components/Cards/Cards";
import { Spin } from "antd";
import { checkTokenValid, refreshToken } from "../Helpers/TokenValid";

import { DataGames } from "../utils/HttpRequestGame";

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
        DataGames(this.setGames);
        // DataGames((games) => {
        //     this.setState({'games2': games});
        //     this.setState({'loading': false});
        // })
    }

    render() {
        console.log("render Games...");
        if (checkTokenValid() === false) {
            refreshToken(this.props.history);
        }

        const { games } = this.state;

        return this.state.loading === true ? (
            <div style={SpinStyle.spincontainer}>
                <Spin tip="Cargando Juegos ..." size={"large"} style={SpinStyle.spin} />
            </div>
        ) : (
            <SideNavigation currentKey="1">
                {/*<RecognitionVoice/>*/}
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
