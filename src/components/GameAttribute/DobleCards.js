import React, {useEffect, useState} from "react";
import {Card, Divider, Col, Row, Button, Radio, Affix} from 'antd';
import {Avatar} from "antd/es";

import Lion from '../../assets/Animals/lion-48.png';
import Tiger from '../../assets/Animals/tiger-face-48.png';
import Leopard from '../../assets/Animals/leopard-48.png';
import Giraffe from '../../assets/Animals/giraffe-48.png';

import "./style.css";

const {Meta} = Card;

const DobleCards = () => {
    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [answer3, setAnswer3] = useState(0);

    const [buttonState1, setButton1] = useState(false);
    const [buttonState3, setButton3] = useState(false);
    const [buttonState4, setButton4] = useState(false);
    const [buttonState6, setButton6] = useState(false);
    const [buttonState7, setButton7] = useState(false);
    const [buttonState9, setButton9] = useState(false);

    const handleClick = () => {
        console.log('click , revisar respuestas');
        console.log('answer1', answer1);
        console.log('answer2', answer2);
        console.log('answer3', answer3);
        let answer = {
            AttributesUserAnswerGame2 : {
                answer1: answer1,
                answer2: answer2,
                answer3: answer3,
            }
        };
        console.log('ANSWER send to endpoint', answer);

    };


    useEffect( () => {
        window.addEventListener("keyup", validateKey, false)
    } , [answer1, answer2, answer3]);

    const validateKey = (event) => {
        // const e = event.keyCode;
        // const e = event.key;
        console.log("event", event);
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



  return(
     <div>
         <h1 style={{ backgroundColor: "#90f489"}}>
             Elige la tarjeta correcta de cada par de tarjetas.
         </h1>
         <h2 style={{ backgroundColor: "#90f489"}}>
             Da click en el boton "Revisar mis respuestas" cuando hayas terminado.
             TIP: El valor del atributo no describe bien a los atributos del animal.
             Ayudate con la tarjeta del Leon.
         </h2>

         <Row gutter={16}>
             <Col span={12}>
                 <Card style={{ width: 300, alignContent: "left"}} >
                     <Meta
                         avatar={<Avatar src={Lion} />}
                         title="Leon"
                         description={"caracteristicas:"}
                     />
                     <Divider dashed/>
                     <p>Alimentacion: carnivoro</p>
                     <p>Habitat: sabanas y pastizales</p>
                     <p>Peso: 150.500 kg</p>
                 </Card>
             </Col>
             <Col span={12} >
                 <Affix offsetTop={20}>
                     <Button type="primary" size={"large"} onClick={() => {handleClick()}} >Revisar Respuestas</Button>
                 </Affix>
             </Col>
         </Row>

         <Divider/>
         <div>
             <Row gutter={16}>
                 <Col span={8}>
                     <Card style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={Tiger}/>}
                             title="Tigre"
                         />
                         <Divider dashed/>
                         <p>Alimentacion: Carnivoro</p>
                         <p>Habitat: Macho</p>
                         <p>Peso: Falso</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Targeta 1</p>
                         {/*<Button onClick={()=> handleClick('1')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>

                 <Col span={8}>
                     <Radio.Group onChange={e => setAnswer1(e.target.value) || validateKey(e.target.value)} size={"large"}>
                         <Radio.Button value={1} checked={buttonState1}>
                             Tarjeta 1
                         </Radio.Button>
                         <Divider type={"vertical"} />
                         <Divider type={"vertical"} />
                         <Radio.Button value={3} checked={buttonState3}>
                             Tarjeta 3
                         </Radio.Button>
                     </Radio.Group>
                     {/*<div>*/}
                     {/*    <img src={Ok} style={{ height: "40px", width: "40px" }}/>*/}
                     {/*</div>*/}
                 </Col>

                 <Col span={8}>
                     <Card  style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={Tiger}/>}
                             title="Tigre"
                         />
                         <Divider dashed/>
                         <p>Alimentacion: Carnivoro</p>
                         <p>Habitat: Selvas tropicales, pastizales, sabanas</p>
                         <p>Peso: 200.00 kg</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Tarjeta 3</p>
                         {/*<Button onClick={()=> handleClick('2')} size={'large'} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>
             </Row>

             <Divider/>

             <Row gutter={16}>
                 <Col span={8}>
                     <Card style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={Leopard} />}
                             title="Leopardo"
                         />
                         <Divider dashed/>
                         <p>Alimentacion: Omnívoro</p>
                         <p>Habitat: Selvas tropicales, pastizales, sabanas</p>
                         <p>Peso: 8 meses</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Tarjeta 4</p>
                         {/*<Button onClick={()=> handleClick('1')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>

                 <Col span={8}>
                     <Radio.Group onChange={e => setAnswer2(e.target.value) || validateKey(e.target.value)} size={"large"}>
                         <Radio.Button value={4} checked={buttonState4}>
                             Izquierda 4
                         </Radio.Button>
                         <Divider type={"vertical"} />
                         <Divider type={"vertical"} />
                         <Radio.Button value={6} checked={buttonState6}>
                             Derecha 6
                         </Radio.Button>
                     </Radio.Group>
                 </Col>

                 <Col span={8}>
                     <Card style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={Leopard} />}
                             title="Leopardo"
                         />
                         <Divider dashed/>
                         <p>Alimentacion: Carnivoro</p>
                         <p>Habitat: Selvas tropicales, pastizales, sabanas</p>
                         <p>Peso: 200.00 kg</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Tarjeta 6</p>
                         {/*<Button onClick={()=> handleClick('2')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>
             </Row>

             <Divider/>

             <Row gutter={16}>
                 <Col span={8}>
                     <Card style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={Giraffe} />}
                             title="Girafa"
                         />
                         <Divider dashed/>
                         <p>Alimentacion: Herviboro</p>
                         <p>Habitat: Sabanas, bosques y campos africanos</p>
                         <p>Peso: 190.00 kg</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Tarjeta 7</p>
                         {/*<Button onClick={()=> handleClick('1')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>

                 <Col span={8}>
                     <Radio.Group onChange={e => setAnswer3(e.target.value) || validateKey(e.target.value)} size={"large"}>
                         <Radio.Button value={7} checked={buttonState7}>
                             Izquierda 7
                         </Radio.Button>
                         <Divider type={"vertical"} />
                         <Divider type={"vertical"} />
                         <Radio.Button value={9} checked={buttonState9}>
                             Derecha 9
                         </Radio.Button>
                     </Radio.Group>
                 </Col>

                 <Col span={8}>
                     <Card style={{ width: 300, alignContent: "left"}} >
                         <Meta
                             avatar={<Avatar src={Giraffe} />}
                             title="Girafa"
                         />
                         <Divider dashed/>
                         <p>Alimentacion: Carnívoro</p>
                         <p>Habitat: Sabanas, bosques y campos africanos</p>
                         <p>Peso: 190.0.0 kg</p>
                         <Divider style={{ borderWidth: "2px 0 0" }}/>
                         <p>Tarjeta 9</p>
                         {/*<Button onClick={()=> handleClick('2')} size={'large'} block={true} style={{ width: "80%" }}>OK</Button>*/}
                     </Card>
                 </Col>
             </Row>

         </div>
     </div>
  );
};

export default DobleCards;