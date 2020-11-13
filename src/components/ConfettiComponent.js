import React from "react";
// import { Modal } from "antd";

//TODO confetti
// import Confetti from "react-confetti/dist/types/Confetti";
import ReactConfetti from "react-confetti";

const ConfettiComponent = () => {
    const {widthWindow, heightWindow } = "100%";

    return (
        <ReactConfetti
            width={widthWindow}
            height={heightWindow}
            recycle={false}
            numberOfPieces={500}
        />
    )

};


export default ConfettiComponent;