import React, {useEffect, useState} from "react";
import {Avatar, Button, Card, Col, Divider, Radio, Row} from "antd";

import leopard from "../../assets/Animals/leopard-48.png";
import lion from "../../assets/Animals/lion-48.png";
import elephant from "../../assets/Animals/elephant-48.png";
import kangaroo from "../../assets/Animals/kangaroo-48.png";
import parrot from "../../assets/Animals/parrot-48.png";
import flamingo from "../../assets/Animals/flamingo-48.png";

import "./style.css";

const {Meta} = Card;

const Impostor = () => {

    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [answer3, setAnswer3] = useState(0);

    const [buttonState1, setButton1] = useState(false);
    const [buttonState3, setButton3] = useState(false);
    const [buttonState4, setButton4] = useState(false);
    const [buttonState6, setButton6] = useState(false);
    const [buttonState7, setButton7] = useState(false);
    const [buttonState9, setButton9] = useState(false);

    useEffect( () => {
        window.addEventListener("keyup", validateKey, false)
    }, [answer1]);

    const validateKey = (event) => {
        let e;
        event.key ? e=event.key : e = event.toString();

        switch (e) {
            case "1":
                setAnswer1(1);
                setButton1(true);
                setButton3(false);
                break;
            case "3":
                setAnswer1(3);
                setButton1(false);
                setButton3(true);
                break;
            case "4":
                setAnswer2(4);
                setButton4(true);
                setButton6(false);
                break;
            case "6":
                setAnswer2(6);
                setButton4(false);
                setButton6(true);
                break;
            case "7":
                setAnswer3(7);
                setButton7(true);
                setButton9(false);
                break;
            case "9":
                setAnswer3(9);
                setButton7(false);
                setButton9(true);
                break;
            default:
                console.log('no hacer nada');
                break;

        }
    };

    const handleClick = () => {
      console.log ("respuestas");
      console.log('1', answer1);
      console.log('2', answer2);
      console.log('3', answer3);
      let answer = {
          AttributesUserAnswerGame2 : {
              answer1: answer1,
              answer2: answer2,
              answer3: answer3,
          }
      };
      console.log('ANSWER send to endpoint', answer);


    };

    return(
        <div>
            <h1 style={{ backgroundColor: "#fa563c" }}>
                Seleccina la mejor tarjeta que represente a cada grupo de animales.
            </h1>
            <h2 style={{ backgroundColor: "#fa563c" }}>
                Oopss.. Parece que el Sr. Pancho tenia sueño de verdad.
                Revisa las tarjetas, algunas de ellas tienen atributos que no son importantes o no deberian de estar.
                Al final da click para revisar tus respuestas. Animo !
            </h2>
            <Col span={12}>
                    <Button type="primary" size={"large"} onClick={() => {handleClick()}}
                        className={'button-check-answer'}
                    >Revisar Respuestas</Button>
            </Col>

            <Divider><h3>Carnivoros</h3></Divider>

            <Row gutter={16}>
                <Col span={8}>
                    <Card style={{ width:300 }}>
                        <Meta
                            avatar={<Avatar src={lion}/>}
                            title="Leon"
                        />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: carnívoro</p>
                        <p>genero: hembra</p>
                        <p>tamaño: 1.4  metros</p>
                        <p>peso: 300 kg</p>
                        <p>habitat natural: sabana</p>
                        <Divider  style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 1</p>
                    </Card>
                </Col>

                    <Col span={8}>
                        <Radio.Group onChange={e => setAnswer1(e.target.value) || validateKey(e.target.value)} size={"large"}>
                            <Radio.Button value={1} checked={buttonState1}>
                                Tarjeta 1
                            </Radio.Button>
                            <Divider type="vertical" />
                            <Divider type="vertical" />
                            <Radio.Button value={3} checked={buttonState3}>
                                Tarjeta 3
                            </Radio.Button>
                        </Radio.Group>
                    </Col>

                <Col span={8}>
                    <Card style={{ width:300 }}>
                        <Meta
                            avatar={<Avatar src={leopard} />}
                            title="Leopardo"
                        />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: carnívoro</p>
                        <p>genero: hembra</p>
                        <p>tamaño: 1.8  metros</p>
                        <p>postre: pastel</p>
                        <p>habitat natural: sabana</p>
                        <Divider  style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 2</p>
                    </Card>
                </Col>
            </Row>

            <Divider>Herviboros</Divider>

            <Row gutter={16}>
                <Col span={8}>
                    <Card style={{ width:300 }}>
                        <Meta
                            avatar={<Avatar src={elephant} />}
                            title="Elefante"
                        />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: herbívoro</p>
                        <p>genero: hembra</p>
                        <p>tamaño: 1.8  metros</p>
                        <p>características: larga trompa y enormes orejas</p>
                        <p>habitat natural: sabana</p>
                        <Divider  style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 4</p>
                    </Card>
                </Col>

                <Col span={8}>
                    <Radio.Group onChange={e => setAnswer2(e.target.value) || validateKey(e.target.value)} size={"large"}>

                        <Radio.Button value={4} checked={buttonState4}>
                            Tarjeta 4
                        </Radio.Button>

                        <Divider type="vertical" /> <Divider type="vertical" />

                        <Radio.Button value={6} checked={buttonState6}>
                            Tarjeta 6
                        </Radio.Button>
                    </Radio.Group>
                </Col>

                <Col span={8}>
                    <Card style={{ width:300 }}>
                        <Meta
                            avatar={<Avatar src={kangaroo}/>}
                            title="Kanguro"
                        />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: herbívoro</p>
                        <p>genero: hembra</p>
                        <p>juego favorito: correr</p>
                        <p>tamaño: 3.4  metros</p>
                        <p>habitat natural: bosques, sabana y pastizales </p>
                        <Divider  style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 6</p>
                    </Card>
                </Col>
            </Row>

            <Divider>Aves</Divider>


            <Row gutter={16}>
                <Col span={8}>
                    <Card style={{ width:300 }}>
                        <Meta
                            avatar={<Avatar src={parrot} />}
                            title="Guacamayo Rojo"
                        />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: manzana, avellanas, trigo</p>
                        <p>genero: hembra</p>
                        <p>peso: 1.500 gramos</p>
                        <p>tamaño: 1.8  metros</p>
                        <p>lengua materna: español</p>
                        <p>habitat natural: sabana</p>
                        <Divider  style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 7</p>
                    </Card>
                </Col>

                <Col span={8}>
                    <Radio.Group onChange={e => setAnswer3(e.target.value) || validateKey(e.target.value)} size={"large"}>

                        <Radio.Button value={7} checked={buttonState7}>
                            Tarjeta 7
                        </Radio.Button>

                        <Divider type="vertical" /> <Divider type="vertical" />

                        <Radio.Button value={9} checked={buttonState9}>
                            Tarjeta 9
                        </Radio.Button>
                    </Radio.Group>
                </Col>

                <Col span={8}>
                    <Card style={{ width:300 }}>
                        <Meta
                            avatar={<Avatar src={flamingo}/>}
                            title="Flamingo"
                        />
                        <Divider dashed style={{ borderWidth: "2px 0 0" }} />
                        <p>alimentación: semillas, algas, crustaceos y moluscos</p>
                        <p>características: cuello targo y plumaje rosado</p>
                        <p>genero: hembra</p>
                        <p>peso: 250 kg</p>
                        <p>comportamiento: realiza actividades en grupo</p>
                        <Divider  style={{ borderWidth: "2px 0 0" }} />
                        <p>Tarjeta 9</p>
                    </Card>
                </Col>
            </Row>

        </div>

    )
};

export default Impostor;