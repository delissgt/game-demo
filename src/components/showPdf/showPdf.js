import React from "react";
const showPdf = props => {
    // console.log("PROPS EN SHOW PDF", props);

    return (
        <div>
            <h1 style={{ background: props.titleColor }}>
                Lee la historia te ayudará para que puedas GANAR los juegos. Animo !
            </h1>
            <embed src={props.storyFile} width="90%" height="900rem" />
        </div>
    );
};

export default showPdf;
