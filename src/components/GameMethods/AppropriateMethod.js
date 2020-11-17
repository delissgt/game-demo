import React, {useEffect, useState} from "react";
import {Divider, Col, Row, Button, notification, Radio} from "antd";
import {MehOutlined, CheckOutlined} from "@ant-design/icons";
import {AttributeGame} from "../../utils/HttpRequestGame";
import {validationKey} from "../../Helpers/ValidationKey";
import CodeMirror from "react-codemirror";
import ConfettiComponent from "../ConfettiComponent";

const AppropriateMethod = props => {

    const [size] = useState(localStorage.getItem("size"));
    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [answer3, setAnswer3] = useState(0);
    const [showConfetti, setConfetti] = useState(false);

    const handleClick = () => {
        if (answer1 === 0 || answer2 === 0 || answer3 === 0){
            notification.open({
                message: "Contesta TODAS las preguntas",
                icon: <MehOutlined style={{color:"#F4541C"}}/>
            });
        }else{
            let game = {
                game_section: "method",
                game_level: "game1",
                user_answer: {
                    A1: answer1,
                    A2: answer2,
                    A3: answer3,
                },
            };
            console.log("GAME", game);
            AttributeGame(game, props.parentHistory, setConfetti)
        }
    };

    useEffect(() => {
        window.addEventListener("keyup", (event)  => {validationKey(event, setAnswer1, setAnswer2, setAnswer3)}, false);
    }, []);

    const classCar =
        `class Carro = {
        constructor(color, sonido){
            this.color = color;
            this.sonido = sonido;
            this.luces = true;
        }
        // que metodos podrian ir aqui
    }`;


    const turnOnLight =
        `EncenderLuces() {
            this.luces = true;
        }`;

    const getAge =
        `GetEdad() {
            return = edad;
        }`;

    const turnOffLight =
        `ApagarLuces() {
            this.luces = false;
        }`;

    const options = {
        lineNumbers: true,
        mode: "javascript",
        readOnly: true,
        smartIndent: true,
        direction: "ltr",
        indentUnit: 1,
        screenReaderLabel: "clase carro"
    };

    return(
        <div>
            <div style={{top: 0, position: "fixed", zIndex: 2}}>
                <ConfettiComponent run={showConfetti}/>
            </div>
            <div style={{ background: props.titleColor }}>
                <h1>Indica si el método deberia ir o no en la clase</h1>
                <h2>
                    Observa los atributos de la clase Carro, luego indentifica los métodos que pueden ser de la clase.
                    <br/>
                    Da click en el boton "Revisar mis respuestas" cuando hayas terminado.
                </h2>
            </div>

           <div>
            <Row gutter={16}>
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
           </div>

            <Row gutter={16} className="col-code">
                <Col span={12}>
                    <CodeMirror value={classCar} options={options}  className="CodeMirror"/>
                </Col>
            </Row>
            <Divider />

            <div>
                <Row gutter={16}>
                    <Col span={12} className="col-code">
                        <CodeMirror value={getAge} options={options}/>
                    </Col>
                    <Col gutter={6}>
                       <Radio.Group
                           value={answer1}
                           onChange={e => setAnswer1(e.target.value)}
                           size={size}
                           className={"radio-wrapper"}
                       >
                           <Radio.Button value={1}  id={"buttonOne"} icon={<CheckOutlined />}>
                               Incorrecto [1]
                           </Radio.Button>
                           <Divider orientation={"horizontal"}/>
                           <Radio.Button value={3} id={"buttonThree"}>
                               Correct [3]
                           </Radio.Button>
                       </Radio.Group>
                    </Col>
                </Row>

                <Divider />

                <Row gutter={16}>
                    <Col span={12} className="col-code">
                        <CodeMirror value={turnOnLight} options={options} className="CodeMirror"/>
                    </Col>
                    <Col gutter={6}>
                        <Radio.Group
                            value={answer2}
                            onChange={e => setAnswer2(e.target.value)}
                            size={size}
                            className={"radio-wrapper"}
                        >
                            <Radio.Button value={4}  id={"buttonFour"}>
                                Incorrecto [4]
                            </Radio.Button>
                            <Divider orientation={"horizontal"}/>
                            <Radio.Button value={6} id={"buttonSix"}>
                                Correcto [6]
                            </Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>

                <Divider />

                <Row gutter={16}>
                    <Col span={12} className="col-code">
                        <CodeMirror value={turnOffLight} options={options} className="CodeMirror"/>
                    </Col>

                    <Col span={6} className="col-code">
                        <Radio.Group
                            value={answer3}
                            onChange={e => setAnswer3(e.target.value)}
                            size={size}
                            className={"radio-wrapper"}
                        >
                            <Radio.Button value={7}  id={"buttonSeven"}>
                                Incorrecto [7]
                            </Radio.Button>
                            <Divider orientation={"horizontal"}/>
                            <Radio.Button value={9} id={"buttonNine"}>
                                Correct [9]
                            </Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>

            </div>

        </div>
    )

};

export default AppropriateMethod
