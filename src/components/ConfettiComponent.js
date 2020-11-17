import React  from "react";
import {useWindowSize} from "react-use";

//TODO confetti
// import Confetti from "react-confetti/dist/types/Confetti";
import ReactConfetti from "react-confetti";

const ConfettiComponent = (props) => {
    const {width, height } = useWindowSize();

    return (
        <ReactConfetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            run={props.run}
        />
    )

};


export default ConfettiComponent;