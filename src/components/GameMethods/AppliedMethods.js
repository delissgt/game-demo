import React, {useEffect, useState} from "react";
import {Card, notification, Row, Col, Button, Radio, Divider} from "antd";
import CodeMirror from "react-codemirror";
import {MehOutlined} from "@ant-design/icons";
import {AttributeGame} from "../../utils/HttpRequestGame";
import {validationKey} from "../../Helpers/ValidationKey";
import ConfettiComponent from "../ConfettiComponent";

const AppliedMethods = props => {
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
                game_level: "game2",
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

    const classAdmin = `class Administrador = {
                    constructor(...){...}
                    
                    VerInfoEmpleados {
                    // codigo
                    }
                    
                    DarAltaEmpleado {
                    // codigo 
                    }
                    
                    DarBajeEmpleado {
                    // codigo
                    }
                    
                    BuscarEmpleado {
                    // codigo
                    }
                    
                    ModificarDatoEmpleado {
                    // codigo
                    }
          }`;


    const classMember = `class MiembroZoologico() {
    
        constructor(..) {...}
    
        AcumularPuntos() {
        // codigo
        }
    
        RenovarMembrecia() {
        // codigo
        }
    
        ComprarBoletos() {
        // codigo
        }
    
        ComprarSouvenir() {
        // codigo
        }
    
    }`;

    const classHelper = `class AyudanteZoologico() {
        constructor(...) {...}
        AcumularPuntos() {
        // codigo
        }
        
        ComprarSouvenir() {
        // codigo
        }
    }`;

    const options = {
        lineNumbers: true,
        mode: "javascript",
        readOnly: true,
        smartIndent: true,
        direction: "ltr",
        indentUnit: 1,
    };



    return(
        <div>
            <div style={{top: 0, position: "fixed", zIndex: 2}}>
                <ConfettiComponent run={showConfetti}/>
            </div>
            <div style={{ background: props.titleColor }}>
                <h1>Que métodos faltan por agregar en el código</h1>
                <h2>
                    Indica si es codigo es correcto o incorrecto dependiendo si tiene o no todos los métodos que se
                    indican en la tarjeta de la izquierda.
                    <br/>
                    Da click en el boton "Revisar mis respuestas" cuando hayas terminado.
                </h2>
            </div>

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

            <div>
                <Row justify="space-around">
                    <Col span={8}>
                       <Card title={"Ayudante de Zoologico"}>
                           Los ayudantes del zológico pueden: acumular puntos para despues usarlos, tambien pueden comprar
                           souvenirs con sus puntos acumulados, los ayudantes podran ver su horario en el sitio.
                       </Card>
                    </Col>
                    <Col span={8}>
                        <CodeMirror value={classHelper} options={options}/>
                    </Col>
                    <Col span={4}>
                        <Radio.Group
                            value={answer1}
                            onChange={e => setAnswer1(e.target.value)}
                            size={size}
                            className={"radio-wrapper"}
                        >
                            <Radio.Button value={1} id={"buttonOne"}>
                                Correcto [1]
                            </Radio.Button>
                            <Divider orientation={"horizontal"}/>
                            <Radio.Button value={3} id={"buttonThree"}>
                                Incorrecto [3]
                            </Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>
                <Divider orientation={"horizontal"}/>
                <Row justify="space-around">
                    <Col span={8}>
                        <Card title={"Administrador de Zoologico"}>
                            El administrador del zoológico puede: ver informacion de los empleados, y buscar un empleado
                             en especifico, tambien puede dar de alta, dar de baja y modificar a los datos de los
                            empleados.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <CodeMirror value={classAdmin} options={options}/>
                    </Col>
                    <Col span={4}>
                        <Radio.Group
                            value={answer2}
                            onChange={e => setAnswer2(e.target.value)}
                            size={size}
                            className={"radio-wrapper"}
                        >
                            <Radio.Button  value={4} id={"ButtonFour"}>
                                Correcto [4]
                            </Radio.Button>
                            <Divider orientation={"horizontal"}/>
                            <Radio.Button value={6} id={"ButtonSix"}>
                                Incorrecto [6]
                            </Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>
                <Divider orientation={"horizontal"}/>
                <Row justify="space-around">
                    <Col span={8}>
                        <Card title={"Miembros de Zoologico"}>
                            Cada miembro del zoológico puede acumular puntos para despues usarlos, tambien pueden renovar
                            su membrecía y pueden comprar boletos y souvenirs.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <CodeMirror value={classMember} options={options}/>
                    </Col>
                    <Col span={4}>
                        <Radio.Group
                            value={answer3}
                            onChange={e => setAnswer3(e.target.value)}
                            size={size}
                        >
                            <Radio.Button  value={7} id={"ButtonSeven"}>
                                Correcto [7]
                            </Radio.Button>
                            <Divider orientation={"horizontal"}/>
                            <Radio.Button value={9} id={"ButtonNine"}>
                                Incorrecto [9]
                            </Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>

            </div>

        </div>
    )
};

export default AppliedMethods