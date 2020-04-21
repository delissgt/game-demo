import React from "react";
// import introductionStory from "../../assets/attributes/Introduction.pdf"
const showPdf = (props) => {
    console.log('PROPS EN SHOW PDF', props);

    return(
        <div>
            <h2>
                {props.instructions}
            </h2>
            <embed src={props.storyFile} width="90%" height="900rem"/>
        </div>
    )
};

export default showPdf;