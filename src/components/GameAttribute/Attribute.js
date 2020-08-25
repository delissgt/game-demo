import React, { Component } from "react";
import { Steps, Button, message, Space } from "antd";
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import DobleCards from "./DobleCards";
import Impostor from "./Impostor";
import Review from "./Review";
import ShowPdf from "../showPdf/showPdf";
import introductionStory from "../../assets/Story/Story-Introduction.pdf";
import buildUpStory from "../../assets/Story/Story-BuildUp.pdf";
import climaxStory from "../../assets/Story/Story-Climax.pdf";
import { checkTokenValid, refreshToken } from "../../Helpers/TokenValid";
// import AttributeExercise from "./AttributeExercise"; TODO DELETE FILE

// import AttributeTestMedium from "./AttributeTestMedium"; TODO DELETE FILE
// import AttributeDifficult from "./AttributeDifficult"; TODO DELETE FILE
import "../steps.css";

import Speech from "../RecognitionVoice/RecognitionVoice";

import { Link } from "react-router-dom";

const { Step } = Steps;

class Attribute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            currentText: "Siguiente",
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
        // this.setState({currentText: "Sa"})
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    steps = [
        {
            title: "Idea",
            content: (
                <ShowPdf
                    storyFile={introductionStory}
                    titleColor={"linear-gradient(90deg, rgba(249,248,113,1) 0%, rgba(144,244,137,1) 100%)"}
                />
            ),
        },
        {
            title: "Cartas Dobles",
            content: <DobleCards titleColor={"linear-gradient(90deg, rgba(144,244,137,1) 0%, rgba(0,230,187,1) 100%)"}  parentHistory={this.props.history} />,
        },
        {
            title: "Mas atributos",
            content: (
                <ShowPdf
                    storyFile={buildUpStory}
                    titleColor={"linear-gradient(90deg, rgba(0,230,187,1) 0%, rgba(0,209,237,1) 100%)"}
                />
            ),
        },
        {
            title: "Impostor",
            content: <Impostor titleColor={"linear-gradient(90deg, rgba(0,209,237,1) 0%, rgba(0,181,255,1) 100%)"} parentHistory={this.props.history} />,
        },
        {
            title: "De-Soft",
            content: (
                <ShowPdf
                    storyFile={climaxStory}
                    titleColor={"linear-gradient(90deg, rgba(0,181,255,1) 0%, rgba(24,144,255,1) 100%)"}
                />
            ),
        },
        {
            title: "Revisando ando",
            content: <Review titleColor={"linear-gradient(90deg, rgba(24,144,255,1) 0%, rgba(103,125,233,1) 100%)"} parentHistory={this.props.history} />,
        },
        {
            title: "Fiesta",
            content: (
                <ShowPdf
                    storyFile={climaxStory}
                    titleColor={"linear-gradient(90deg, rgba(103,125,233,1) 0%, rgba(134,107,206,1) 100%)"}
                />
            ),
        },
    ];

    render() {
        const { current } = this.state;
        window.scrollTo(0, 0);

        if (checkTokenValid() === false) {
            refreshToken(this.props.history, ()=>{});
        }

        return (
            <div style={{ padding: 20 }}>
                <div style={{ display: "inline-flex", "justify-content": "space-between" }}>
                    <Space >
                    <Button href={"/games"} shape={"circle"} icon={<HomeOutlined />} size={"large"} type={"primary"} ghost />

                    <Steps current={current}>
                        {this.steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                    </Space>
                </div>
                {/*<div className="steps-content">{steps[current].content}</div>*/}
                <div
                    id="contentGameAttributes"
                    className="steps-content"
                    style={{
                        padding: 20,
                        backgroundImage: "linear-gradient(0deg, rgba(226,240,255,1) 0%, rgba(250,250,250,1) 100% )",
                    }}
                >
                    {this.steps[current].content}
                </div>

                <div className="steps-action">
                    {current > 0 && (
                        <Button style={{ marginRight: 16, width: "49%" }} size="large" onClick={() => this.prev()} >
                            Anterior solo demo
                        </Button>
                    )}

                    {current < this.steps.length - 1 && (
                        <Button
                            size="large"
                            style={{ width: "49%" }}
                            onClick={() => this.next()}
                            type="primary"
                            id={"buttonNextStep"}
                        >
                            {this.state.currentText}
                        </Button>
                    )}

                    {current === this.steps.length - 1 && (
                        <Link to={"/games"}>
                            <Button
                                size="large"
                                type="primary"
                                id={"buttonFinalStep"}
                                onClick={() => message.success("Fin del Juego!!")}
                            >
                                fin !!!
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

export default Attribute;
