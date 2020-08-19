import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Col, Divider, notification, Radio, Row } from "antd";

import leopard from "../../assets/Animals/leopard-48.png";
import lion from "../../assets/Animals/lion-48.png";
import elephant from "../../assets/Animals/elephant-48.png";
import kangaroo from "../../assets/Animals/kangaroo-48.png";
import parrot from "../../assets/Animals/parrot-48.png";
import flamingo from "../../assets/Animals/flamingo-48.png";

import { AttributeGame } from "../../utils/HttpRequestGame";

import "./style.css";
import { MehOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Impostor = props => {
    const [size] = useState(localStorage.getItem("size"));
    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [answer3, setAnswer3] = useState(0);

    const handleClick = () => {
        console.log('CLICK IMPOSTOR RESPUESTAS');
        if (answer1 === 0 || answer2 === 0 || answer3 === 0) {
            notification.open({
                message: "Contesta TODAS las preguntas",
                icon: <MehOutlined style={{ color: "#FA541C" }} />,
            });
        } else {
            let game = {
                game_level: "game2",
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
        console.log("evento scroll", e);

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
                <h1>Seleccina la tarjeta que mejor represente a cada grupo de animales.</h1>
                <h2>
                    Oopss.. Parece que el Sr. Pancho tenia sueño de verdad. Revisa las tarjetas, algunas de ellas tienen
                    atributos que no son importantes o no deberian de estar. Al final da click para revisar tus
                    respuestas. Animo !
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

            <Divider>
                <h3>Carnivoros</h3>
            </Divider>

            <Row gutter={16}>
                <Col span={8}>
                    <Card style={{ width: 300 }}>
                        <Meta avatar={<Avatar src={lion} />} title="Leon" />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: carnívoro</p>
                        <p>genero: macho</p>
                        <p>tamaño: 1.4 metros</p>
                        <p>peso: 300 kg</p>
                        <p>habitat natural: sabana</p>
                        <Divider style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 1</p>
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
                        <Divider type="vertical" />
                        <Divider type="vertical" />
                        <Radio.Button value={3} className={"radio-button"} id={"buttonThree"}>
                            Tarjeta 3
                        </Radio.Button>
                    </Radio.Group>
                </Col>

                <Col span={8}>
                    <Card style={{ width: 300 }}>
                        <Meta avatar={<Avatar src={leopard} />} title="Leopardo" />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: carnívoro</p>
                        <p>genero: hembra</p>
                        <p>tamaño: 1.8 metros</p>
                        <p>postre: pastel</p>
                        <p>habitat natural: sabana</p>
                        <Divider style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 2</p>
                    </Card>
                </Col>
            </Row>

            <Divider>Herviboros</Divider>

            <Row gutter={16}>
                <Col span={8}>
                    <Card style={{ width: 300 }}>
                        <Meta avatar={<Avatar src={elephant} />} title="Elefante" />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: herbívoro</p>
                        <p>genero: hembra</p>
                        <p>tamaño: 1.8 metros</p>
                        <p>características: larga trompa y enormes orejas</p>
                        <p>habitat natural: sabana</p>
                        <Divider style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 4</p>
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
                        <Divider type="vertical" /> <Divider type="vertical" />
                        <Radio.Button value={6} className={"radio-button"} id={"buttonSix"}>
                            Tarjeta 6
                        </Radio.Button>
                    </Radio.Group>
                </Col>

                <Col span={8}>
                    <Card style={{ width: 300 }}>
                        <Meta avatar={<Avatar src={kangaroo} />} title="Canguro" />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: herbívoro</p>
                        <p>genero: hembra</p>
                        <p>juego favorito: correr</p>
                        <p>tamaño: 3.4 metros</p>
                        <p>habitat natural: bosques, sabana y pastizales </p>
                        <Divider style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 6</p>
                    </Card>
                </Col>
            </Row>

            <Divider>Aves</Divider>

            <Row gutter={16}>
                <Col span={8}>
                    <Card style={{ width: 300 }}>
                        <Meta avatar={<Avatar src={parrot} />} title="Guacamayo Rojo" />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: manzana, avellanas, trigo</p>
                        <p>genero: hembra</p>
                        <p>peso: 1.500 gramos</p>
                        <p>tamaño: 1.8 metros</p>
                        <p>lengua materna: español</p>
                        <p>habitat natural: sabana</p>
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
                        <Divider type="vertical" /> <Divider type="vertical" />
                        <Radio.Button value={9} className={"radio-button"} id={"buttonNine"}>
                            Tarjeta 9
                        </Radio.Button>
                    </Radio.Group>
                </Col>

                <Col span={8}>
                    <Card style={{ width: 300 }}>
                        <Meta avatar={<Avatar src={flamingo} />} title="Flamingo" />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: semillas, algas, crustaceos y moluscos</p>
                        <p>características: cuello targo y plumaje rosado</p>
                        <p>genero: hembra</p>
                        <p>peso: 250 kg</p>
                        <p>comportamiento: realiza actividades en grupo</p>
                        <Divider style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 9</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Impostor;
