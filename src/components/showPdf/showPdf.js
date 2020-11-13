import React from "react";
import ConfettiComponent from "../ConfettiComponent";
const showPdf = props => {
    // console.log("PROPS EN SHOW PDF", props);

    return (
        <div>
            <ConfettiComponent/>
            <h1 style={{ background: props.titleColor }}>
                Lee la historia te ayudará para que puedas GANAR los juegos. Animo !
            </h1>
            <embed src={props.storyFile} width="90%" height="900rem" />
        </div>
    );
};

export default showPdf;
