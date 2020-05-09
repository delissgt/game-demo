import React, {Component} from "react";
import {Steps, Button, message} from "antd";
import DobleCards from "./DobleCards";
import Impostor from "./Impostor";
import ShowPdf from "../showPdf/showPdf";
import introductionStory from "../../assets/Story/Story-Introduction.pdf";
import buildUpStory from "../../assets/Story/Story-BuildUp.pdf";
import {checkTokenValid, refreshToken} from "../../Helpers/TokenValid";
import AttributeExercise from "./AttributeExercise";
import AttributeTest from "./AttributeTest";
import AttributeTestMedium from "./AttributeTestMedium";
import AttributeDifficult from "./AttributeDifficult";
import '../steps.css';

import {Link} from 'react-router-dom';


const {Step} = Steps;


const steps=[
    {
        title: 'Introducción',
        // content: <img alt='attribute definition and example' src={definition}/> ,
        content: <ShowPdf instructions={"Lee la historia del juego te ayudará para puedas a ganar los juegos. Animo !"}  storyFile={introductionStory} />,
    },
    {
        title: 'Cartas Dobles',
        // content: <AttributeExercise/>,
        content: <DobleCards/>
    },
    {
        title: 'Desarrollo',
        content: <ShowPdf instructions={"Lee la historia del juego te ayudará para puedas a ganar los juegos. Animo !"}  storyFile={buildUpStory} />,
    },
    {
        title: 'Impostor',
        content: <Impostor/>,
        // content: <AttributeTestMedium/>,
    },
    {
        title: 'Nivel Difícil',
        content: <AttributeDifficult/>,
    }
];

class Attribute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            currentText: "Siguiente"
        }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({current});
        this.setState({currentText: "Saltar"})
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }


    render() {

        const { current } = this.state;
        window.scrollTo(0,0);

        if (checkTokenValid() === false) {
            refreshToken(this.props.history);
        }

        return(
            <div style={{ 'padding': 20 }}>
                <Steps current={current}>
                    {steps.map(item => ( <Step
                            key={item.title}
                            title={item.title}
                        />
                    ))}
                </Steps>
                {/*<div className="steps-content">{steps[current].content}</div>*/}
                <div
                    id="contentGameAttributes"
                    className="steps-content"
                    style={{ 'padding': 20, backgroundColor: "#fff3e6",
                    backgroundImage: "linear-gradient(90deg, rgba(255, 188, 31, 0.11) 50%, transparent 50%), linear-gradient(rgba(232, 173, 61, 0.22) 50%, #0000 50%",
                    backgroundSize: "50px 50px" }}
                >{steps[current].content}</div>

                <div className="steps-action">

                    {current > 0 && (
                        <Button style={{ marginRight: 16 , width: "45%"}}  size="large" onClick={()=> this.prev()}>
                            Anterior solo demo
                        </Button>
                    )}

                    {current < steps.length - 1 && (
                        <Button  size="large" style={{width: "45%"}}  onClick={() => this.next()} type="primary" ghost>{this.state.currentText}</Button>
                    )}

                    {current === steps.length - 1 && (
                        <Link to={'/games'}>
                        <Button  size="large"
                                onClick={() => message.success('Nivel Completado!!')}>
                            Al fin !!!
                        </Button>
                        </Link>
                    )}
                </div>
            </div>
        )
    }

}

export default Attribute;
