import React, { useEffect, useState } from "react";
import { Card, Divider, Col, Row, Button, Radio, notification } from "antd";
import { MehOutlined, SmileOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import { Avatar } from "antd/es";

import Lion from "../../assets/Animals/lion-48.png";
import Tiger from "../../assets/Animals/tiger-face-48.png";
import Leopard from "../../assets/Animals/leopard-48.png";
import Giraffe from "../../assets/Animals/giraffe-48.png";

import { AttributeGame } from "../../utils/HttpRequestGame";

import "./style.css";

const { Meta } = Card;

const DobleCards = props => {
    const [size] = useState(localStorage.getItem("size"));
    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [answer3, setAnswer3] = useState(0);

    const handleClick = () => {
        if (answer1 === 0 || answer2 === 0 || answer3 === 0) {
            notification.open({
                message: "Contesta TODAS las Preguntas",
                icon: <MehOutlined style={{ color: "#FA541C" }} />,
            });
        } else {
            let game = {
                game_level: "game1",
                user_answer: {
                    A1: answer1,
                    A2: answer2,
                    A3: answer3,
                },
            };

            AttributeGame(game);
        }
    };

    useEffect(() => {
        window.addEventListener("keyup", validateKey, false);
    }, []);

    const validateKey = event => {
        let e;
        event.key ? (e = event.key) : (e = event.toString());

        switch (e) {
            case "1":
                setAnswer1(1);
                break;
            case "3":
                setAnswer1(3);
                break;
            case "4":
                setAnswer2(4);
                break;
            case "6":
                setAnswer2(6);
                break;
            case "7":
                setAnswer3(7);
                break;
            case "9":
                setAnswer3(9);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div style={{ background: props.titleColor }}>
                {/*    linear-gradient(90deg, rgba(249,248,113,1) 0%, rgba(144,244,137,1) 100%)*/}
                <h1>Elige la tarjeta correcta de cada par de tarjetas.</h1>
                <h2>
                    Da click en el boton "Revisar mis respuestas" cuando hayas terminado. TIP: El valor del atributo no
                    describe bien a los atributos del animal. Ayudate con la tarjeta del Leon.
                </h2>
            </div>

            <Row gutter={16}>
                <Col span={12}>
                    <Card style={{ width: 300, alignContent: "left" }}>
                        <Meta avatar={<Avatar src={Lion} />} title="Leon" description={"caracteristicas:"} />
                        <Divider dashed />
                        <p>Alimentacion: carnivoro</p>
                        <p>Habitat: sabanas y pastizales</p>
                        <p>Peso: 150.500 kg</p>
                    </Card>
                </Col>
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
            </Row>

            <Divider />
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card style={{ width: 300, alignContent: "left" }}>
                            <Meta avatar={<Avatar src={Tiger} />} title="Tigre" />
                            <Divider dashed />
                            <p>Alimentacion: Carnivoro</p>
                            <p>Habitat: Macho</p>
                            <p>Peso: Falso</p>
                            <Divider style={{ borderWidth: "2px 0 0" }} />
                            <p>Targeta 1</p>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Radio.Group
                            value={answer1}
                            onChange={e => setAnswer1(e.target.value)}
                            size={size}
                            className={"radio-wrapper"}
                        >
                            <Radio.Button value={1} className={"radio-button"} id={"buttonOne"}>
                                Tarjeta 1
                            </Radio.Button>
                            <Divider type={"vertical"} />
                            <Divider type={"vertical"} />
                            <Radio.Button value={3} className={"radio-button"} id={"buttonThree"}>
                                Tarjeta 3
                            </Radio.Button>
                        </Radio.Group>
                    </Col>

                    <Col span={8}>
                        <Card style={{ width: 300, alignContent: "left" }}>
                            <Meta avatar={<Avatar src={Tiger} />} title="Tigre" />
                            <Divider dashed />
                            <p>Alimentacion: Carnivoro</p>
                            <p>Habitat: Selvas tropicales, pastizales, sabanas</p>
                            <p>Peso: 200.00 kg</p>
                            <Divider style={{ borderWidth: "2px 0 0" }} />
                            <p>Tarjeta 3</p>
                        </Card>
                    </Col>
                </Row>

                <Divider />

                <Row gutter={16}>
                    <Col span={8}>
                        <Card style={{ width: 300, alignContent: "left" }}>
                            <Meta avatar={<Avatar src={Leopard} />} title="Leopardo" />
                            <Divider dashed />
                            <p>Alimentacion: Omnívoro</p>
                            <p>Habitat: Selvas tropicales, pastizales, sabanas</p>
                            <p>Peso: 8 meses</p>
                            <Divider style={{ borderWidth: "2px 0 0" }} />
                            <p>Tarjeta 4</p>
                            {/*<Button onClick={()=> handleClick('1')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Radio.Group
                            value={answer2}
                            onChange={e => setAnswer2(e.target.value)}
                            size={size}
                            className={"radio-wrapper"}
                        >
                            <Radio.Button value={4} className={"radio-button"} id={"buttonFour"}>
                                Tarjeta 4
                            </Radio.Button>
                            <Divider type={"vertical"} />
                            <Divider type={"vertical"} />
                            <Radio.Button value={6} className={"radio-button"} id={"buttonSix"}>
                                Tarjeta 6
                            </Radio.Button>
                        </Radio.Group>
                    </Col>

                    <Col span={8}>
                        <Card style={{ width: 300, alignContent: "left" }}>
                            <Meta avatar={<Avatar src={Leopard} />} title="Leopardo" />
                            <Divider dashed />
                            <p>Alimentacion: Carnivoro</p>
                            <p>Habitat: Selvas tropicales, pastizales, sabanas</p>
                            <p>Peso: 200.00 kg</p>
                            <Divider style={{ borderWidth: "2px 0 0" }} />
                            <p>Tarjeta 6</p>
                        </Card>
                    </Col>
                </Row>

                <Divider />

                <Row gutter={16}>
                    <Col span={8}>
                        <Card style={{ width: 300, alignContent: "left" }}>
                            <Meta avatar={<Avatar src={Giraffe} />} title="Girafa" />
                            <Divider dashed />
                            <p>Alimentacion: Herviboro</p>
                            <p>Habitat: Sabanas, bosques y campos africanos</p>
                            <p>Peso: 190.00 kg</p>
                            <Divider style={{ borderWidth: "2px 0 0" }} />
                            <p>Tarjeta 7</p>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Radio.Group
                            value={answer3}
                            onChange={e => setAnswer3(e.target.value)}
                            size={size}
                            className={"radio-wrapper"}
                        >
                            <Radio.Button value={7} className={"radio-button"} id={"buttonSeven"}>
                                Tarjeta 7
                            </Radio.Button>
                            <Divider type={"vertical"} />
                            <Divider type={"vertical"} />
                            <Radio.Button value={9} className={"radio-button"} id={"buttonNine"}>
                                Tarjeta 9
                            </Radio.Button>
                        </Radio.Group>
                    </Col>

                    <Col span={8}>
                        <Card style={{ width: 300, alignContent: "left" }}>
                            <Meta avatar={<Avatar src={Giraffe} />} title="Girafa" />
                            <Divider dashed />
                            <p>Alimentacion: Carnívoro</p>
                            <p>Habitat: Sabanas, bosques y campos africanos</p>
                            <p>Peso: 190.0.0 kg</p>
                            <Divider style={{ borderWidth: "2px 0 0" }} />
                            <p>Tarjeta 9</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default DobleCards;
