import React, { useEffect, useState } from "react";
import { Row, Col, Card, Radio, Divider, notification, Button } from "antd";
import CodeMirror from "react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import { MehOutlined } from "@ant-design/icons";
import { AttributeGame } from "../../utils/HttpRequestGame";
import ConfettiComponent from "../ConfettiComponent";
import "./style.css";
import {validationKey} from "../../Helpers/ValidationKey";

const Review = props => {
    const [size] = useState(localStorage.getItem("size"));
    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [answer3, setAnswer3] = useState(0);
    const [showConfetti, setConfetti] = useState(false);

    const handleClick = () => {
        if (answer1 === 0 || answer2 === 0 || answer3 === 0) {
            notification.open({
                message: "Contesta TODAS las Preguntas",
                icon: <MehOutlined style={{ color: "#FA541C" }} />,
            });
        } else {
            let game = {
                game_section: "attribute",
                game_level: "game3",
                user_answer: {
                    A1: answer1,
                    A2: answer2,
                    A3: answer3,
                },
            };

            AttributeGame(game, props.parentHistory, setConfetti);
        }
    };

    useEffect(() => {
        window.addEventListener("keyup", (event)  => {validationKey(event, setAnswer1, setAnswer2, setAnswer3)}, false);
    }, []);

    const code1 = `class Carnivoro = {
                    constructor(cantidad, peso, salud){
                        this.cantidad_carne = cantidad;
                        this.peso = peso;
                        this.salud = salud;
                    }
                  }`;

    const code2 = `class Herbivoro = {
                    constructor ( cantidad, dieta, salud, dentadura) {
                        this.cantidad_alimento = cantidad;
                        this.dieta = dieta;
                        this.salud = salud;
                        this.estado_dentadura = dentadura;
                    }
                  }`;

    const code3 = `class Ave = {
                    constructor (temporada_muda, dieta, cantidad_alimento, migratoria) {
                        this.temporada_muda = temporada_muda;
                        this.dieta = dieta;
                        this.cantidad_alimento = cantidad_alimento;
                        this.migratoria = 00migratoria;
                    }
                  }`;

    const options = {
        lineNumbers: true,
        mode: "javascript",
        readOnly: true,
    };

    return (
        <div>
            <div style={{top: 0, position: "fixed", zIndex: 2}}>
                <ConfettiComponent run={showConfetti}/>
            </div>
            <div style={{ background: props.titleColor }}>
                <h1 style={{ color: "white" }}>
                    Indica si el codigo cumple o no con los requerimientos que se indican
                </h1>
                <h2 style={{ color: "white" }}>
                    Lee los requerimientos luego identifica los atributos que se necesitan para cada clase de animal.
                    Revisa si es codigo de la derecha tiene los atributos que se piden.
                </h2>
            </div>

            <Col span={12}>
                <Button
                    type="primary"
                    size={"large"}
                    onClick={() => {
                        handleClick();
                    }}
                    className={"button-check-answer"}
                    id={"buttonSendAnswers"}
                >
                    Revisar Respuestas
                </Button>
            </Col>

            <Divider />

            <Row gutter={16}>
                <Col span={6}>
                    <Card title="Carnivoros">
                        <p>
                            Del animal se necesita conocer: <br />
                            la cantidad de carne que come al día, su fecha de nacimiento, peso y su estado de salud
                        </p>
                    </Card>
                </Col>

                <Col span={6}>
                    <Radio.Group
                        value={answer1}
                        onChange={e => setAnswer1(e.target.value)}
                        size={size}
                        className={"radio-wrapper"}
                    >
                        <Radio.Button value={1} className={"radio-button"} id={"buttonOne"}>
                            Correcto [1]
                        </Radio.Button>
                        <Divider orientation={"horizontal"} />
                        <Radio.Button value={3} className={"radio-button"} id={"buttonThree"}>
                            Incorrecto [3]
                        </Radio.Button>
                    </Radio.Group>
                </Col>

                <Col span={12} className="col-code">
                    <CodeMirror value={code1} options={options} />
                </Col>
            </Row>

            <Divider />

            <Row gutter={16}>
                <Col span={6}>
                    <Card title="Herviboros">
                        <p>
                            De este tipo de animales se necesita conocer los siguientes datos: <br />
                            la cantidad de alimento de consume al día, su dieta, estado de salud, y estado de su
                            dentadura
                        </p>
                    </Card>
                </Col>

                <Col span={6}>
                    <Radio.Group
                        value={answer2}
                        onChange={e => setAnswer2(e.target.value)}
                        size={size}
                        className={"radio-wrapper"}
                    >
                        <Radio.Button value={4} className={"radio-button"} id={"buttonFour"}>
                            Correcto [4]
                        </Radio.Button>
                        <Divider orientation={"horizontal"} />
                        <Radio.Button value={6} className={"radio-button"} id={"buttonSix"}>
                            Incorrecto [6]
                        </Radio.Button>
                    </Radio.Group>
                </Col>

                <Col span={12} className="col-code">
                    <CodeMirror value={code2} options={options} />
                </Col>
            </Row>

            <Divider />

            <Row gutter={16}>
                <Col span={6}>
                    <Card title="Aves">
                        <p>
                            De las aves se necesita guardar: <br />
                            temporada de muda de plumaje, dieta, cantidad de alimento que consume, y si esta ave es
                            migratoria para darle cuidados adecuados
                        </p>
                    </Card>
                </Col>

                <Col span={6}>
                    <Radio.Group
                        value={answer3}
                        onChange={e => setAnswer3(e.target.value)}
                        size={size}
                        className={"radio-wrapper"}
                    >
                        <Radio.Button value={7} className={"radio-button"} id={"buttonSeven"}>
                            Correcto [7]
                        </Radio.Button>
                        <Divider orientation={"horizontal"} />
                        <Radio.Button value={9} className={"radio-button"} id={"buttonNine"}>
                            Incorrecto [9]
                        </Radio.Button>
                    </Radio.Group>
                </Col>

                <Col span={12} className="col-code">
                    <CodeMirror value={code3} options={options} />
                </Col>
            </Row>
        </div>
    );
};

export default Review;
