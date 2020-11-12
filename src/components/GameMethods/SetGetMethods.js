import React, {useEffect, useState} from "react";
import {Col, Row, Button, notification, Radio, Divider} from "antd";
import {MehOutlined, CheckOutlined} from "@ant-design/icons";
import {AttributeGame} from "../../utils/HttpRequestGame";
import {validationKey} from "../../Helpers/ValidationKey";
import CodeMirror from "react-codemirror";

const SetGetMethods = props => {

    const [size] = useState(localStorage.getItem("size"));
    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [answer3, setAnswer3] = useState(0);

    const handleClick = () => {
        if (answer1 === 0 || answer2 === 0 || answer3 === 0){
            notification.open({
                message: "Contesta TODAS las preguntas",
                icon: <MehOutlined style={{color:"#F4541C"}}/>
            });
        }else{
            let game = {
                game_section: "method",
                game_level: "game3",
                user_answer: {
                    A1: answer1,
                    A2: answer2,
                    A3: answer3,
                },
            };
            console.log("GAME", game);
            AttributeGame(game, props.parentHistory)
        }
    };

    useEffect(() => {
        window.addEventListener("keyup", (event)  => {validationKey(event, setAnswer1, setAnswer2, setAnswer3)}, false);
    }, []);

    const claseMiembroZoo = `class MiembroZoologico{
    constructor(nombre, contraseña){
        this.nombre = nombre;
        this.contraseña = contraseña;
        this.puntos = 0;
    }
}`;

    const codeName = `class MiembroDeZoologico{
    constructor(...){...}
    
    getNombre(){
        return this.nombre = nombre;
    }
    
    setNombre(nombre){
        this.nombre = nombre;
    }
    }`;

    const codePassword = `class MiembroDeZoologico{
    constructor(...){...}
    
    getContraseña(){
        return this.contraseña;
    }
    
    setContraseña(nuevaContraseña){
        this.contraseña = nuevaContraseña;
    }
    }`;

    const codePoints = `class MiembroDeZoologico{
    constructor(...){...}
    
    getPuntos() {
        return this.puntos;
    }
    
    setPuntos(puntos) {
        if(puntos !== 0){
            calcularPuntos(puntos);
        }
    }
    
    calcularPuntos(puntos){
        this.puntos += puntos;
    }
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
            <div style={{ background: props.titleColor }}>
                <h1>Indica si los metodos set y get son correctos</h1>
                <h2>
                    Recuerdas para que eran los métodos get y set?. Revisa los métodos get y set e identifica cuales
                    son correctos
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
                    <CodeMirror value={claseMiembroZoo} options={options} />
                </Col>
            </Row>
            <Divider />

            <div>
                <Row gutter={16}>
                    <Col span={12} className="col-code">
                        <CodeMirror value={codeName} options={options}/>
                    </Col>
                    <Col gutter={6}>
                        <Radio.Group
                            value={answer1}
                            onChange={e => setAnswer1(e.target.value)}
                            size={size}
                            className={"radio-wrapper"}
                        >
                            <Radio.Button value={1}  id={"buttonOne"} icon={<CheckOutlined />}>
                                Correcto [1]
                            </Radio.Button>
                            <Divider orientation={"horizontal"}/>
                            <Radio.Button value={3} id={"buttonThree"}>
                                Incorrect [3]
                            </Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>

                <Divider />

                <Row gutter={16}>
                    <Col span={12} className="col-code">
                        <CodeMirror value={codePassword} options={options} className="CodeMirror"/>
                    </Col>
                    <Col gutter={6}>
                        <Radio.Group
                            value={answer2}
                            onChange={e => setAnswer2(e.target.value)}
                            size={size}
                            className={"radio-wrapper"}
                        >
                            <Radio.Button value={4}  id={"buttonFour"}>
                                Correcto [4]
                            </Radio.Button>
                            <Divider orientation={"horizontal"}/>
                            <Radio.Button value={6} id={"buttonSix"}>
                                Incorrecto [6]
                            </Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>

                <Divider />

                <Row gutter={16}>
                    <Col span={12} className="col-code">
                        <CodeMirror value={codePoints} options={options} className="CodeMirror"/>
                    </Col>

                    <Col span={6} className="col-code">
                        <Radio.Group
                            value={answer3}
                            onChange={e => setAnswer3(e.target.value)}
                            size={size}
                            className={"radio-wrapper"}
                        >
                            <Radio.Button value={7}  id={"buttonSeven"}>
                                Correcto [7]
                            </Radio.Button>
                            <Divider orientation={"horizontal"}/>
                            <Radio.Button value={9} id={"buttonNine"}>
                                Incorrect [9]
                            </Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>

            </div>

        </div>
    );


};

export default SetGetMethods