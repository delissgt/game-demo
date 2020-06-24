import React, {Component} from "react";
import {Steps, Button, message} from "antd";
import DobleCards from "./DobleCards";
import Impostor from "./Impostor";
import Review from "./Review";
import ShowPdf from "../showPdf/showPdf";
import introductionStory from "../../assets/Story/Story-Introduction.pdf";
import buildUpStory from "../../assets/Story/Story-BuildUp.pdf";
import climaxStory from "../../assets/Story/Story-Climax.pdf";
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
        title: 'Idea',
        // content: <img alt='attribute definition and example' src={definition}/> ,
        content: <ShowPdf storyFile={introductionStory}  titleColor = {"linear-gradient(90deg, rgba(249,248,113,1) 0%, rgba(144,244,137,1) 100%)"} />
    },
    {
        title: 'Cartas Dobles',
        // content: <AttributeExercise/>,
        content: <DobleCards titleColor = {"linear-gradient(90deg, rgba(144,244,137,1) 0%, rgba(0,230,187,1) 100%)"} />
    },
    {
        title: 'Mas atributos',
        content: <ShowPdf storyFile={buildUpStory} titleColor={"linear-gradient(90deg, rgba(0,230,187,1) 0%, rgba(0,209,237,1) 100%)"} />,
    },
    {
        title: 'Impostor',
        content: <Impostor titleColor={"linear-gradient(90deg, rgba(0,209,237,1) 0%, rgba(0,181,255,1) 100%)"} />,
        // content: <AttributeTestMedium/>,
    },
    {
        title: 'De-Soft',
        content: <ShowPdf storyFile={climaxStory} titleColor={"linear-gradient(90deg, rgba(0,181,255,1) 0%, rgba(24,144,255,1) 100%)"} />
    },
    {
        title: 'Revisando ando',
        // content: <AttributeDifficult/>,
        content: <Review titleColor={"linear-gradient(90deg, rgba(24,144,255,1) 0%, rgba(103,125,233,1) 100%)"} />,
    },
    {
        title: 'Fiesta',
        // content: <AttributeDifficult/>,
        content: <ShowPdf storyFile={climaxStory} titleColor={"linear-gradient(90deg, rgba(103,125,233,1) 0%, rgba(134,107,206,1) 100%)"} />,
    }
    // {
    //     title: 'Nivel Difícil',
    //     // content: <AttributeDifficult/>,
    //     content: <Review titleColor={"linear-gradient(90deg, rgba(134,107,206,1) 0%, rgba(151,89,177,1) 100%)"} />,
    // }
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
                    style={{ 'padding': 20,
                    backgroundImage: "linear-gradient(0deg, rgba(226,240,255,1) 0%, rgba(250,250,250,1) 100% )",
                    }}
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
