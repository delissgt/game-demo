import React, { Component } from "react";
import {Steps, Button, message, Space} from "antd";
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import ShowPdf from "../showPdf/showPdf";
import introduction from "../../assets/Story/Story-p5-method.pdf";
import buildUp from "../../assets/Story/Story-p6-method.pdf";
import climax from "../../assets/Story/Story-p7-method.pdf";
import finish from "../../assets/Story/Story-p8-method.pdf";
import {checkTokenValid, refreshToken} from "../../Helpers/TokenValid";
import {Link} from "react-router-dom";
import AppropriateMethods from "./AppropriateMethod";
import AppliedMethods from "./AppliedMethods";
import SetGetMethods from "./SetGetMethods";

const {Step} = Steps;

class methods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            currentText: "Siguiente",
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({current});
    }

    steps = [
        {
            title: "Carro",
            content: (
                <ShowPdf
                    storyFile={introduction}
                    // storyFile={comic1}
                    titleColor={"linear-gradient(90deg, rgba(249,248,113,1) 0%, rgba(144,244,137,1) 100%)"}
                />
            ),
        },
        {
            title: "Es o no es",
            content: <AppropriateMethods titleColor={"linear-gradient(90deg, rgba(144,244,137,1) 0%, rgba(0,230,187,1) 100%)"}  parentHistory={this.props.history} />,
        },
        {
            title: "Métodos",
            content: (
                <ShowPdf
                    storyFile={buildUp}
                    titleColor={"linear-gradient(90deg, rgba(0,230,187,1) 0%, rgba(0,209,237,1) 100%)"}
                />
            ),
        },
        {
            title: "Que hace mi clase",
            content: <AppliedMethods titleColor={"linear-gradient(90deg, rgba(0,209,237,1) 0%, rgba(0,181,255,1) 100%)"} parentHistory={this.props.history} />,
        },
        {
            title: "Set o Get",
            content: (
                <ShowPdf
                    storyFile={climax}
                    titleColor={"linear-gradient(90deg, rgba(0,181,255,1) 0%, rgba(24,144,255,1) 100%)"}
                />
            ),
        },
        {
            title: "ZooPlus",
            content: <SetGetMethods titleColor={"linear-gradient(90deg, rgba(24,144,255,1) 0%, rgba(103,125,233,1) 100%)"} parentHistory={this.props.history} />,
        },
        {
            title: "Show",
            content: (
                <ShowPdf
                    storyFile={finish}
                    titleColor={"linear-gradient(90deg, rgba(103,125,233,1) 0%, rgba(134,107,206,1) 100%)"}
                />
            ),
        },
    ];


    render() {
        const { current } = this.state;
        window.scroll(0,0);

        if(checkTokenValid() == false) {
            refreshToken(this.props.history, ()=>{});
        }

        return (
            <div style={{ padding: 20 }}>
                <div style={{ display: "inline-flex", "justify-content": "space-between" }}>
                    <Space>
                        <Steps current={current}>
                            {this.steps.map(item => (<Step key={item.title} title={item.title}/>))}
                        </Steps>
                    </Space>
                </div>

                <div
                    id="contentGameMethods"
                    className="steps-content"
                    style={{
                        padding: 20,
                        backgroundImage: "linear-gradient(0deg, rgba(226,240,255,1) 0%, rgba(250,250,250,1) 100% )",
                    }}
                >
                    {this.steps[current].content}
                </div>
                <div className={"steps-action"}>
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

export default methods;
